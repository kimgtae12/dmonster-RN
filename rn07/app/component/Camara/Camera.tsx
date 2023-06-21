import HeaderComponents from '@/component/Header/HeaderComponent';
import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Linking,
  PermissionsAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera} from 'react-native-image-picker';
import {PERMISSIONS, check, request} from 'react-native-permissions';

const Camera = ({navigation}) => {
  //카메라 옵션
  const imagePickerOption = {
    mediaType: 'photo',
    cameraType: 'back',
    maxWidth: 500,
    maxHeight: 500,
    quality: 1.0,
    presentationStyle: 'fullScreen',
  };

  //카메라 권한
  const handleCamera = async () => {
    const camara =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA;
    check(camara).then(result => {
      console.log('카메라 result', result);
      if (result === 'granted') {
        CameraOn();
      } else {
        grantedCheck();
      }
    });
    const grantedCheck = async () => {
      const granted = await request(camara).then(item => {
        console.log('item', item);
        if (item === 'granted') {
          CameraOn();
          return true;
        } else if (item == 'never_ask_again') {
          Alert.alert('카메라를 이용하시려면 카메라 권한이 필요합니다.', '', [
            {
              text: '확인',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ]);
          return false;
        } else if (item === 'blocked') {
          Alert.alert('카메라를 이용하시려면 카메라 권한이 필요합니다.', '', [
            {
              text: '확인',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ]);
        }
      });
      console.log('granted', granted);
    };
  };

  const CameraOn = async () => {
    const onPickImage = res => {
      if (res.didCancel || !res) {
        return;
      } else {
        console.log('res', res);
      }
      console.log(res);
    };
    // 카메라 편집 기능
    ImagePicker.openCamera({
      cropping: true,
      width: 300,
      height: 400,
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 0.99,
    }).then(image => {
      console.log(image);
    });
    //기본 카메라
    // launchCamera(imagePickerOption, onPickImage);
  };

  return (
    <View style={{flex: 1}}>
      <HeaderComponents
        backButton={true}
        title={''}
        alramButton={false}
        navigation={navigation}
      />
      <TouchableOpacity style={styles.Text} onPress={handleCamera}>
        <Text>카메라 촬영</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    marginTop: 50,
    alignItems: 'center',
  },
});
export default Camera;
