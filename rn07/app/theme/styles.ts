
import styled from 'styled-components/native';
import { colorType, colors } from './color';

type MarginComType = {
    mt? : number,
    mb? : number,
}

type TextComType = {
    fontSize? : number,
    fontColor? : string,
    fontStyle? : 'Thin' | 'ExtraLight' | 'Light' | 'Regular' | 'Medium' | 'SemiBold' | 'Bold' | 'ExtraBold',
}

export const ViewItemCenter = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`

//bottom navigation 아이콘 크기
export const BottomMenuImage = styled.Image` 
    width:30px;
    height:30px;
    object-fit: contain;
`

export const MarginCom = styled.View<MarginComType>`
    margin-top : ${({mt}) => mt ? mt+'px' : 0};
    margin-bottom : ${({mt}) => mt ? mt+'px' : 0};
`

export const RefreshMarginCom = styled(MarginCom)`
    background-color:'black';
`

export const TextCom = styled.Text<TextComType>`
    font-size : ${({fontSize}) => fontSize ? fontSize+'px' : '16px'};
    color : ${({fontColor}) => fontColor || colors.BLACK};
    font-family: ${({fontStyle}) => fontStyle || 'Regular' };
`
//fontSize props는 정수로 입력해주시면 됩니다. 만약 값이 없다면 16으로 들어가게됩니다.
//color는 color.ts에있는 color 값을 사용해주시길 권장드립니다. props 데이터가 없으면 Black이 자동으로 입력됩니다.
//font-famile는 thin~ extrabold까지 정정해두었습니다. 타입을 참조해주시면도됩니다.
//font를 변경하고자 하시면 android -app - src - main - assets - fonts를 각 굵기에 해당하는 이름을 변경하여 폴더에 넣어주시면 됩니다. 
//https://dev-yakuza.posstree.com/ko/react-native/react-native-custom-font/ ios는 해당 주소를 참조하여 변경해주세요.