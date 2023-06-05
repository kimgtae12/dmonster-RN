# components 관리

## Modal

ModalComponent.tsx

- react-native-modal을 import 해야 사용이 가능합니다.
  `import Modal from "react-native-modal";`

  ㄴtype props에 'confirm'을 전달하면, 버튼이 2개인 모달, 'basic'은 버튼이 하나인 모달입니다.

  ㄴ버튼이 2개인 모달을 사용하실땐 rightOnPress에 accessAction을 전달해주세요.

  ㄴisVisible, onBackButtonPress, onBackdropPress등을 지원하며, 더 많은 기능은 https://github.com/react-native-modal/react-native-modal 를 참조해주세요.

## Button

ButtonComponent.tsx
