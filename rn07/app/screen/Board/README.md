# 리스트 관련 라이브러리 및 사용법

## Flash-List

```
npm install or yarn add @shopify/flash-list
```

- FlashList는 2022년 1월 알파버전으로 등장한 리스트뷰어 라이브러리 입니다.


- FlatList가 아닌 RecyclerListView를 기반으로 만들어진 라이브러리 입니다.


- 데이터를 가변크기 항목으로 처리하기 때문에, 효율적인 렌더링이 가능합니다.


- 장점으로는 대표적으로 다음 3가지를 들 수 있습니다.
    - 1. 보이는 영역에만 집중하여 필요한 항목만 렌더링 해줍니다. 보이지 않는 항목들은 메모리에서 지워버림으로써 메모리 사용량을 크게 줄여줍니다.
    - 2. 가변크기 항목을 지원합니다. 다양한 크기의 항목을 보다 효율적으로 표시가능합니다.
    - 3. 재사용가능한 뷰를 사용하여 랜더링 성능을 향상시킵니다. 즉 모두 동일한 UI의 항목일 경우 첫번째 Item이 랜더링이 되게되면 그 UI를 재사용하여 빠르게 랜더링시킵니다.

- FlatList와 사용법이 상당히 유사하여 기존 FlatList를 사용하던 개발자분들께서도 손쉽게 사용이 가능합니다.

```
import { FlashList } from '@shopify/flash-list';

exprot const MyComponent = () => {
	
    const tempList = [
    	{idx : '1' , 'title' : 'title1'},
    	{idx : '2' , 'title' : 'title2'},
    	{idx : '3' , 'title' : 'title3'},
    	{idx : '4' , 'title' : 'title4'}
    ]
    
    return(
    	<FlashList
            contentContainerStyle={{padding:0,paddingBottom:20}}
            data={tempList}
            keyExtractor={(el,index)=>{ return index}}
            renderItem={({item})=>{
                return(
                    <View style={{paddingHorizontal:20,marginTop:20}}>
                        <Text>{title}</Text>
                    </View>
                )
            }}
            estimatedItemSize={600} //가변항목의 크기를 설정해줍니다.
            onEndReached={()=>{
                console.log('endOnReached Event!!!')
            }}
            onEndReachedThreshold={0.1}
		/>
    )

}
```



