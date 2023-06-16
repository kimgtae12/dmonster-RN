# 라이브러리 관련 코드를 작성하는곳 - write by 김경태

## config
- api 주소 및 react native 환경설정


- base url에는 base api 주소가 들어갑니다.


- debugKey에는 백엔드에 보내는 debugkey를 넣어주시면 됩니다.


- 꼭 확인해주세요. 


- react-native-config는 오류 추적이 어려울 가능성이 있어 잠시 보류하였습니다.


- 추후 개발예정입니다.

## reactQueryClient
index.ts 
- QueryClient를 선언합니다. query데이터를 캐싱하기 위한 저장소를 만드는 작업입니다.
- QueryClient는 App.tsx에 QueryClientProvider를 선언하여 사용합니다.

loader.ts
-현재 온라인상태인지, 온라인상태를 변경할 수 있습니다. on/off

reactQuery.ts
- react query를 사용하기위해 모듈화 시켜둔 공간입니다.
- useQuery와 useMutation을 사용할 수 있습니다.

- useQuery


  ㄴ서버로부터 데이터를 조회해올때 사용합니다.( get 요청이라고 생각하시면 됩니다. )


  ㄴhook으로 작동되어 컴포넌트의 최상위 스코프에 선언합니다.


  ㄴdata, isLoading, isError, refetch등을 지원하며, 더 많은 기능은 https://tanstack.com/query/v3/docs/react/overview 를 참조해주세요.

- useMutation


  ㄴ서버의 데이터를 조작할때 사용합니다. ( post 요청이라고 생각하시면 됩니다.)


  ㄴmutation을 변수에 담아두고 비동기처리로 사용하여야 합니다. ex. async await , promise


  ㄴ컴포넌트 최상위 스코프에 useMutation을 선언하였다면, 해당 변수를 이용해 어떤 스코프에서도 사용이 가능합니다.

- fetch를 사용하지 않고, axios post를 이용해 구현해두었습니다.
- 현재 usePostQuery 및 usePostMutation으로 커스텀 해두었으며, 함수명은 편하신대로 수정하셔도 좋습니다.

- usePostQuery 예제
```
 const [cashingData, setCashingData] = React.useState<object>({});
 
 const {data, isLoading, isError, refetch} = usePostQuery(
    'someKey', // key이름은 캐시에 저장할때 사용할 키이름을 지정해주시면 됩니다. 
    'api요청시 필요한 파라미터',  //파라미터는 object로 선언해주시면 됩니다. ex. {mt_idx : '1' , mt_cont : 'Hello World'}
    'api주소' , //baseUrl에 지정해둔 주소를 제외한 나머지 주소를 입력해주시면 됩니다. ex. '/hi/someApiUrl.php'
 )


 React.useEffect(()=>{ //query는 비동기로 작동하기때문에, 변수가 할당되기전에 작동할 가능성이 있습니다. 이에대한 예외처리는 반드시 해주세요.
    if(data){
        const {data,result,msg} = data;
        setCashingData(data);
    }
 },[data,isLoading, isError, refetch])
```

- usePostMutation 예제
```
const [cashingData, setCashingData] = React.useState<object>({});


//사진이 없는 일반 object형태의 파라미터일 경우
const getMutation = usePostMutation(
    'someKey' // key이름은 캐시에 저장할때 사용할 키이름을 지정해주시면 됩니다.
    'api주소' //baseUrl에 지정해둔 주소를 제외한 나머지 주소를 입력해주시면 됩니다. ex. '/hi/someApiUrl.php'
);

//사진데이터가 포함되어있는 object형태의 파라미터일 경우
const getMutation = usePostMutation(
    'someKey' // key이름은 캐시에 저장할때 사용할 키이름을 지정해주시면 됩니다.
    'api주소' //baseUrl에 지정해둔 주소를 제외한 나머지 주소를 입력해주시면 됩니다. ex. '/hi/someApiUrl.php',
    true, //formData로 변환이 필요할경우 true로 선언해주시면 배열및 사진데이터가 자동으로 formData로 전송되도록 설계하였습니다.
);

const getDataHandler = async () => { //mutation은 반드시 비동기처리로 처리해주셔야합니다.

    const params = {
        mt_idx : '1',
        mt_cons : 'Hello Wolrd',
    }

    const {data, result, msg} = await getMutation.mutateAsync(params)

    console.log(data,result,msg);
}

React.useEffect(()=>{
    getDataHandler();
},[])
```

useRefreshOnFoucse.tsx
-컴포넌트에 포커스가 잡혔을때 refresh를 하는 모듈입니다. query일경우 refetching을 사용하여 주시면되고, mutation일 경우 해당모듈을 사용해주시거나 호출함수를 한번더 실행해주시면 됩니다.

