
import styled from 'styled-components/native';
import { colorType, colors } from './color';
import { BoarderViewType, MarginComType, CustomTextType, ViewBaseItemType, CustomTextInputType } from './stylesPropsType';

//default 값들이 있으므로 필요한 props만 전달하여 사용하면 됩니다.
export const BaseViewItem = styled.View<ViewBaseItemType>`
    flex:${({flex}) => flex ? flex : 1};
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'flex-start'};
    align-items: ${({alignItems}) => alignItems ? alignItems : 'flex-start'};

    margin : ${({ma}) => ma ? ma+'px' : 0};
    margin-top : ${({mt}) => mt ? mt+'px' : 0};
    margin-bottom : ${({mb}) => mb ? mb+'px' : 0};
    margin-left : ${({ml}) => ml ? ml+'px' : 0};
    margin-right : ${({mr}) => mr ? mr+'px' : 0};

    padding: ${({pa}) => pa ? pa+'pw' : 0};
    padding-left : ${({pl}) => pl ? pl+'px' : 0};
    padding-right : ${({pr}) => pr ? pr+'px' : 0};
    padding-top : ${({pt}) => pt ? pt+'px' : 0};
    padding-bottom : ${({pb}) => pb ? pb+'px' : 0};

    ${({bgColor}) => bgColor && `
        background-color : ${bgColor}
    `}
`

//ViewItemCenter 재사용
export const BorderView = styled(BaseViewItem)<BoarderViewType>`
    border-width : ${({bw}) => bw ? bw+'px' : 0};
    border-top-width : ${({btw}) => btw ? btw+'px' : 0};
    border-bottom-width : ${({bbw}) => bbw ? bbw+'px' : 0};
    border-left-width : ${({blw}) => blw ? blw+'px' : 0};
    border-right-width : ${({brw}) => brw ? brw+'px' : 0};

    ${({bc}) => bc && `border-color : ${bc}`};
    ${({btc}) => btc && `border-top-color : ${btc}`};
    ${({bbc}) => bbc && `border-bottom-color : ${bbc}`};
    ${({blc}) => blc && `border-left-color : ${blc}`};
    ${({brc}) => brc && `border-right-color : ${brc}`};

    border-radius : ${({br}) => br ? br+'px' : 0};
    border-top-left-radius : ${({btlr}) => btlr ? btlr+'px' : 0};
    border-top-right-radius : ${({btrr}) => btrr ? btrr+'px' : 0};
    border-bottom-left-radius : ${({bblr}) => bblr ? bblr+'px' : 0};
    border-bottom-right-radius : ${({bbrr}) => bbrr ? bbrr+'px' : 0};
`

//bottom navigation 아이콘 크기
export const BottomMenuImage = styled.Image` 
    width:30px;
    height:30px;
    object-fit: contain;
`

export const MarginCom = styled.View<MarginComType>`
    margin-top : ${({mt}) => mt ? mt+'px' : 0};
    margin-bottom : ${({mb}) => mb ? mb+'px' : 0};
`

export const RefreshMarginCom = styled(MarginCom)`
    background-color:'black';
`

//fontSize props는 정수로 입력해주시면 됩니다. 만약 값이 없다면 16으로 들어가게됩니다.
//color는 color.ts에있는 color 값을 사용해주시길 권장드립니다. props 데이터가 없으면 Black이 자동으로 입력됩니다.
//font-famile는 thin~ extrabold까지 정정해두었습니다. 타입을 참조해주시면도됩니다.
//font를 변경하고자 하시면 android -app - src - main - assets - fonts를 각 굵기에 해당하는 이름을 변경하여 폴더에 넣어주시면 됩니다. 
//https://dev-yakuza.posstree.com/ko/react-native/react-native-custom-font/ ios는 해당 주소를 참조하여 변경해주세요.
//현재는 보적적으로 사용하는 Pretendard를 사용하였습니다.

//default data를 변경하여 custom component를 만들 수 있습니다.

//기본 form이되는 border radius가 8일겨우우
//ex ) border-radius : ${({br}) => br ? br+'px' : 8};
export const CustomText = styled.Text<CustomTextType>`
    font-size : ${({fs}) => fs ? fs+'px' : '16px'};
    color : ${({fc}) => fc || colors.BLACK};
    font-family: ${({fw}) => fw || 'Regular' };

    margin : ${({ma}) => ma ? ma+'px' : 0};
    margin-top : ${({mt}) => mt ? mt+'px' : 0};
    margin-bottom : ${({mb}) => mb ? mb+'px' : 0};
    margin-left : ${({ml}) => ml ? ml+'px' : 0};
    margin-right : ${({mr}) => mr ? mr+'px' : 0};

    padding: ${({pa}) => pa ? pa+'pw' : 0};
    padding-left : ${({pl}) => pl ? pl+'px' : 0};
    padding-right : ${({pr}) => pr ? pr+'px' : 0};
    padding-top : ${({pt}) => pt ? pt+'px' : 0};
    padding-bottom : ${({pb}) => pb ? pb+'px' : 0};
`

export const CustomTextInput = styled.TextInput<CustomTextInputType>`

    font-size : ${({fs}) => fs ? fs+'px' : '16px'};
    color : ${({fc}) => fc || colors.BLACK};
    font-family: ${({fw}) => fw || 'Regular' };
    
    margin : ${({ma}) => ma ? ma+'px' : 0};
    margin-top : ${({mt}) => mt ? mt+'px' : 0};
    margin-bottom : ${({mb}) => mb ? mb+'px' : 0};
    margin-left : ${({ml}) => ml ? ml+'px' : 0};
    margin-right : ${({mr}) => mr ? mr+'px' : 0};

    padding: ${({pa}) => pa ? pa+'pw' : 0};
    padding-left : ${({pl}) => pl ? pl+'px' : 0};
    padding-right : ${({pr}) => pr ? pr+'px' : 0};
    padding-top : ${({pt}) => pt ? pt+'px' : 0};
    padding-bottom : ${({pb}) => pb ? pb+'px' : 0};

    ${({bgColor}) => bgColor && `
        background-color : ${bgColor}
    `}

    border-width : ${({bw}) => bw ? bw+'px' : 0};
    border-top-width : ${({btw}) => btw ? btw+'px' : 0};
    border-bottom-width : ${({bbw}) => bbw ? bbw+'px' : 0};
    border-left-width : ${({blw}) => blw ? blw+'px' : 0};
    border-right-width : ${({brw}) => brw ? brw+'px' : 0};

    ${({bc}) => bc && `border-color : ${bc}`};
    ${({btc}) => btc && `border-top-color : ${btc}`};
    ${({bbc}) => bbc && `border-bottom-color : ${bbc}`};
    ${({blc}) => blc && `border-left-color : ${blc}`};
    ${({brc}) => brc && `border-right-color : ${brc}`};

    border-radius : ${({br}) => br ? br+'px' : 0};
    border-top-left-radius : ${({btlr}) => btlr ? btlr+'px' : 0};
    border-top-right-radius : ${({btrr}) => btrr ? btrr+'px' : 0};
    border-bottom-left-radius : ${({bblr}) => bblr ? bblr+'px' : 0};
    border-bottom-right-radius : ${({bbrr}) => bbrr ? bbrr+'px' : 0};
`
