import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type  NavigationListType = {
    Login : undefined,
    Signup : undefined,
}

export type StackPropsType = NativeStackScreenProps<
    NavigationListType,
    'Login',
    'Signup'
>