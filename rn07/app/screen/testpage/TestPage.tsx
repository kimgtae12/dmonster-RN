import HeaderComponents from '@/component/Header/HeaderComponent';
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {StackPropsType} from '../../navigation/navigationType';
import ModalCompoent from '@/component/Modal/ModalCompoent';
import {LoadingModal} from '@/component/Modal/LoadingModal';
import {useBearStore, useCountPersistStore} from '@/store';
import {useLoadingStore} from '@/store/BearStore';
import cusToast from '@/component/Toast/CustomToast';
import {MarginCom, CustomText} from '@/theme/styles';
import {useUserInfoPersistStore} from '@/store/CountPersistStore';
import {BackHandlerCom} from '@/component/BackHandler';
import {colors} from '@/theme/color';

//Navigation Component이므로 NativeStackScreenProps을 type으로 사용합니다.
//props는 route 및 navigation을 가져올수있으며, params는 route의 하위객체에 존재합니다. route.params

const TestPage = ({navigation}: StackPropsType) => {
  const {mt_id, mt_pw, deleteUserInfo} = useUserInfoPersistStore(
    state => state,
  ); //useUserInfoPersistStore에서 긍그인정보 삭제 및 저장되어있는 데이터를 가져옵니다.
  const {increasePopulation, bears} = useBearStore(state => state); //bearStore에서 생성한 store 정보를 가져옵니다.
  const {count, increase} = useCountPersistStore(state => state); //zustand persist에서 생성한 state및 생신 메서드를 가져옵니다.
  const {isLoading, toggleLoading} = useLoadingStore(state => state);

  const [modal, setModal] = useState(false);

  const loadingControllHandler = () => {
    //zustand state 관리 예시1)
    toggleLoading(true); //zustand loading store의 toggleLoading 메서드를 실행시킵니다.

    setTimeout(() => {
      //1초뒤 zustand loading store의 loading state를 false로 처리합니다.
      toggleLoading(false);
    }, 1000);
  };

  const userLogout = () => {
    deleteUserInfo();
    navigation.replace('Login'); //replace는 다음스택을 쌓는것이아닌 현재스택을 선언한페이지로 덮어버립니다.
  };

  return (
    <View>
      <BackHandlerCom isRoot={false} />
      <HeaderComponents
        backButton={true}
        // closeButton={true}
        // close={() => navigation.goBack()}
        title={'TestPage'}
        alramButton={true}
      />
      <View style={{marginTop: 20}}>
        <CustomText fw="Light" fc={colors.BLACK}>
          Zustand persist에 저장되어있는 로그인정보
        </CustomText>
        <MarginCom mt={5} />
        <Text>mt_id : {mt_id}</Text>
        <Text>mt_pw : {mt_pw}</Text>

        <Button
          title="로그아웃"
          onPress={() => userLogout()} //userInfoPersistStore에 선언되어있는 deleteUserInfo 메서드를 실행합니다.
        />
      </View>
      <View style={{marginTop: 20}}>
        <Text>Zustand 상태 업데이트</Text>
        <MarginCom mt={5} />
        <Button
          title="Increase Bears"
          onPress={() => increasePopulation(3)} //bearStore 내부에서 선언한 state 갱신 메서드를 가져와서 실행합니다.
        />
        <Text>{bears}</Text>
      </View>
      {/**zustand persist 내부에서 선언한 state 갱신 메서드를 가져와서 실행합니다 */}
      <View style={{marginTop: 20}}>
        <Text>Zustand Persist 상태 업데이트</Text>
        <Button title="Increase Persist Count" onPress={increase} />
        <Text>{count}</Text>
      </View>
      <MarginCom mt={20} />
      <Button title="모달 open" onPress={() => setModal(true)} />
      <MarginCom mt={20} />
      <Button
        title="로딩 ModalOpen"
        onPress={() => {
          loadingControllHandler();
        }}
      />
      {/* Modal component */}
      <ModalCompoent
        visible={modal}
        close={() => setModal(false)}
        type={'confirm'}
        rightOnPress={() => console.log('오른쪽 버튼 클릭')}
      />
      <MarginCom mt={20} />
      <Button
        title="토스트 open"
        onPress={() => cusToast('커스텀 토스트', 4000, 'bottom', 50)}
      />
      <MarginCom mt={20} />
      <Button
        title="구글 맵"
        onPress={() => navigation.navigate('GoogleMap')}
      />
      <MarginCom mt={20} />
      <Button title="카메라" onPress={() => navigation.navigate('Camera')} />
      <MarginCom mt={20} />
      <Button title="메인으로" onPress={() => navigation.navigate('Main')} />
      {/* </View> */}
      {/* Loading Modal Component */}
      <LoadingModal isLoading={isLoading} />
    </View>
  );
};

export default TestPage;
