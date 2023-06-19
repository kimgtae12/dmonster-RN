import { NativeStackScreenProps } from "@react-navigation/native-stack"

//Screen페이지의 params 데이터 타입을 선언합니다.
/*
* 받아올 params가 없을경우 undefined로 선언합니다.
* 받아올 params가 있을경우 객체로 선언한뒤 type을 선언합니다.
* key뒤에 ?를 붙일경우 undefined가 허용됩니다. ex) mt_email? : string
*/

export type RootNavigationListType = {
    auth : undefined, //로그인전 Router 구성
    Router : undefined, //로인인 후 router 성성
}

export type  NavigationListType = { 
    Login : undefined,
    Signup : undefined, 
    TestPage : undefined,
    // TestPage : {
    //     mt_idx : string; mt_idx를 문자열로 받아옵니다. 필수값으로 선언합니다.
    //     mt_phone : number; mt_phone을 숫자형으로 받아옵니다. 필수값으로 선언되어있습니다.
    //     mt_email? : string; mt_email을 string으로 받아옵니다. 선택형으로 데이터를 전달받습니다.
    // },
}

export type RouterListType = {
    Main : undefined, //Router 최상위 페이지
    TestPage : undefined, //테스트 페이지
}


export type StackPropsType = NativeStackScreenProps< //NavigationListType을 NativeStackScreenProps type에 종속시킵니다.
    RootNavigationListType & NavigationListType & RouterListType
>