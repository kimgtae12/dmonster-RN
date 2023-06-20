import HeaderComponents from '@/component/Header/HeaderComponent';
import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Circle,
  Callout,
} from 'react-native-maps';
const GoogleMap = ({navigation}) => {
  const [coordinate, setCoordinate] = useState({
    latitude: 35.2439,
    longitude: 129.0906,
  });
  const width = Dimensions.get('screen').width;
  return (
    <View style={{flex: 1}}>
      <HeaderComponents
        backButton={true}
        title={'GoogleMap'}
        alramButton={false}
        navigation={navigation}
      />
      <View style={{width: width, height: '100%'}}>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}>
          <Marker
            coordinate={{
              latitude: coordinate.latitude,
              longitude: coordinate.longitude,
            }}></Marker>
        </MapView>
      </View>
    </View>
  );
};

export default GoogleMap;
