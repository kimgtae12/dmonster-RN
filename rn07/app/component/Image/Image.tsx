import React, {useEffect} from 'react';
import {BackHandler, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import FastImage from 'react-native-fast-image';

export const Image = () => {
  return (
    <View>
      {/* <AutoHeightImage width={100} source={image} /> */}
      {/* 단순 이미지 일 경우 사용 */}
      {/* <AutoHeightImage
        width={100}
        source={{uri: 'http://placehold.it/350x150'}}
      /> */}
      {/* api에서 리스트로 불러올때 사용 */}
      <FastImage
        style={{width: 200, height: 200}}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};
