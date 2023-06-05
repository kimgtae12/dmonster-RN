import {AuthStackProps} from '@/navigation/auth';
import {useBearStore, useCountPersistStore} from '@/store';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, TextInput, Button, Text, TouchableOpacity} from 'react-native';
import ModalCompoent from '../../component/Modal/ModalCompoent';

type LoginType = 'kakao' | 'naver' | 'google' | 'apple';

interface LoginForm {
  id: string;
  password: string;
}

const LoginScreen = ({navigation}: AuthStackProps) => {
  const {increasePopulation, bears} = useBearStore(state => state);
  const {count, increase} = useCountPersistStore(state => state);

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
          onPress={() => increasePopulation(3)}
        />
        <Text>{bears}</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Button title="Increase Persist Count" onPress={increase} />
        <Text>{count}</Text>
      </View>
      <Button title="모달 open" onPress={() => setModal(true)} />
      <ModalCompoent
        visible={modal}
        close={() => setModal(false)}
        type={'confirm'}
        rightOnPress={() => console.log('오른쪽 버튼 클릭')}
      />
    </View>
  );
};

export default LoginScreen;
