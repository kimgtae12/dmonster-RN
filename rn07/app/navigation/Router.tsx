import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {LoginScreen, SignupScreen} from '@/screen/auth';
import React from 'react';
import {NavigationListType, RouterListType} from './navigationType';
import TestPage from '../screen/testpage/TestPage';
import {Main} from './Main';
import GoogleMap from '@/screen/Map/GoogleMap';
import Camera from '@/component/Camara/Camera';
import ImagePick from '@/component/ImagePick/ImagePick';

/**
 * 로그인 및 인증, 회원가입등을 제외한 Screen이 모여있는 Router입니다.
 */

const Stack = createNativeStackNavigator<RouterListType>();

export default () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
    <Stack.Screen
      name="TestPage"
      component={TestPage}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="GoogleMap"
      component={GoogleMap}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Camera"
      component={Camera}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
