/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigation from '@/navigation';

import libInit from '@/lib/init';
import {queryClient} from '@/lib/reactQueryClient';
import {QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message'; //toast
import {toastConfig} from '@/component/Toast/ToastConfig';

libInit();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
      <Toast config={toastConfig} />
    </QueryClientProvider>
  );
}

export default App;
