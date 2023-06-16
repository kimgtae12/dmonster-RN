import React from 'react';
import {ActivityIndicator, View} from 'react-native'
import Modal from 'react-native-modal'

interface LoadingModalType {
    isLoading : boolean; //로딩 유무 true일경우 loading 출력
}

/**
 * Loading Modal 입니다.
 * isLoading이 true일경우 LoadingModal이 활성화되며, isLoading이 false일경우 모달이 닫힙니다.
 * Loading Modal을 관리하는 방법은 다양합니다.
 * 1.App.tsx 최하단에 Loading Modal 컴포넌트를 선언 한뒤, isLoading을 전역 state (redux , zustand)로 관리합니다.
 * 2.Loading이 필요한 컴포넌트에만 넣은뒤, isLoading을 내부 state(useState)로 관리합니다.
 * 
 * indicator는 react-native 내부 모듈을 사용하고 있으며, 색상은 color에 16진수를 넣어주시면 됩니다.
 * */

export const LoadingModal = ({
    isLoading
}:LoadingModalType) => {
    
    return(
        <Modal 
            isVisible={isLoading}
            useNativeDriver={true}
            style={[{justifyContent:'center',alignItems:'center',flex:1,flexDirection : 'column',zIndex:99999}]}
        >
            <View>
                <ActivityIndicator color="#0085CA" size={'large'} />
            </View>
        </Modal>
    )
}