## GoogleMap

GoogleMap.tsx

`npm i react-native-maps` 또는 `yarn add react-native-maps`가 필요합니다.

- react-native-maps을 import 해야 사용이 가능합니다.

  `import MapView from "react-native-maps";`

- AndroidManifest.xml에 API_KEY 추가 해야합니다.

  [Google Maps Platform](https://developers.google.com/maps/documentation/android-sdk/get-api-key?hl=ko)를 참조하여 발급 받아주세요.

```xml
<meta-data
android:name="com.google.android.geo.API_KEY"
android:value="해당 구글 api_key 추가"/>
```

- 지도가 필요한 페이지에 mapView를 추가해줍니다.

```html
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

```

### MapView props 설명

- provider : 사용할 지도 프레임워크입니다. 구글 지도를 사용하기 위해 `PROVIDER_GOOGLE`를 import 한 후 사용됩니다. 설정하지 않을 경우 IOS는 애플 지도, Android는 구글 지도를 나타내게 됩니다.

- region : 지도에 표시할 지역입니다. 영역은 중심 좌표와 표시할 좌표 범위로 정의됩니다.

- onRegionChange : 사용자가 지도를 드래그하는 경우와 같이 지역이 변경될 때 지속적으로 호출되는 콜백입니다.

### Marker props 설명

- coordinate : 마커의 좌표입니다.

- 더 많은 기능은 <https://github.com/react-native-maps/react-native-maps>를 참조해주세요.
