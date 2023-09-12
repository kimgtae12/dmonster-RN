import HeaderComponents from '@/component/Header/HeaderComponent';
import { useUserInfoPersistStore } from '@/store/CountPersistStore';
import { BaseViewItem, CustomText } from '@/theme/styles';
import { socket } from '@/utils/socket';
import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { StackPropsType } from '../../navigation/navigationType';

const ChattingDetail = ({ navigation, route: { params } }: StackPropsType) => {
    console.log(params);
    const ref = useRef(); // flashlist Ref
    const [text, setText] = useState(''); // textInput text
    const [chat, setChat] = useState([]); // 기존 채팅 내역 및 소켓 호출 데이터 추가 리스트

    const { mt_id, mt_pw, deleteUserInfo } = useUserInfoPersistStore(
        state => state,
    ); //useUserInfoPersistStore에서 긍그인정보 삭제 및 저장되어있는 데이터를 가져옵니다.

    useEffect(() => {
        //클라이언트 -> 서버 전달
        //socket.emit() 함수로 서버에 데이터를 전송합니다.
        socket.emit('join_room', {
            type: 0,                    // type:0(신규입장) | 1(기본입장)
            name: mt_id,                // 작성자 닉네임
            room: params?.room,         // 채팅방 방제목
            msg: '클라이언트 입장',         // 입력 내용
            idx: params?.idx,           // 채팅방 고유번호
        });

        //받은 채팅 데이터 처리 함수
        const onChatting = (msg) => {
            //가져온 데이터를 list에 추가합니다.
            setChat(prev => [...prev, msg]);

            //데이터 추가로 flatlist를 하단으로 이동시킵니다.
            if (ref.current) {
                setTimeout(() => {
                    ref.current.scrollToEnd({ animated: false });
                }, 100);
            }
        }

        //서버 -> 클라이언트
        //<chatting> 소켓 커스텀 핸들러를 통해 서버에서 데이터를 받아와 함수를 호출합니다. 
        socket.on('chatting', onChatting);

        // socket 찌꺼기 delete
        return () => {
            socket.off('chatting', onChatting);
        };
    }, []);

    //채팅을 전송합니다.
    const SubmitChatting = () => {
        console.log(text);
        //클라이언트 -> 서버 전송
        socket.emit('chatting', {
            name: mt_id,            // 작성자 이름
            room: params?.room,     // 채팅방 방제목
            idx: params?.idx,       // 채팅방 고유번호
            msg: text,              // 입력내용
        });
        setText('');                // 전달 후 입력 내용 초기화
    };

    //방 신규입장, 퇴장 메세지를 출력합니다.
    const Notice_chat = (data) => {
        return (
            <>
                <View style={styles.NoticeBox}>
                    <Text style={{ color: 'white' }}>{`${data.item.msg}`}</Text>
                </View>
            </>
        );
    };

    //본인이 작성한 메세지를 출력합니다.
    const Me_chat = (data) => {
        return (
            <>
                <View style={[styles.ChatContainer, { justifyContent: 'flex-end' }]}>
                    <Text style={styles.Time}>{data.item.time}</Text>
                    <View style={styles.MeBox}>
                        <Text>{data.item.msg}</Text>
                    </View>
                    {/* <View style={styles.Profile}>
                        <Image style={styles.ProfileImage} source={require('../../assets/images/me.png')} />
                    </View> */}
                </View>
            </>
        );
    };

    //상대방이 작성한 메세지를 출력합니다.
    const Other_chat = (data) => {
        return (
            <>
                <View style={[styles.ChatContainer, { justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
                    <View style={styles.Profile}>
                        <Image style={styles.ProfileImage} source={require('../../assets/images/me.png')} />
                    </View>
                    <View style={{ alignItems: 'flex-end', flexDirection: 'row', transform: [{ translateY: 10 }] }}>
                        <View>
                            <Text style={{ fontSize: 10, lineHeight: 10 }}>{data.item.name}</Text>
                            <View style={styles.MeBox}>
                                <Text>{data.item.msg}</Text>
                            </View>
                        </View>
                        <Text style={styles.Time}>{data.item.time}</Text>
                    </View>
                </View>
            </>
        );
    }

    return (
        <>
            <View style={styles.header}>
                <Text>{`${params?.room}`}</Text>
            </View>
            <View style={styles.Container}>
                <FlatList
                    data={chat}
                    ref={ref}
                    contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 20 }}
                    ListEmptyComponent={() => <Text>채팅 기록이 없습니다.</Text>}
                    estimatedItemSize={200} //가변항목 사이즈를 입력해줍니다.
                    renderItem={(data) => {
                        console.log(data);
                        if (data.item.type === 'notice') {
                            return Notice_chat(data);
                        } else if (data.item.type === 'chat') {
                            if (data.item.name === mt_id) {
                                return Me_chat(data);
                            } else {
                                return Other_chat(data);
                            }
                        }
                    }}
                />
            </View>
            <View style={styles.Bottom}>
                <TextInput
                    placeholder='입력해주세요'
                    style={styles.TextInput}
                    value={text}
                    onChangeText={(text) => setText(text)}
                />
                <TouchableOpacity style={styles.Button} hitSlop={20} onPress={() => SubmitChatting()}>
                    <Image source={require('../../assets/images/send.png')} style={styles.Send} />
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
    },
    Container: {
        flex: 1,
        backgroundColor: 'pink',
        // paddingHorizontal: 20,
    },
    Bottom: {
        height: 60,
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        borderTopColor: 'black',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    TextInput: {
        height: '100%',
        textAlign: 'left',
        width: '80%',
        // paddingHorizontal: 15,
        // backgroundColor: 'blue'
    },
    Send: {
        width: 25,
        height: 25,
    },
    Button: {

    },
    NoticeBox: {
        width: '100%',
        height: 30,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginVertical: 5,
    },
    ChatContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 5,
    },
    MeBox: {
        // width: 50,
        maxWidth: 250,
        backgroundColor: 'white',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    Time: {
        fontSize: 10,
        margin: 6,
    },
    ProfileImage: {
        width: 45,
        height: 45,
    },
    Profile: {
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: 'white',
        margin: 5,
    },
});

export default ChattingDetail;