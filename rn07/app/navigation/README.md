# Navigation

## index.tsx
- RootStack을 선언하는 공간입니다.

- Stack Navigation을 사용하기 위해서는 다음과같은 설치가 필요합니다.

```
npm install or yarn add @react-navigation/native @react-navigation/native-stack

```

- 라이브러리가 모두 설치가 되었다면, createNativeStackNavigator를 선언해주셔야합니다.


```
//타입을 사용가는경우 Navigation에 대한 Type을 선언을 해주셔야합니다. (타입은 navigationType.ts를 설명하면서 후술하겠습니다.)
const RootStack = createNativeStackNavigator();

```
- 만약 Router가 단하나인 앱을 개발한다면 후술할 Auth.tsx를 만들지 않으셔도 무방합니다.

- NavigationContainer : @react-navigation/native의 모듈입니다. 네비게이션의 계층 구조와 상태를 관리합니다. 네비게이션의 모든 구조를 감싸는 최상위 컴포넌트 입니다.


- RootStack.Navigator : 화면을 관리하는 중간 관리자 역할입니다. 부모컴포넌트로는 NavigationContainer를 가져야만 하고, 자식컴포넌트로 Screen컴포넌트를 가질 수 있습니다.
ㄴ initialRouteName : 화면이 켜졌을때 어떤 화면을 가장먼저 보여줄지 결정할수 있습니다. props data는 RootStack.Screen에서 지정한 name 데이터가 들어갑니다.

- RootStack.Screen : 화면으로 사용되는 컴포넌입입니다. 이름(name) 속성과 component 속성을 반드시 지정해주셔야합니다.
ㄴ option : Screen 컴포넌트의 screen option을 지정할수 있습니다. 대표적으로 사용하는 options는 headerShown이 있습니다.

## Auth.tsx
- 다중 router 구조일 경우 Stack Navigation을 선언하는 곳입니다. 트리형식으로 뻗어나가게 됩니다.

- ex) auth -> firstRouter -> page1 , auth -> secondRouter -> page2

- 본 템플릿은 다중 router를 고려하여 작성하였습니다.

- 사용법은 index.tsx와 동일합니다.


## navigationType.ts
- navigation을 사용할때 전달되는 params 혹은 페이지들의 타입들을 정리하는 곳입니다. 현재는 Auth.tsx에 사용되는 navigation type이 작성되어있습니다.


- Stack(Screen Component)의 props type은 NativeStackScreenProps라는 모듈타입을 지정해준뒤, navigationListType을 종속시킵니다.
```

//SomeComponent.tsx

export type  NavigationListType = {
    Login : undefined,
    Signup : undefined,
    SomeComponent : undefined,
}

export type StackPropsType = NativeStackScreenProps<
    NavigationListType
>

export const SomeComponent = (props : StackPropsType) => {
    ...somelogic...
}

//만약 navigation을 통해 params를 받아올경우는 다음과 같이 작성이 가능합니다.

export type  NavigationListType = {
    Login : undefined,
    Signup : undefined,
    SomeComponent : {
        mt_idx : string //navigate시 반드시 mt_idx는 선언이 되어야하며, 문자열로 받아옵니다.
        mt_phone : number //navigate시 반드시 mt_phone이 선언이 되어야하며, 숫자형으로 받아옵니다.
    },
}

export type StackPropsType = NativeStackScreenProps<
    NavigationListType
>

export const SomeComponent = (props : StackPropsType) => {
    ...somelogic...
}

```

## Router.tsx
- 로그인 페이지를 제외한 Screen Router를 관리하는 라우터 입니다.

## Main.tsx
- Bottom Navigation이 존재하는 Router상 ROOT page 입니다.


- Bottom Navigation을 사용하기 위해서는 @react-navigation/bottom-tabs 패키지 설치가 필요합니다.
```
npm install or yarn add @react-navigation/bottom-tabs
```

- Stack Navigation과 거의 비슷한 로직으로 작동합니다.

```

    <BottomTab.Navigator initialRouteName='Home'> //navigator를 생성합니다. Bottom Navigation의 최상위 루트라고 생각하시면 됩니다.
        <BottomTab.Screen
            name="Home"
            component={HomeIndex}
            options={{headerShown:false}}
        />
        <BottomTab.Screen
            name="Board"
            component={BoardIndex}
            options={{headerShown:false}}
        />
        <BottomTab.Screen
            name="Shop"
            component={ShopIndex}
            options={{headerShown:false}}
        />
        <BottomTab.Screen
            name="MyPage"
            component={MypageIndex}
            options={{headerShown:false}}
        />

    </BottomTab.Navigator>

```

- assets/image에 있는 b_menu1~4 이미지만 바꿔주시면 이미지가 그대로 적용되어 bottom tab이 생성됩니다.


- bottom tab을 추가하실경우 똑같이 Screen만 늘려주시면 됩니다.


