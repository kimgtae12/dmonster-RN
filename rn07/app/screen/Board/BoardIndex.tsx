import React from 'react';
import { Text, View } from 'react-native';
import { FlashList,FlashListProps } from '@shopify/flash-list';
import { BaseViewItem, CustomText } from '@/theme/styles';
import { styled } from 'styled-components/native';
import { tempList } from './TestList';

export interface tempItemType { //리스트에 필요한 item type
    idx : string, //아이템 idx
    title : string, //아이템 title
}

interface flashRenderItemType { //flashlist에 랜더링될 데이터 type
    item : tempItemType, //flashList에서 랜더링되는 item
    index : number, //flashList에서 랜더링될때 사용되는 idx
}

export const BoardIndex = () => {    

    const flashRenderItem = ({item,index}:flashRenderItemType) => { //랜더링될 item 컴포넌트입니다.구조분해할당으로 item 및 index를 가져올 수 있습니다.
        return(
            <BaseViewItem
                pt={20} pb={20}
                mb={20}
                bgColor='#e3e3e3'
            >
                <CustomText pl={20}>{item.title}</CustomText>
            </BaseViewItem>
        )
    }

    return(
        <BaseViewItem pa={20}>
            <CustomText>FlatList Guide</CustomText>

            <BaseViewItem flex={1} >
                <BaseViewItem width={'100%'} height={'100%'} flexDirection='row'>
                    <FlashList
                        contentContainerStyle={{paddingVertical:20}} //container 스타일을 지정해줍니다. flashlist는 자체 style props는 지원하지 않습니다.
                        data={tempList} //flasList에 들어가는 배열 data입니다.
                        renderItem={(item)=>flashRenderItem(item)} //랜더링될 컴포넌트를 가르킵니다. 반환되는 item은 배열원소와 index로 이루어져 있습니다. flashRenderItem 참고
                        estimatedItemSize={200} //가변항목 사이즈를 입력해줍니다.
                        onEndReached={()=>{ //스크롤이 끝까지 되었을때 발생하는 이벤트입니다. infinity scroll이용시 사용됩니다.
                            console.log('onEndReached 이벤트 발생!');
                        }}
                        onEndReachedThreshold={0.5} //onEndReached이벤트를 스크롤 어느시점에 감지할지 정할 수 있습니다. 0.1~1까지 지정하며 default는 0.5입니다.
                    />
                </BaseViewItem>
            </BaseViewItem>
        </BaseViewItem>
    )
}