import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {LoginScreen, SignupScreen} from '@/screen/auth';
import React from 'react';
import { NavigationListType } from './navigationType';
import TestPage from '../screen/testpage/TestPage';



const Stack = createNativeStackNavigator<NavigationListType>();

export default () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="TestPage" component={TestPage} /> 
  </Stack.Navigator>
);
