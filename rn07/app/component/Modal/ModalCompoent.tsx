import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import ButtonComponent from '../Button/ButtonComponent';
import { CommonModalType } from '../ComponentCommonType';
import { CustomText } from '@/theme/styles';

type ModalComponentType = CommonModalType & {
  content? : string, //배경색을 지정해줍니다.
  type? : string, //modal action 타입을 지정해줍니다. 해당 컴포넌트에서는 type에 confirm 문자가 포함되었을경우 confirm창이 발생하도록 설계되었습니다.
  fontSize? : number, //Modal Button fontSize를 지정해줍니다.
  text? : string, //모달 내용에 들어가는 내용입니다.
  leftText? : string, //type에 confirm문자가 들어갈경우 왼쪽 버튼에 들어가는 이름입니다.
  rightText? : string, //type에 confirm문자가 들어갈경우 오른쪽 버튼에 들어가는 이름입니다.
  leftOnPreff? : () => void; //confirm 왼쪽 버튼을 눌렀을때 발생하는 action 입니다.
  rightOnPress? : () => void; //confrim 오른쪽 버튼을 눌렀을때 발생하는 action 입니다.
}

export default function ModalCompoent({
  content,
  visible = false,
  close = () => {},
  type = 'basic',
  fontSize = 16,
  text = '모달입니다.',
  leftText = '취소',
  rightText = '확인',
  rightOnPress = () => {},
} : ModalComponentType) {


  //State를 이용하여 Modal을 제어함
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  return (
    <Modal
      isVisible={isModalVisible} //모달 표시 여부
      style={styles.Container}
      //아이폰에서 모달창 동작시 깜박임이 있었는데, useNativeDriver Props를 True로 주니 해결되었다.
      useNativeDriver={true}
      onBackButtonPress={() => {
        //뒤로가기 버튼 클릭시 모달 꺼짐
        close();
      }}
      onBackdropPress={() => {
        //모달 배경 클릭시 모달 꺼짐
        close();
      }}>
      <View style={styles.WhiteBoxView}>
        {/* 모달에 버튼 1개 */}
        {type === 'custom' && content}
        {!type.includes('confirm')  && (
          <>
            <View style={styles.basicView}>
              <CustomText>
                {text}
              </CustomText>
            </View>
            <ButtonComponent
              value={rightText}
              borderColor={'black'}
              backgroundColor={'black'}
              color={'#fff'}
              btnPress={() => {
                close();
              }}
            />
          </>
        )}

        {/* 모달 버튼 2개 */}
        {type.includes('confirm') && (
          <>
            <View style={styles.basicView}>
              <CustomText>
                {text}
              </CustomText>
            </View>
            <View style={styles.BottomContainer}>
              <View style={styles.flexButton}>
                <ButtonComponent
                  value={leftText}
                  backgroundColor={'white'}
                  color={'black'}
                  fontSize={fontSize}
                  btnPress={() => {
                    setModalVisible(false);
                    close();
                  }}
                />
              </View>
              <View style={styles.flexButton}>
                <ButtonComponent
                  value={rightText}
                  backgroundColor={'black'}
                  color={'white'}
                  fontSize={fontSize}
                  btnPress={rightOnPress}
                />
              </View>
            </View>
          </>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  WhiteBoxView: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    borderRadius: 20,
  },
  basicView: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicText: {
    // fontFamily: _Font.PretendardSemiBold, //글자 폰트 설정
    fontWeight: '600',
    color: 'black',
  },
  flexButton: {
    width: '48%',
  },
  BottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
