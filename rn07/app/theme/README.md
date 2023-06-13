# 테마

## colors.ts

- 색상들을 모아두는 파일입니다.

## styles.ts

- style component를 모아둔 파일입니다.

- styleSheet 대신 재사용이 용이하고, 간단하게 쓸수있으며, props도 사용가능한 styled-component를 채택하였습니다.

```
yarn add styled-components/native
```

- 인스톨후 사용가능합니다.

- type은 props 데이터를 가져올때 그 데이터의 형식에 맞게 선언해주시면 됩니다.

- css를 선언할때 카멜표기법이 아닌, 케밥 표기법(css 표준)으로 사용합니다.

```
//styles.ts

import styled from 'styled-components/native';

type MarginComType = {
    mt? : number,
    mb? : number,
}

export const MarginCom = styled.View<MarginComType>`
    margin-top : ${({mt}) => mt ? mt : 0};
    margin-bottom : ${({mt}) => mt ? mt : 0};
`

```

- 선언은 const {컴포넌일이름} = styled.{react native view component}<propsType>`` 로 선합합니다.


- 컴포넌트 이름에는 컴넌넌트 이름을 지정해주면도됩니다.

- react native view component에는 사용할 컴포넌트를 넣어주시면 됩니다. ex) View, Text, TouchableOpacity 등등

- styled component를 재사용하고다다면 아래와 같이 따라해주시면 됩니다.

```
export const MarginCom = styled.View<MarginComType>`
    margin-top : ${({mt}) => mt ? mt : 0};
    margin-bottom : ${({mt}) => mt ? mt : 0};
`

export const RefreshMarginCom = styled(MarginCom)`
    background-color : 'black';
`
```

- 이렇게 styled옆에 ()안에 재사용할 컴포넌트를 넣어주시면 됩니다. *props 선언도 함께 오게됩니다.



