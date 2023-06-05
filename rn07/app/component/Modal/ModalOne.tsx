import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import ButtonComponents from '../Button/ButtonComponent';

export default function Modal1({
  content = null,
  visible = false,
  close = () => {},
  type = 'basic',
  fontSize = 16,
  text = '모달입니다.',
}) {
  //* 버튼 하나인 기본형 모달
  //content           : 배경색
  //visible           : 모달 visible
  //close             : 닫힘 event
  //type              : 기본 or 커스텀 (basic | custom)
  //fontSize          : basic type fontsize
  //text              : basic type text

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
        {type === 'custom' && content}
        {type === 'basic' && (
          <View style={styles.basicView}>
            <Text
              style={{
                ...styles.basicText,
                fontSize: fontSize,
                textAlign: 'center',
              }}>
              {text}
            </Text>
          </View>
        )}
        <ButtonComponents
          value={'확인'}
          borderColor={'black'}
          backgroundColor={'black'}
          color={'#fff'}
          btnPress={() => {
            close();
          }}
        />
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
  },
});
