
/**
 * 
 *  typescript를 사용하라고 하였지만 anyscript로 사용하시는 분들이 종종있어서 해당 가이드라인을 작성하게 되었습니다.
 *  typescript에서 any는 절대로 권장되지 않는 type이며, 정말 피치못할경우(route, 패키지 모듈 타입 type)등의 경우에만 사용하여주세요.
 * 
 *  typescript에서 type 선언을 하는 방법에는 두가지가 있습니다.
 *  interface 와 type 이 존재합니다.
 * 
 *  type 과 interface는 유사한점이 상당히 많습니다. 똑같이 객체에대한 타입을 지정해 줄 수 있으며 확장도 가능합니다.
 * 
 *  하지만 사용처, 상속방법등에서 차이점이 존재합니다.
 * 
 *  1. 사용처
 * 
 *  type : 간단한 원시타입 선언 , 튜플 등에서는 type을 선언하는것이 유용합니다. 
 *  
 *  type testState = string ;
 *  type arrayA = Array<string>; string으로 이루어진 Array 선언방식입니다.
 *  type num = 1 | 2 | 3 | 4 | 5
 *  type intersection = { a : string, b : string} & { a : string, c : string } // a b c 모두 string으로된 객체의 타입을 선언합니다.
 *  type union = {a : string} | {b : string}; // a 혹은 b가 string으로 된 객체의 타입을 선언합니다. 
 *  
 *  interface : 객체에만 타입선언이 가능합니다.
 *  - props 혹은 복잡한 객체에 타입을 선언할때 interface를 권장합니다.
 *  
 *  2. 상속
 */

//type
type testType = {
    idx : number; //unique key
    title : string; //제목
    content : string; //내용
}

type extentType = testType & {
    phone : string; //휴대폰번호
    action : () => void; //액션 함수
}

//interface
interface testInterface {
    idx : number; //unique key
    title : string; //제목
    content : string; //내용
} 

interface testExtentInterface extends testInterface {
    phone : string; //휴대폰 번호
    action : () => void; //액션 함수
}

/**
 * 
 *  type은 ' & '로 상속을 통한 확장이 가능합니다.
 *  반면 interface는 extends로 상속을 통한 확장이 가능합니다.
 * 
 *  여기서도 차이점이 하나 나타나게 되는데, interface는 동일한 이름을 한번더 사용함으로써 확장이 가능하지만, type은 중복된 이름의 type을 선언할 수 없습니다.
 * 
 */

//type 중복이름 선언
type testType = { //error 발생
    phone : string;
    action : () => void;
}

//interface 중복이름 선언
interface testInterface { //자동 확장
    phone : string;
    action : () => void;
}

/**
 * 
 *  중복된 interface명을 최소화시키는것이 가장 좋긴하지만, 확장이 잦을것같은 경우엔 interface를 사용하시는 것을 권장합니다.
 *
 *  다음으로는 사용가능한 타입에대해서 설명드리도록 하겠습니다.
 * 
 *  예시는 type으로 설명드리도록 하겠습니다.
 * 
 *  typescript의 type 혹은 interface를 선언할때는 object로 선언합니다.
 *  왼쪽 key에는 사용하는 key이름을 작성해주시면 됩니다. 오른쪽 value에는 해당 key가 품게되는 데이터의 타입을 작성해주시면 됩니다.
 */

type objType = {
    idx : string; //선언되어있는 object data중 idx는 string이다.
    title : string; //선언되어있는 object data중 title은 string이다.
    content : string; //선언되어있는 object data중 content는 string이다.
    phomeNum : number; //선언되어있는 object data중 phoneNum은 number이다.
}

type typeList = {
    someString : string //string 타입으로 선언합니다.
    someNumber : number //number 타입으로 선언합니다. 여기엔 double, float 형식 모두 포함이 됩니다.
    someBoolean : boolean // boolean 타입으로 선언합니다. 반드시 true 혹은 false 데이터가 들어가야합니다.
    someNull : null | string; //null데이터 type을 선언할때 사용합니다. 보통 유니온 (' | ')과 함께 사용합니다.
    someData : any // 모든 데이터타입을 허용합니다. 절대로 권장되지 않는 type이며, 데이터 추적이 어렵고, 유지보수성을 크게 떨어트립니다. 정말 피치못할 경우에만 사용합니다.
    
    //string로 이루어진 배열 혹은 number로 이루어진 배열 혹은 objType 선언한 object 타입으로 이루어진 배열 입니다. object는 약간 복잡하지만 동일한 방식으로 사용이 가능합니다.
    someArray : string[] | number[] | objType[];

    //object로 이루어진 데이터 타입을 선언합니다.
    someObject : {
        someObjData1 : string;
        someObjData2 : number;
        someObjData3 : boolean;
    }

    someFuc : () => void; //매개변수가 없는 함수를 뜻합니다.

    //매개변수가 하나 있고, 배개변수에는 objType를 받는 함수 type 선언 방식입니다. 물론 objType이 아니더라도 원시타입까지 선언이 가능합니다. ex) string, number
    someFunc2 : (params1 : objType) => void; 

    //타입선언시 key뒤에 ' ? '를 붙이면 undefined를 허용하겠다는 뜻이됩니다. 이 타입이 적용된 데이터를 사용할땐 반드시 유효성검사를 해주셔야합니다.
    canUndifiendKey? : string; 
    canUndifinedKey2  : undefined | string; //같은 뜻입니다.

}

/** 
 * 타입 선언시 독특한 방법으로도 선언이 가능합니다.
 * 하지만 이 방식은 절대로 권장되지 않으며, typescript의 장점인 유지보수성을 크게 떨어트립니다.
 * 
 * 정말 어쩔수없는경우가 있기에 그냥 이런것이 있다는 정도만 알아주시면 됩니다.
 * ex ) api respone데이터의 key값이 한글일 경우 {'이건키다' : 'key data'};
 */

type keyTypeList = {
    [key : string] : string; //모든 키이름은 string이며, 그 value값은 string이라고 나타냅니다.
}




