import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {LoginScreen, SignupScreen} from '@/screen/auth';
import React from 'react';
import { NavigationListType } from './navigationType';
import TestPage from '../screen/testpage/TestPage';

/**
 * 인증, 회원가입, 로그인 등의 screen이 담겨있는 router입니다.
 */

const Stack = createNativeStackNavigator<NavigationListType>();

export default () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
    <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
    <Stack.Screen name="TestPage" component={TestPage} options={{headerShown:false}} />
  </Stack.Navigator>
);
