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
import { Text, TextInput } from 'react-native';

libInit();

// Text & TextInput 컴포넌트에 대한 defaultProps 선언
interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}
interface TextInputWithDefaultProps extends TextInput {
  defaultProps?: { allowFontScaling?: boolean , autoCorrect? : boolean };
}

  // Text & TextInput 크기를 시스템 사이즈에 종속되지 않습니다.
((Text as unknown) as TextWithDefaultProps).defaultProps = ((Text as unknown) as TextWithDefaultProps).defaultProps || {};
((Text as unknown) as TextWithDefaultProps).defaultProps!.allowFontScaling = false;
((TextInput as unknown) as TextInputWithDefaultProps).defaultProps = ((TextInput as unknown) as TextInputWithDefaultProps).defaultProps || {};
((TextInput as unknown) as TextInputWithDefaultProps).defaultProps!.allowFontScaling = false;
((TextInput as unknown) as TextInputWithDefaultProps).defaultProps!.autoCorrect = false;

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
