import HeaderComponents from '@/component/Header/HeaderComponent';
import { useUserInfoPersistStore } from '@/store/CountPersistStore';
import { BaseViewItem, CustomText } from '@/theme/styles';
import { socket } from '@/utils/socket';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, BackHandler } from 'react-native';
import { StackPropsType } from '../../navigation/navigationType';

const Chatting = ({ navigation }: StackPropsType) => {
    const isFocused = useIsFocused();
    const {mt_id, mt_pw, deleteUserInfo} = useUserInfoPersistStore(
        state => state,
      ); //useUserInfoPersistStore에서 긍그인정보 삭제 및 저장되어있는 데이터를 가져옵니다.

    const data = [
        { idx: 1, room: '1번방' },
        { idx: 2, room: '2번방' },
        { idx: 3, room: '3번방' },
    ];

    
    //소켓 설정
    //utils/socket.js -- 전역 설정으로 소켓 초기화 세팅.js
    useEffect(() => {
        // console.log(socket);
        socket.connect(); // 소켓에 입장합니다.

        //*---react는 페이지를 이동해도 연결이 자동 종료되지 않습니다.
        //*---종료 필요시 socket.disconnect(); 함수를 실행해야 합니다.

        //소켓 연결 여부 함수 
        function onConnect() {
            console.log('connect');
        }

        //소켓 종료 여부 함수
        function onDisconnect() {
            console.log('disconnect');
        }

        //소켓 핸들러 이벤트를 받아 함수를 호출합니다.
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        //남아있는 socket 핸들러가 없도록 제거합니다. 
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        }
    }, []);

    //backHandler 
    function handleBackButtonClick() {
        //뒤로가기시 채팅을 종료합니다.
        socket.disconnect();
    }

    useEffect(() => {
        if(isFocused){
            BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
                return () => {
                    BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
                };
        }
    }, [isFocused]);

    const joinRoom = (room) => {
        navigation.navigate('ChattingDetail', {
            room: room.room,
            idx: room.idx,
        });
    }
    return (
        <>
            <Text>채팅</Text>
            <FlashList
                contentContainerStyle={{ paddingVertical: 20 }} //container 스타일을 지정해줍니다. flashlist는 자체 style props는 지원하지 않습니다.
                data={data} //flasList에 들어가는 배열 data입니다.
                renderItem={(item) => {
                    // console.log(item);
                    return (
                        <BaseViewItem
                            key={item.item.idx}
                            pt={20} pb={20}
                            mb={20}
                            bgColor='#e3e3e3'
                        >
                            <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => joinRoom(item.item)}>
                                <CustomText pl={20}>{item.item.room}</CustomText>
                            </TouchableOpacity>
                        </BaseViewItem>
                    );
                }} //랜더링될 컴포넌트를 가르킵니다. 반환되는 item은 배열원소와 index로 이루어져 있습니다. flashRenderItem 참고
                estimatedItemSize={200} //가변항목 사이즈를 입력해줍니다.
                onEndReached={() => { //스크롤이 끝까지 되었을때 발생하는 이벤트입니다. infinity scroll이용시 사용됩니다.
                    // console.log('onEndReached 이벤트 발생!');
                }}
                onEndReachedThreshold={0.5} //onEndReached이벤트를 스크롤 어느시점에 감지할지 정할 수 있습니다. 0.1~1까지 지정하며 default는 0.5입니다.
            />
        </>
    );
};

export default Chatting;