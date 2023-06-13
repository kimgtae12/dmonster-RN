import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import { NavigationListType, StackPropsType } from '@/navigation/navigationType';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function HeaderComponents({
  backgroundColor = '#FFF',
  backButton = false,
  closeButton = false,
  alramButton = false,
  title = '',
  // right = null,
  close = () => {},
  Fontcolor = '#212121',
  RightOnPress = () => {},
}) {
  //backgroundColor   : 배경색 null:white
  //backButton        : 뒤로가기 null: false
  //closeButton       : 닫기 null: false
  //alramButton       : 알림 null: false
  //title             : title
  //close             : 닫기 event
  //Fontcolor         : 폰트 컬러
  //RightOnPress      : 오른쪽 버튼 event

  const navigation = useNavigation();

  const HandleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{...styles.Container, backgroundColor: backgroundColor}}>
      {/** 왼쪽 */}
      <View style={styles.leftContainer}>
        {backButton && (
          <TouchableOpacity onPress={() => HandleGoBack()} hitSlop={15}>
            <Text>뒤로가기 {/** 사용하실때 제거해주세요. */} </Text>
            {/* 이미지를 넣어주세요. */}
            {/* <Image source={require('../Assets/Images/ico_back.png')} style={styles.leftIcon} /> */}
          </TouchableOpacity>
        )}
        {closeButton && (
          <TouchableOpacity onPress={close} hitSlop={15}>
            <Text>닫기</Text> 
          </TouchableOpacity>
        )}
      </View>
      {/** 중간 text */}
      <View style={styles.centerContainer}>
        <Text style={{...styles.Title, color: Fontcolor}}>{title}</Text>
      </View>
      {/** 오른쪽 */}
      <View style={styles.RightContainer}>
        {/** {right && right} */}
        {alramButton && (
          <TouchableOpacity hitSlop={15} onPress={RightOnPress}>
            <Text>알림</Text>
            {/* 이미지를 넣어주세요 */}
            {/* <AutoHeightImage source={require('~/Assets/Images/ico_bell_on.png')} width={getWidth(24)} /> */}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  leftContainer: {
    height: 50,
    position: 'absolute',
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 26,
  },
  leftIcon: {
    width: 24,
    height: 24,
  },
  RightContainer: {
    height: 50,
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 26,
  },
  Title: {
    // fontFamily: _Font.PretendardSemiBold,
    // color: ColorTextBlack,
    fontSize: 20,
    fontWeight: '600',
  },
  centerContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
  },
});
