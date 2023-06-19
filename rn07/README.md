# 필독

# Fast React Native Template for Seonpark

빠른 개발을 위해 자주 사용하는 라이브러리를 합쳐놓았습니다.

해당 템플릿은 TypeScript를 기반으로 제작되었습니다. Typescript의 기초적인 지식을 요구합니다.
  - 각 tsx를 포함하는 폴더에 type파일을 지정해두었습니다.
  - component 및 screen 폴더의 Common~Type.ts에는 공통적으로 사용하는 type을 작성해주시고 export하여 사용해주세요.
  - 한 페이지에서만 사용하는 interface 혹은 type의 경우에는 해당페이지 import 밑에 선언해주시면됩니다.
  - typescript를 잘모르신다면 반드시 구글 혹은  typeGuide.ts를 정독하여주시고 학습해주세요. 가장 기초적인 지식들이므로, typescript를 사용하기위해선 꼭 학습해주세요.

## Base Source By
https://github.com/pksung1/fast-react-native
https://github.com/pksung1

## Editor By
Dmonster 김경태,이예은

## How To Start?
```
npx react-native init [AppName] --template https://github.com/kimgtae12/dmonster-rn.git
```

## Applied Version
React Native 0.71.3

## Folder Architecture
- @/assets : 이미지, lottie 를 관리합니다.
- @/components : 앱의 컴포넌트를 관리합니다.
  - /Button : 커스텀 Button을 관리합니다.
  - /Header : 커스텀 Header를 관리합니다.
  - /interface : UI 관련 컴포넌트를 관리합니다.
  - /Modal : Modal 컴포넌트를 관리합니다.
  - /Toast : Toast 컴포넌트를 관리합니다.
- @/hooks : react hooks 를 관리합니다. (타어머 등..)
- @/i18n : 다국어를 관리합니다.
- @/lib : 라이브러리를 생성하거나 관리합니다.
  - /reactQueryClient : reactQuery 관련 setting 및 module이 담겨있는 폴더입니다.
- @/navigation : 네비게이션 코드를 작성합니다.
  - /auth.tsx : 인증(자동로그인), 로그인, 회원가입 등 로그인전에 사용하는 페이지들의 router를 설정하는 페이지입니다.
  - /index.tsx : auth 및 Router 등의 라우터를 담는 최상위 root router입니다.
  - /Router.tsx : 로그인 후 사용자에게 보여지는 route 들을 관리하는 페이지 입니다.
  - /Main.tsx : 로그인 후 Bottom Tab Navigation을 담고있는 최상위 페이지 입니다.
- @/store : 앱 상태관리를 위한 redux store 입니다.
  - store는 zustand를 사용하고있습니다. 관련 사용법은 store폴더내의 readme를 참고해주세요.
- @/themes : 테마 색상, 폰트등을 관리합니다.
  - /color.ts : 프로젝트에 사용되는 color들을 관리하고 사용할 수 있습니다..
  - /styles.ts : style-component들을 관리합니다. 여기엔 CustomText, CustomTextInput등 커스텀 form들을 생성 및 관리 할 수 있습니다.
  - /stylesPropsType.ts : styles.ts에서 사용하는 스타일 컴포넌트들의 props type들을 관리합니다.

## Tech Stack

### Language
- [Typescript](https://www.typescriptlang.org/)

### Data store FLUX 패턴을 위한 데이터관리
- [redux-toolkit](https://redux-toolkit.js.org/)

### API Fetch 비동기 요청 처리
- [redux-thunk with redux-toolkit](https://redux-toolkit.js.org/api/createAsyncThunk)

### Navigation 앱 라우팅 작업
- [react-navigation 6.x](https://reactnavigation.org/)
- [react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator)
- [react-navigation/material-top-tabs](https://reactnavigation.org/docs/material-top-tab-navigator)

### Localization 다국어 지원
- [i18n-js](https://github.com/fnando/i18n-js)
- [react-native-localize](https://github.com/zoontek/react-native-localize)

### More
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) 스플래시 스크린 커스터마이징

