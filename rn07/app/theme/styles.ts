
import styled from 'styled-components/native';

type MarginComType = {
    mt? : number,
    mb? : number,
}

export const MarginCom = styled.View<MarginComType>`
    margin-top : ${({mt}) => mt ? mt : 0};
    margin-bottom : ${({mt}) => mt ? mt : 0};
`

export const RefreshMarginCom = styled(MarginCom)`
    background-color:'black';
`