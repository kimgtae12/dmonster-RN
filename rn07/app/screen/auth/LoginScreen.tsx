
import {useBearStore, useCountPersistStore} from '@/store';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';

import {View, TextInput, Button, Text, TouchableOpacity,ScrollView} from 'react-native';
import ModalCompoent from '../../component/Modal/ModalCompoent';
import { useLoadingStore } from '@/store/BearStore';
import { LoadingModal } from '@/component/Modal/LoadingModal';
import { StackPropsType } from '@/navigation/navigationType';
import cusToast from '@/component/Toast/CustomToast';
import { MarginCom } from '@/theme/styles';
import { useUserInfoPersistStore } from '@/store/CountPersistStore';

type LoginType = 'kakao' | 'naver' | 'google' | 'apple';

interface LoginForm {
  id: string;
  password: string;
}

const LoginScreen = ({navigation}: StackPropsType) => {

  //user 로그인 정보를 담아둔 Zustand Persist에서 데이터를 가져옵니다.
  const {mt_id,mt_pw,updateUserInfo} = useUserInfoPersistStore(state => state);

  const {control, handleSubmit} = useForm<LoginForm>({
    defaultValues: {
      id: '',
      password: '',
    },
  });
  const idpwLogin = ({id, password}: LoginForm) => {
    // console.log(id, password);
    updateUserInfo({mt_id : id, mt_pw : password}); //Zustand Persist에 선언되어있는 updateUserInfo 메서드를 실행하여, asyncStorage에 저장합니다.
    navigation.navigate('TestPage');
  };

  const snsLogin = (loginType: LoginType) => {
    switch (loginType) {
      case 'kakao':
        break;
      case 'naver':
        break;
      case 'google':
        break;
      case 'apple':
        break;
      default:
        break;
    }
  };

  React.useEffect(()=>{
    if(mt_id !== '' && mt_pw !== ''){ //로그인정보가 있다면 바로 테스트페이지로 동동합니다.
      navigation.navigate('TestPage');
    }
  },[])

  return (
    <ScrollView style={{flex:1}}>
      <Controller
        control={control}
        name="id"
        render={({field: {onChange, value}}) => (
          <TextInput
            placeholder="id"
            value={value}
            onChange={e => onChange(e.nativeEvent.text)}
          />
        )}
        rules={{required:true}}
      />

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, value}}) => (
          <TextInput
            placeholder="password"
            value={value}
            onChange={e => onChange(e.nativeEvent.text)}
          />
        )}
        rules={{required:true}}
      />
      <Button title="로그인" onPress={handleSubmit(idpwLogin)} />
      <MarginCom mt={20} />
      <Button title="카카오" onPress={() => snsLogin('kakao')} />
      <MarginCom mt={10} />

      <Button title="구글" onPress={() => snsLogin('google')} />
      <MarginCom mt={10} />

      <Button title="애플" onPress={() => snsLogin('apple')} />
      <MarginCom mt={10} />

    </ScrollView>
  );
};

export default LoginScreen;
