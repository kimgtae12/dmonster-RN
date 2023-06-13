import {AuthStackProps} from '@/navigation/auth';
import {useBearStore, useCountPersistStore} from '@/store';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, TextInput, Button, Text, TouchableOpacity} from 'react-native';
import ModalCompoent from '@/component/Modal/ModalCompoent';
import cusToast from '@/component/Toast/CustomToast';

type LoginType = 'kakao' | 'naver' | 'google' | 'apple';

interface LoginForm {
  id: string;
  password: string;
}

const LoginScreen = ({navigation}: AuthStackProps) => {
  const {increasePopulation, bears} = useBearStore(state => state); //bearStore에서 생성한 store 정보를 가져옵니다.
  const {count, increase} = useCountPersistStore(state => state); //zustand persist에서 생성한 state및 생신 메서드를 가져옵니다.

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

  return (
    <View>
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

      <View style={{marginTop: 20}}>
        <Button title="Increase Persist Count" onPress={increase} />
        {/** zustand persist 내부에서 선언한 state 갱신 메서드를 가져와서 실행합니다. */}
        <Text>{count}</Text>
      </View>
      <Button title="모달 open" onPress={() => setModal(true)} />
      <ModalCompoent
        visible={modal}
        close={() => setModal(false)}
        type={'confirm'}
        rightOnPress={() => console.log('오른쪽 버튼 클릭')}
      />
      <Button
        title="토스트 open"
        onPress={() => cusToast('커스텀 토스트', 4000, 'bottom', 50)}
      />
      <Button
        title="테스트 페이지"
        onPress={() => navigation.navigate('TestPage')}
      />
    </View>
  );
};

export default LoginScreen;
