import React, {useEffect} from 'react';
import {BackHandler, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

export const Image = () => {
  return (
    <View>
      {/* <AutoHeightImage width={100} source={image} /> */}
      <AutoHeightImage
        width={100}
        source={{uri: 'http://placehold.it/350x150'}}
      />
    </View>
  );
};
