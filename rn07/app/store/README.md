# Write By 김경태
# zustand
- https://github.com/pmndrs/zustand

```
npm install zustand # or yarn add zustand or pnpm add zustand
```


- 독일어로 '상태'라는 뜻을 가진 라이브러리 입니다.


- 동작원리가 redux toolkit에 비해 상당히 편해졌습니다.



```
Redux Toolkit
ㄴ 기존 Redux에 비해 코드가 상당히 간결해졌습니다.
ㄴ Slice를 통해 state들을 관리합니다.
ㄴ Reducer, Action, Store(Index)로 이루어져있습니다.
ㄴ Reducer에 Action을 통한 payload를 할당받아 데이터를 저장시켜줍니다.
ㄴ Store에서는 Reducer들을 combine시켜줘야합니다. 
ㄴ 여러개의 Store를 생성하게되면 충돌 및 크래시 현상이 발생할 수 있어, Sotre 및 Reducer 관리가 까다롭습니다.
ㄴ useDispatch 및 useSelector를 통해 state를 쉽게 갱신 및 호출이 가능합니다.

Zustand
ㄴ 의존성 라이브러리가 없는 독립 패키지입니다. (Redux-Toolkit은 Redux를 설치해야 사용가능합니다.)
ㄴ 한 개의 중앙에 집중된 형식의 스토어 구조를 사용합니다. 물론 Store를 여러개 만든다고 충돌현상이 발생하지 않습니다. (Store가 독립적입니다.)
ㄴ React에 의존하지 않기때문에 자주바뀌는 상태를 직접제어할수있는 방법론을 제시해줍니다.
ㄴ 무엇보다 코드가 상당히 간결합니다. dispatch및 useSelector를 사용하지 않고, store에서 직접 데이터 및 메서드를 호출합니다.
ㄴ creatStore 내부터에서 api 호출이 가능합니다. ( axios )
```


## BearStore.tsx
- zustand를 이용한 store를 생성하는 영역입니다.


- create를 통해 store를 생성하고, 이때 set이라는 매게변수를 받는데 컴포넌트에서 전달받은 selector함수입니다.


```
// BearStore.ts
export const useBearStore = create<BearState>(set => ({ //store 생성
  bears: 0, //초기 state값
  increasePopulation: (bearCount) => set(state => ({bears: state.bears + bearCount})), //해당 method는 컴포넌트에서 실행합니다. 
  removeAllBears: () => set({bears: 0}),
}));

// Component.tsx
export function increaseBearCom(){

  const {bears, increasePopulation} = useBearStore(state => state); //store에서 method 및 state를 구조분해할당으로 선언합니다.

  function increaseCountHandler(bearCount){ //count handler 생성
    const increaseCount = increasePopulation(bearCount) //useBearStore에서 선언된 method 호출하여 실행합니다. 이때 파라미터는 store에 선언된 함수의 매개변수로 전달됩니다.
  }

  return <TouchableOpacity onPress={()=>{increaseCountHandler(bear+2)}}><Text>bear count!!!!<Text></TouchableOpacity>
}
```

## CountPersistStore.ts
- zustand의 미들웨어중 하나인 persist 및 createJsonStorage를 이용한 AsyncStorage 저장 방법론을 예시로 작성해둔 코드입니다.


- 기존 asyncStorage와의 차이점은 다음과 같습니다.


```
Fure AsyncStorage
-setAsyncStorage 및 getAsyncStorage를 통해 데이터를 가져옵니다.
-getAsyncStorage를 사용할땐 promise 또는 async await와 같은 비동기처리로 데이터를 가져옵니다.
-반드시 데이터를 가져오면 각컴포넌트 state 또는 redux에 dispatch 시켜줘야합니다.

Zustand Persist with AsyncStorage
-persist 내부에서 set 및 get 함수를 지원합니다.
-get함수를 통해 persist내부에 선언해둔 state의 데이터를 호출 할 수 있습니다. ex) get().count
-set함수를 실행하면 자동으로 asyncStorage에 저장이 됩니다. 이때 내부 state를 변화시킬때는 객체상태로 수정해줍니다. ex) set({count : count+1}); 
-앱을 껐다키면 dispatch 및 selector를 호출할 필요없이 자동으로 persist 내부 state에 데이터가 저장되어 각 컴포넌트에서 바로 사용이 가능합니다.

```