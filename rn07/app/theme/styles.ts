
import styled from 'styled-components/native';

type MarginComType = {
    mt? : number,
    mb? : number,
}

export const ViewItemCenter = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`

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