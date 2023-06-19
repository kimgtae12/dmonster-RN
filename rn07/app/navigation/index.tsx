import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './auth';
import {NavigationContainer} from '@react-navigation/native';
import { Main } from './Main';
import Router from './Router';

const RootStack = createNativeStackNavigator();

export default () => ( //Router 역활을 합니다.
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="auth">
      <RootStack.Screen 
        name="auth" 
        component={AuthNavigator} 
        options={{
          headerShown:false,
        }} 
      />
      <RootStack.Screen 
        name="Router"
        component={Router}
        options={{
          headerShown:false,
        }}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);
