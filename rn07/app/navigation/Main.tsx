import React from 'react';
import { NavigationListType } from './navigationType';
import TestPage from '../screen/testpage/TestPage';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIndex } from '@/screen/Home/HomeIndex';
import { BoardIndex } from '@/screen/Board/BoardIndex';
import { ShopIndex } from '@/screen/Shop/ShopIndex';
import { MypageIndex } from '@/screen/MyPage/MypageIndex';
import { BottomMenuImage } from '@/theme/styles';
import { BackHandlerCom } from '@/component/BackHandler';
  
    
  export const Main = () => {
    
    const BottomTab = createBottomTabNavigator(); //bottom tab 생성

    const [selIndex, setSelIndex] = React.useState(0);

    return(
        <View style={{flex:1}}>
            {/** navigator 를 생성합니다. Bottom Navigation의 최상위 루트라고 생각하시면 됩니다.*/}
            <BackHandlerCom isRoot />
            <BottomTab.Navigator initialRouteName='Home'>
                {/** screen에는 bottom Tab에 들어갈 component를 넣어주시면 됩니다. */} 
                <BottomTab.Screen
                    name="Home"
                    component={HomeIndex}
                    options={{
                        headerShown:false,
                        tabBarShowLabel:false, //기본 bottom tab label을 삭제합니다.
                        tabBarIcon:()=>{
                            return(
                                <View>
                                    <BottomMenuImage 
                                        source={ 
                                            selIndex === 0 ? 
                                                require('../assets/images/b_menu1_on.png') 
                                            : 
                                                require('../assets/images/b_menu1_off.png')
                                            } 
                                        style={{width:30,height:30}} />
                                </View>
                            )
                        }
                    }}
                    listeners={{ //tab 리스너 이벤트를 등록합니다.
                        tabPress : () => {  //탭을 눌렀을때 발생하는 메서드입니다.
                            setSelIndex(0);
                        }
                    }}

                />
                <BottomTab.Screen
                    name="Board"
                    component={BoardIndex}
                    options={{
                        headerShown:false,
                        tabBarShowLabel:false,
                        tabBarIcon:()=>{
                            return(
                                <View>
                                    <BottomMenuImage 
                                        source={ 
                                            selIndex === 1 ? 
                                                require('../assets/images/b_menu2_on.png') 
                                            : 
                                                require('../assets/images/b_menu2_off.png')
                                            } 
                                        style={{width:30,height:30}} />
                                </View>
                            )
                        }
                    }}
                    listeners={{ //tab 리스너 이벤트를 등록합니다.
                        tabPress : () => {  //탭을 눌렀을때 발생하는 메서드입니다.
                            setSelIndex(1);
                        }
                    }}
                />
                <BottomTab.Screen
                    name="Shop"
                    component={ShopIndex}
                    options={{
                        headerShown:false,
                        tabBarShowLabel:false,
                        tabBarIcon:()=>{
                            return(
                                <View>
                                    <BottomMenuImage 
                                        source={ 
                                            selIndex === 2 ? 
                                                require('../assets/images/b_menu3_on.png') 
                                            : 
                                                require('../assets/images/b_menu3_off.png')
                                            } 
                                        style={{width:30,height:30}} />
                                </View>
                            )
                        }
                    }}
                    listeners={{ //tab 리스너 이벤트를 등록합니다.
                        tabPress : () => {  //탭을 눌렀을때 발생하는 메서드입니다.
                            setSelIndex(2);
                        }
                    }}
                />
                <BottomTab.Screen
                    name="MyPage"
                    component={MypageIndex}
                    options={{
                        headerShown:false,
                        tabBarShowLabel:false,
                        tabBarIcon:()=>{
                            return(
                                <View>
                                    <BottomMenuImage 
                                        source={ 
                                            selIndex === 3 ? 
                                                require('../assets/images/b_menu4_on.png') 
                                            : 
                                                require('../assets/images/b_menu4_off.png')
                                            } 
                                        style={{width:30,height:30}} />
                                </View>
                            )
                        }
                    }}
                    listeners={{ //tab 리스너 이벤트를 등록합니다.
                        tabPress : () => {  //탭을 눌렀을때 발생하는 메서드입니다.
                            setSelIndex(3);
                        }
                    }}
                />

            </BottomTab.Navigator>
        </View>
    )
  }
  
  
