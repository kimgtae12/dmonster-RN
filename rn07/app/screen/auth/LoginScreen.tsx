import {AuthStackProps} from '@/navigation/auth';
import {useBearStore, useCountPersistStore} from '@/store';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, TextInput, Button, Text, TouchableOpacity,ScrollView} from 'react-native';
import ModalCompoent from '../../component/Modal/ModalCompoent';
import { useLoadingStore } from '@/store/BearStore';
import { LoadingModal } from '@/component/Modal/LoadingModal';

type LoginType = 'kakao' | 'naver' | 'google' | 'apple';

interface LoginForm {
  id: string;
  password: string;
}

const LoginScreen = ({navigation}: AuthStackProps) => {

  const {increasePopulation, bears} = useBearStore(state => state); //bearStore에서 생성한 store 정보를 가져옵니다.
  const {count, increase} = useCountPersistStore(state => state); //zustand persist에서 생성한 state및 생신 메서드를 가져옵니다.

  const {isLoading, toggleLoading} = useLoadingStore(state => state);


  const [modal, setModal] = useState(false);

  const {control, handleSubmit} = useForm<LoginForm>({
    defaultValues: {
      id: '',
      password: '',
    },
  });
  const idpwLogin = ({id, password}: LoginForm) => {
    console.log(id, password);
    navigation.navigate('Signup');
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

  const loadingControllHandler = () => { //zustand state 관리 예시1)
    toggleLoading(true); //zustand loading store의 toggleLoading 메서드를 실행시킵니다.

    setTimeout(()=>{ //1초뒤 zustand loading store의 loading state를 false로 처리합니다.
      toggleLoading(false);
    },1000)
  }


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
      />
      <Button title="로그인" onPress={handleSubmit(idpwLogin)} />
      <Button title="카카오" onPress={() => snsLogin('kakao')} />
      <Button title="구글" onPress={() => snsLogin('google')} />
      <Button title="애플" onPress={() => snsLogin('apple')} />

      <View style={{marginTop: 20}}>
        <Button
          title="Increase Bears"
          onPress={() => increasePopulation(3)} //bearStore 내부에서 선언한 state 갱신 메서드를 가져와서 실행합니다.
        />
        <Text>{bears}</Text>
      </View>
      {/**zustand persist 내부에서 선언한 state 갱신 메서드를 가져와서 실행합니다 */}
      <View style={{marginTop: 20}}>
        <Button title="Increase Persist Count" onPress={increase} /> 
        <Text>{count}</Text>
      </View>
      <Button title="모달 open" onPress={() => setModal(true)} />
      <Button title="로딩 ModalOpen" onPress={()=>{loadingControllHandler}} />




      {/* Modal component */}
      <ModalCompoent 
        visible={modal}
        close={() => setModal(false)}
        type={'confirm'}
        rightOnPress={() => console.log('오른쪽 버튼 클릭')}
      />

      {/* Loading Modal Component */}
      <LoadingModal 
        isLoading={isLoading}
      />
    </ScrollView>
  );
};

export default LoginScreen;
