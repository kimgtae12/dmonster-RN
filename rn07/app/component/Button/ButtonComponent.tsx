import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default function ButtonComponents({
  backgroundColor = 'black',
  borderRadius = 8,
  borderColor = '#A0ACC9',
  value = '',
  marginBottom = 0,
  color = 'black',
  btnPress = () => {},
  style = null,
  fontSize = 16,
  width = '100%',
}) {
  //backgroundColor   : 배경색
  //borderRadius      : 테두리
  //borderColor       : 테두리 색상
  //value             : value
  //marginBottom      : components marginBottom
  //color             : 글자 색
  //btnPress          : onPress Event
  //style             : 기타 추가 style 사용자 지정'
  //fontSize          : 폰트 크기
  //width             : 버튼 넓이
  return (
    <TouchableOpacity
      style={[
        styles.Container,
        {
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          marginBottom: marginBottom,
          width: width,
          borderRadius: borderRadius,
        },
        style,
      ]}
      onPress={() => btnPress()}>
      <Text style={{...styles.titleText, color: color, fontSize: fontSize}}>
        {value}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  titleText: {
    // fontFamily: _Font.PretendardSemiBold, //폰트 설정
    fontWeight: '600',
  },
});
