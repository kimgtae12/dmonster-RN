import { StackPropsType } from '@/navigation/navigationType';
import { BaseViewItem } from '@/theme/styles';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const HomeIndex = ({navigation}:StackPropsType) => {

    const goTestPage = () =>{
        navigation.navigate('TestPage');
    }

    return(
        <BaseViewItem alignItems='center' justifyContent='center' >
            <TouchableOpacity onPress={goTestPage}>
                <Text>테스트 페이지로</Text>
            </TouchableOpacity>
            
        </BaseViewItem>
    )
}