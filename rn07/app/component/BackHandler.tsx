
import React,{ useEffect } from "react";
import { BackHandler } from "react-native";
import cusToast from "./Toast/CustomToast";
import RNExitApp from "react-native-exit-app";

import { NavigationListType, RootNavigationListType, StackPropsType } from "@/navigation/navigationType";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

interface BackHandlerCom {
    isRoot? : boolean;
}

export function BackHandlerCom ({isRoot} : BackHandlerCom){

    const isFocused = useIsFocused();
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigationListType & NavigationListType>>();

	const [exitApp, setExitApp] = React.useState(false);

    function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }

    function handleRootBackClick() {
        var timeout;
        console.log(exitApp);
        if ((exitApp === false || !exitApp) && isFocused) {
            cusToast('한번 더 누르시면 종료됩니다');
            setExitApp(true);
            timeout = setTimeout(() => {
                setExitApp(false);
            }, 2000);
        } else {
            console.log('dddd');
            if (timeout) clearTimeout(timeout);
            RNExitApp.exitApp(); // 앱 종료
        }
        return true;
    }

    React.useEffect(() => {
        console.log(exitApp);
    }, [exitApp]);
      
    useEffect(() => {
        if(isFocused){
            console.log(isRoot);
            if(!isRoot){
                BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
                return () => {
                    BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
                };
            }
            else{
                BackHandler.addEventListener('hardwareBackPress', handleRootBackClick);
                return () => {
                    BackHandler.removeEventListener('hardwareBackPress', handleRootBackClick);
                };
            }
        }
    }, [isFocused]);

    return (
        <>
        </>
    )
}