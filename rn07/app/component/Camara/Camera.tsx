import HeaderComponents from '@/component/Header/HeaderComponent';
import { StackPropsType } from '@/navigation/navigationType';
import { CustomText } from '@/theme/styles';
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
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import {Asset, CameraType, ImagePickerResponse, MediaType, PhotoQuality, launchCamera} from 'react-native-image-picker';
import {PERMISSIONS, check, request} from 'react-native-permissions';

interface Option {
  mediaType: MediaType;
  cameraType: CameraType | undefined;
  maxWidth: number;
  maxHeight: number;
  quality: PhotoQuality | undefined;
  presentationStyle: "fullScreen" | "currentContext" | "pageSheet" | "formSheet" | "popover" | "overFullScreen" | "overCurrentContext" | undefined;
}

const Camera = ({navigation}:StackPropsType) => {
  //카메라 옵션
  const imagePickerOption: Option = {
    mediaType: 'photo',
    cameraType: 'back',
    maxWidth: 500,
    maxHeight: 500,
    quality: 1.0,
    presentationStyle: 'fullScreen',
  };

  //카메라 권한 검사 및 권환 획득
  const handleCamera = async () => {
    const camara =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA //ios 카메라 권환
        : PERMISSIONS.ANDROID.CAMERA;//android 카메라 권한

    check(camara).then(result => { //현재 부여되어있는 권한을 확인합니다.
      console.log('카메라 result', result);
      if (result === 'granted') { //권한이 부여되어 있는 상태입니다.
        CameraOn();
      } else { //권한이 부여되어있지않은상태입니다.
        grantedCheck();
      }
    });

    const grantedCheck = async () => { //권한을 요청합니다.
      const granted = await request(camara).then((item:string) => {
        console.log('item', item);
        if (item === 'granted') { //권한요청 후 승인을 했을때 
          CameraOn();
          return true;
        } else if (item == 'never_ask_again') { //권한요청 후 거절 및 다시묻지않음을 선택했을때
          Alert.alert('카메라를 이용하시려면 카메라 권한이 필요합니다.', '', [
            {
              text: '확인',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ]);
          return false;
        } else if (item === 'blocked') { //권한요청 후 거절 하였을때
          Alert.alert('카메라를 이용하시려면 카메라 권한이 필요합니다.', '', [
            {
              text: '확인',
              onPress: () => {
                Linking.openSettings(); //앱설정 페이지로 이동합니다.
              },
            },
          ]);
        }
      });
      console.log('granted', granted);
    };
  };

  const onPickImage = (res : ImagePickerResponse) => {//사진 촬영후 전달받는 이미지를 확인 할 수 있습니다. ImagePickerResponse 타입으로 반환받습니다.
    if (res.didCancel || !res) {
      return;
    } else {
      console.log('res', res);
    }
    console.log(res);
  };

  const onPickImageEdit = (editImage : ImageOrVideo) => { //편집 이미지를 전달받을 경우 imageOrVideo 타입을 사용하면됩니다.
    console.log(editImage);
  }

  const CameraOn = async () => { //카메라를 키는 메서드 입니다. 편집기능(openCamera) , 기본카메라 (launchCamera) 둘중 하나를 선택하셔서 카메라를 사용하시면됩니다.
  
    // 카메라 편집 기능을 이용하기위해선 아래 모듈을 사용해주시면 됩니다. promise type이므로 then 및 catch 사용가능합니다.
    ImagePicker.openCamera({
      cropping: true, //자르기 기능을 사용할 수 있습니다. boolean 값을 주시면 됩니다.
      width: 300, //반환되는 이미지의 width입니다. 제한을 두고싶지않다면 입력하지 않아도 무방합니다.
      height: 400, //반환되는 이미지의 height입니다. width와 마찬가지로 입력하지 않아도 무방합니다.
      compressImageMaxWidth: 1000, //변환되는 이미지의 최대 width입니다.
      compressImageMaxHeight: 1000, //변환되는 이미지의 최대 height입니다.
      compressImageQuality: 0.99,
    }).then(image => {
      onPickImageEdit(image);
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
      />
      <TouchableOpacity style={styles.Text} onPress={handleCamera}>
        <CustomText>카메라 촬영</CustomText>
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
