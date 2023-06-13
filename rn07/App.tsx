/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import AppNavigation from '@/navigation';

import libInit from '@/lib/init';
import {queryClient} from '@/lib/reactQueryClient';
import {QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message'; //toast
import {toastConfig} from '@/component/Toast/ToastConfig';
import SplashScreen from 'react-native-splash-screen';

libInit();

function App(): JSX.Element {
  useEffect(() => {
    try {
      setTimeout(() => {
        console.log('이미지');
        SplashScreen.hide(); /** 추가 **/
      }, 3000); /** 스플래시 시간 조절 (2초) **/
    } catch (e) {
      console.warn('에러발생');
      console.warn(e);
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
      <Toast config={toastConfig} />
    </QueryClientProvider>
  );
}

export default App;
