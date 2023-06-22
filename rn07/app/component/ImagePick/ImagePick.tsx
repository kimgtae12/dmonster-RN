import HeaderComponents from '@/component/Header/HeaderComponent';
import { BaseViewItem } from '@/theme/styles';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Linking,
  Image,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import ImagePicker from 'react-native-image-crop-picker';
import {
  CameraType,
  ImagePickerResponse,
  MediaType,
  PhotoQuality,
  launchImageLibrary,
} from 'react-native-image-picker';
import {PERMISSIONS, check, request} from 'react-native-permissions';
interface Option {
  mediaType: MediaType;
  maxWidth: number;
  maxHeight: number;
  quality: PhotoQuality | undefined;
  includeBase64: boolean | undefined;
}
const ImagePick = () => {
  const [image, setImage] = useState('');
  //이미지 권한
  const handleImage = async () => {
    const image =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    check(image).then(result => {
      console.log('image result', result);
      if (result === 'granted') {
        ImageOn();
      } else {
        grantedCheck();
      }
    });
    const grantedCheck = async () => {
      const granted = await request(image).then((item: string) => {
        console.log('item', item);
        if (item === 'granted') {
          ImageOn();
          return true;
        } else if (item === 'denied') {
          Alert.alert(
            '앨범을 이용하시려면 파일 및 미디어 액세스 권한이 필요합니다.',
            '',
            [
              {
                text: '확인',
                onPress: () => {
                  Linking.openSettings();
                },
              },
            ],
          );
          return false;
        } else if (item === 'blocked') {
          Alert.alert(
            '앨범을 이용하시려면 파일 및 미디어 액세스 권한이 필요합니다.',
            '',
            [
              {
                text: '확인',
                onPress: () => {
                  Linking.openSettings();
                },
              },
            ],
          );
        }
      });
    };
  };

  const options: Option = {
    mediaType: 'photo',
    maxWidth: 1000,
    maxHeight: 1000,
    quality: 1,
    includeBase64: Platform.OS === 'android',
  };

  const ImageOn = async () => {
    const onPickImage = (res: ImagePickerResponse) => {
      if (res.didCancel || !res) {
        return;
      } else {
        console.log('res', res);
        setImage(res.assets[0].uri);
        // setImage(`data:image/png;base64,${res.assets[0].base64}`);
      }
    };
    //기본 앨범
    // launchImageLibrary(options, onPickImage);
    //사진 클릭시 사진 편집 가능
    ImagePicker.openPicker({
      mediaType: 'photo',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 0.99,
      cropping: true,
      includeBase64: Platform.OS === 'android',
    }).then(image => {
      console.log('image', image);
      // setImage(`data:image/png;base64,${image.data}`);
      setImage(image.path);
    });
  };

  return (
    <BaseViewItem>
      <HeaderComponents backButton={true} title={'앨범'} alramButton={false} />
      <TouchableOpacity style={styles.Text} onPress={handleImage}>
        <Text>앨범 </Text>
      </TouchableOpacity>
      {image !== '' && <AutoHeightImage source={{ uri: image }} width={300} />}
    </BaseViewItem>
  );
};

const styles = StyleSheet.create({
  Text: {
    marginTop: 50,
    alignSelf: 'center',
  
  },
});
export default ImagePick;
