# components 관리

## Modal

ModalComponent.tsx

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

## Button

ButtonComponent.tsx

- props 설명

  - **btnPress** : 버튼 이벤트 함수입니다.

    모달을 호출한 부모 컴포넌트에서 선언하여 props로 전달 받습니다.

  - **value** : 버튼에 들어갈 text입니다.
