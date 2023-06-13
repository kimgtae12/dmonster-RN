import HeaderComponents from '@/component/Header/HeaderComponent';
import React from 'react';
import {View, Text} from 'react-native';

const TestPage = ({navigation}) => {
  return (
    <View>
      <HeaderComponents
        backButton={true}
        // closeButton={true}
        // close={() => navigation.goBack()}
        title={'TestPage'}
        alramButton={true}
        navigation={navigation}
      />
      <Text>TestPage</Text>
    </View>
  );
};

export default TestPage;
