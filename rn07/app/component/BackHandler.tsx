
import React,{ useEffect } from "react";
import { BackHandler, View } from "react-native";
import cusToast from "./Toast/CustomToast";
import RNExitApp from "react-native-exit-app";

import { NavigationListType, RootNavigationListType, StackPropsType } from "@/navigation/navigationType";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

interface BackHandlerCom {
    isRoot? : boolean; //isRoot 최상위루트일때 두번뒤로가기시 앱종료, 그외엔 뒤로가기
}

export const BackHandlerCom = ({isRoot} : BackHandlerCom) => {

    const isFocused : boolean = useIsFocused();
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigationListType & NavigationListType>>();


    function handleBackButtonClick() { //backbutton 뒤로가기
        navigation.goBack();
        return true;
    }

    let lastBackPressed:null | number = null; //마지막으로 backbutton을 누른시간

    function handleRootBackClick() { //최상위 루트에서 뒤로가기 두번 누를시 종료

        if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
            // 마지막으로 누른 뒤로가기 버튼으로부터 2초 이내에 다시 누른 경우
            RNExitApp.exitApp(); //앱종료
            return true;
        }
        lastBackPressed = Date.now();
        cusToast('한번더 누르면 앱이 종료됩니다.') // 사용자에게 종료 안내 메시지 표시
    
        return true;
    
    }
      
    useEffect(() => {
        if(isFocused){
            if(!isRoot){
                BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
                return () => {
                    BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
                };
            }
            else{
                BackHandler.addEventListener('hardwareBackPress', handleRootBackClick);
                return () => {
                    lastBackPressed= null;
                    BackHandler.removeEventListener('hardwareBackPress', handleRootBackClick);
                };
            }
        }
    }, [isFocused]);

    return (
        <View>
        </View>
    )
}