# components 관리 - Write By 김경태, 이예은

## Modal

ModalComponent.tsx

`npm i react-native-modal` 또는 `yarn add react-native-modal`가 필요합니다.

- react-native-modal을 import 해야 사용이 가능합니다.

  `import Modal from "react-native-modal";`

- props 설명

  - **visible** : 부모 컴포넌트에서 props로 받아온 boolean값으로 작동합니다.

    modal의 visible 속성을 관리합니다.

  - **close** <()=>void> : void 함수입니다.

    모달을 호출한 부모 컴포넌트에서 선언하여 props로 전달받은후 modal을 종료할때 사용합니다.

  - **type** <'basic' | 'confirm'> : confirm modal인지 basic modal인지 판단합니다.

    confirm일경우 button이 취소 및 확인이 출력되고, basic일경우 확인 버튼만 출력됩니다.

  - **text** : 모달 내용에 들어갈 text입니다.
  - **leftText** : type 'confrim'선언을 했을 경우 왼쪽 버튼의 text입니다.

    설정을 안했을 경우, 버튼에 '취소' text가 들어갑니다.

  - **rightText** : type 'basic'에서 버튼 text이고, type 'confrim'에선 오른쪽 버튼의 text입니다.

    설정을 안했을 경우, 버튼에 '확인' text가 들어갑니다.

  - **rightOnPress** <() => void> : void 함수입니다.

    type이 'confrim'인 모달에서 사용됩니다.

    모달을 호출한 부모 컴포넌트에서 선언하여 props로 전달받은후 modal의 오른쪽 버튼 클릭시 실행됩니다.

- 버튼이 2개인 모달을 사용하실땐 rightOnPress에 accessAction을 전달해주세요.

- isVisible, onBackButtonPress, onBackdropPress등을 지원하며, 더 많은 기능은 <https://github.com/react-native-modal/react-native-modal> 를 참조해주세요.

LoadingModal.tsx

- 사용 패키지 : react-native-modal

- props 설명

  - **visible** : 부모 컴포넌트에서 props로 받아온 boolean값으로 작동합니다.

  modal의 visible 속성을 관리합니다.

## Button

ButtonComponent.tsx

`npm i react-native-toast-message` 또는 `yarn add react-native-toast-message`가 필요합니다.

- props 설명

  - **btnPress** : 버튼 이벤트 함수입니다.

    모달을 호출한 부모 컴포넌트에서 선언하여 props로 전달 받습니다.

  - **value** : 버튼에 들어갈 text입니다.

## Toast

App.tsx에서 Toast를 추가해야합니다.

```
<QueryClientProvider client={queryClient}>
    <AppNavigation />
    <Toast config={toastConfig} />  //추가해야합니다.
</QueryClientProvider>
```

필요한 페이지에서 선언해주면 됩니다.

```
 cusToast('커스텀 토스트', 4000, 'bottom', 50)
```

- CustomToast 설명

  - **type** : ToastConfig.tsx에서 불러올 type props입니다. 'custom_type'

  - **position** : Toast 위치설정입니다. type 은 'top' / 'bottom'입니다.

    설정을 안하면 'bottom'에 위치됩니다.

  - **text1** : 토스트 메세지 입니다. 필수로 입력해야 하는 값입니다.

  - **visibilityTime** : Toast가 자동으로 숨겨지는 시간(밀리초)입니다. autoHide 소품이 true로 설정된 경우에만 효과가 있습니다.

  - **autoHide** : true인 경우 표시되는 Toast는 visibilityTime 소품에 지정된 특정 시간(밀리초) 후에 자동으로 숨겨집니다.

  - **bottomOffset** : postion이 bottom일때 작동됩니다. 화면 하단으로부터의 오프셋(px 단위)입니다.

  text1만 입력해도 됩니다.

- 더 많은 기능은 <https://github.com/calintamas/react-native-toast-message>를 참조해주세요.

## Header

- 예시

```
 <HeaderComponents
    backButton={true}
    title={'TestPage'}
    alramButton={true}
    navigation={navigation}
/>
```

- 설명

  - **backButton** : true이면 뒤로가기 버튼이 작동됩니다.

  - **closeButton** : true이면 닫기 버튼이 작동됩니다.

  - **alramButton** : true이면 알림 버튼이 작동됩니다.

  - **title** : Header 제목입니다.

  - **backgroundColor** : 헤더 배경색입니다.

  - **close** : 왼쪽 버튼의 닫기 event입니다. 부모 컴포넌트에서 선언한 함수를 props로 전달 받아서 사용합니다.

  - **Fontcolor** : 헤더의 폰트 컬러입니다.

  - **RightOnPress** : 오른쪽 버튼 event입니다. 부모 컴포넌트에서 생성후 props로 전달합니다.

## Interface

- interface 관련 컴포넌트가 작성됩니다.

## BackHandler.tsx

- 뒤로가기를 눌렀을때 앱이 내려가는
  현상을 방지해주고, 이전스택으로 돌아갈 수 있도록 해줍니다.

- isRoot가 true일때 뒤로가기를 두번누르면 앱이 종료됩니다.

- 사용한 패키지는 react-native-exit-app 입니다.

- native 설정은 https://github.com/wumke/react-native-exit-app 을 참고해주세요.

- 사용법은 다음과 같습니다.

```
//최상위 루트 screen일경우 ex) Home
export const Main = () => {
  ...some logic

  return(
    <BackHandlerCom isRoot />
  )
}

//하위 screen 일 경우
export const MainChildren = () => {
  ...some logic

  return(
    <BackHandlerCom />
    ...some jsx
  )
}
```

