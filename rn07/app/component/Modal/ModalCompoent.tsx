import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import ButtonComponent from '../Button/ButtonComponent';

export default function ModalCompoent({
  content = null,
  visible = false,
  close = () => {},
  type = 'basic',
  fontSize = 16,
  text = '모달입니다.',
  leftText = '취소',
  rightText = '확인',
  rightOnPress = () => {},
}) {
  //content           : 배경색
  //visible           : 모달 visible
  //close             : 닫힘 event
  //type              : 기본 or 커스텀 (basic | custom | confirm)
  //fontSize          : 폰트 크기
  //text              : 모달 내용
  //leftText          : type 'confirm'일때 왼쪽 버튼 text
  //rightText         : type 'basic'일땐 버튼 text, 'confirm'일땐 오른쪽 버튼
  //rightOnPress      : type 'confirm'일때 오른쪽 버튼 이벤트

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
        {type === 'basic' && (
          <>
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
        {type === 'confirm' && (
          <>
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
