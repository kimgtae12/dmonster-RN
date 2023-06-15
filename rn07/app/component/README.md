# components 관리

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

- 뒤로가기를 눌렀을때 앱이꺼지는 현상을 방지해주고, 이전스택으로 돌아갈 수 있도록 해줍니다.

- isRoot가 true일때 뒤로가기를 두번누르면 앱이 종료됩니다.

- 사용한 패키지는 react-native-exit-app 입니다.