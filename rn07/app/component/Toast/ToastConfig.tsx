import React from 'react';
import {Text, View} from 'react-native';
import Toast from 'react-native-toast-message';

export const toastConfig = {
  custom_type: (internalState: any) => (
    <View
      style={{
        width: '93%',
        bottom: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 17,
        // opacity: 0.9,
        zIndex: 999,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: 13.5,
          opacity: 1,
        }}>
        {internalState.text1.message}
      </Text>
    </View>
  ),
};