## Image

Image.tsx

react-native-modal을 import 해야 사용이 가능합니다.

`npm install react-native-auto-height-image` 또는 `yarn add react-native-auto-height-image`

- 이 구성 요소는 원격 이미지를 로드하고 이미지 높이를 제공된 너비에 맞는 이미지 치수로 자동 설정하는 간단한 방법을 제공합니다.

```
<AutoHeightImage
  width={100}
  source={{uri: 'http://placehold.it/350x150'}}
/>
```

- 설명

  - **width** : (필수) 이미지 넓이 입니다.

  - **maxHeight** : 이미지 최대 높이입니다.

  - **source** : (필수) 이미지 주소입니다.

    `source = {{uri : '이미지 주소'}} / source = {require('내장 이미지 주소')}`

    둘 중 하나 사용하시면 됩니다.

- 더 많은 기능은 <https://github.com/vivaxy/react-native-auto-height-image>를 참조해주세요.

## Camera && Image

### 기본 카메라 , 기본 앨범 사용 시

react-native-image-picker을 import 해야 사용이 가능합니다.

`npm install react-native-image-picker` 또는 `yarn add react-native-image-picker`

**카메라**

- 카메라 촬영을 위해 launchCamera를 사용합니다. 아래 코드를 추가해주세요.

```
import {launchCamera} from 'react-native-image-picker';

...

launchCamera(imagePickerOption, onPickImage);

```
- 카메라를 사용하기 위해 카메라 옵션을 추가해야합니다. 아래 코드를 참고해주세요.

```
const imagePickerOption = {
  mediaType: 'photo',
  cameraType: 'back',
  maxWidth: 1000,
  maxHeight: 1000,
  quality: 1.0,
  presentationStyle: 'fullScreen',
};
```

**앨범**

- 기본 앨범 사용을 위해 launchImageLibrary를 사용합니다. 아래 코드를 추가해주세요.
```
import { launchImageLibrary } from 'react-native-image-picker';

...

launchImageLibrary(options, onPickImage);
```
- 앨범을 사용하기 위해 옵션을 추가해야합니다. 아래 코드를 참고해주세요.

```
const imagePickerOption = {
  mediaType: 'photo',
  maxWidth: 500,
  maxHeight: 500,
  quality: 1,
  includeBase64: Platform.OS === 'android',
};
```


- props 설명

  - **mediaType** : 'photo' 또는 'video'중 선택이 가능합니다. 'photo'는 사진 촬영입니다.
  - **cameraType** : 'back', 'front'중 선택이 가능하고 'back'은 후면카메라입니다.
  - **maxWidth** : 이미지 가로 사이즈의 최대 사이즈 조절을 위한 기능입니다.
  - **maxHeight** : 이미지 세로 사이즈 최대 사이즈 조절을 위한 기능입니다.
  - **quality** : 1에 가까울수록 화질이 좋아집니다.
  - **presentationStyle** : 선택기가 표시되는 방식을 제어합니다. 'pageSheet', 'fullScreen', 'pageSheet', 'formSheet', '팝오버', 'overFullScreen', 'overCurrentContext'. 기본값은 'currentContext'입니다.
  - **includeBase64** : 이미지의 base64 문자열입니다.
  - 더 많은 기능은 [여기](https://github.com/react-native-image-picker/react-native-image-picker#options)를 참조해주세요.
    <br>
    <br>

- callback 함수
  - didCancel : 사용자가 프로세스를 취소한 경우 true
  - errorCode : 모든 오류 코드에 대한 ErrorCode 확인
  - errorMessage : 오류 설명, 디버그 목적으로만 사용하십시오.
  - assets : 선택한 이미지의 배열

### 편집 기능 있는 카메라, 이미지 사용 시

react-native-image-crop-picker을 import 해야 사용이 가능합니다.

`npm install react-native-image-crop-picker` 또는 `yarn add react-native-image-crop-picker`

- 이미지 회전, 자르기 기능이 가능한 라이브러리입니다.

카메라로 찍은 이미지 수정

```
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
```

앨범 이미지 수정

```
ImagePicker.openPicker({
  mediaType: 'photo',
  compressImageMaxWidth: 1000,
  compressImageMaxHeight: 1000,
  compressImageQuality: 0.99,
  cropping: true,
  includeBase64: Platform.OS === 'android',
}).then(image => {
  console.log('image', image);
});
```

- props 설명

  - **cropping** : true 일경우 이미지 편집이 가능합니다. (기본값 : false),
  - **width** : 자르기 옵션을 함께 사용할 때 이미지의 넓이
  - **height** : 자르기 옵션을 함께 사용할 때 이미지의 높이
  - **compressImageMaxWidth** : 이미지 압축시 최대 넓이 지정
  - **compressImageMaxHeight** : 이미지 압축시 최대 높이 지정
  - **compressImageQuality** : 이미지 압축시 품질입니다. (0에서 1까지, 1이 최고 품질)
  - **includeBase64** : 이미지의 base64 문자열입니다.
  - 더 많은 기능은 [여기](https://github.com/ivpusic/react-native-image-crop-picker#request-object)를 참조해주세요.

- return 값
  - **path** : 이미지 주소
  - **width** : 이미지 가로 사이즈
  - **height** : 이미지 세로 사이즈
  - **mime** : 이미지 파일 유형
  - **size** : 이미지 용량
  - **modificationDate** : 이미지가 마지막으로 수정된 타임스탬프
  - **data** : base24 주소
  - 더 많은 리턴 값은 [여기](https://github.com/ivpusic/react-native-image-crop-picker#response-object)를 참조해주세요.



