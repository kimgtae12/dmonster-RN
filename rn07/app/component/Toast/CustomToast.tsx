import {Platform} from 'react-native';
import Toast, { ToastPosition } from 'react-native-toast-message';

const cusToast = (
  message: string,
  duration?: number,
  position?: ToastPosition,
  offset?: number,
) => {
  //message   : 토스트 메세지
  //duration  : 토스트 메세지가 띄어질 시간
  //position  : 토스트 메세지의 위치 설정 top/bottom중에 설정이 가능합니다.
  //offset    : 화면 하단에서 떨어질 px

  //message만 전달 해도 됩니다.
  const str =
    `{
    "message" :"` +
    message +
    `"
  }`;

  Toast.show({
    type: 'custom_type',
    position: position ? position : Platform.OS === 'ios' ? 'bottom' : 'bottom', //top | bottom
    text1: JSON.parse(str),
    visibilityTime: duration ? duration : 2000,
    autoHide: true,
    // topOffset: (Platform.OS === 'ios'? 66 + getStatusBarHeight() : 10), //postions top일때 사용 , 사용법은 bottomOffset과 동일합니다.
    bottomOffset: offset ? offset + 10 : Platform.OS === 'ios' ? 25 : 10, //postions bottom일 때 사용
  });
};

export default cusToast;
