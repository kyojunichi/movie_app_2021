# 姜準一(강준일) 201840202


## [9月29日]

### 학습내용(學習內容)

- map() 함수(函數)가 반환(返還)한 리액트 컴포넌트를 보고 리액트 컴포넌트가 어떠한 구조(構造)인지 관찰(觀察)

- map() 함수(函數)로 만든 컴포넌트에 Key props를 추가(追加)
    - foodILike 배열(配列) 원소(元素)에 id라는 값을 추가(追加)하여 key값이 없다는 경고(警告) 메시지를 해결(解決)
    - Food 컴포넌트에 key props를 추가(追加) -> key props의 값으로 {dish.id}를 전달(傳達)

- img 엘리먼트에 alt 속성(屬性)을 추가(追加)

- rating 시스템의 추가(追加)
    - 음식(飮食) 데이터에 rating 추가(追加)
    - rating props를 Food 컴포넌트에 전달(傳達)하면서 값을 검사(檢査) -> 그러기 위해 props의 자료형(資料型)을 검사(檢査)할 수 있도록 만들어 주는 prop-types의 설치(設置)가 필요(必要)
    - prop-types 설치(設置)
    - prop-types의 역할(役割)
        - 컴포넌트가 전달(傳達)받은 props가 정말 내가 원하는 값인지 확인(確認)
        - 실수(失手)하는 것을 방지(防止)
    - prop-types 적용(適用)
    - isRequired의 의미(意味)
        - isRequired가 작성(作成)되어 있다면 필수(必須)인 항목(項目)

- state로 숫자(數字) 증감(增減) 기능(機能) 만들어 보기
    - 클래스형(型) 컴포넌트 작성(作成)
        - 클래스형(型) 컴포넌트가 되려면 App 클래스가 리액트가 제공(提供)하는 Component 클래스를 필(必)히 상속(相續)
        - App 컴포넌트가 JSX를 반환(返還)해야함 그러나 작성(作成)한 App 컴포넌트는 함수(函數)가 아닌 클래스라서 return문(文) 사용불가(使用不可) -> 클래스형(型) 컴포넌트에서는 JSX를 반환(返還)하기 위해 render() 함수(函數)를 사용(使用)
    - render() 함수(函數)를 사용(使用)
        - 함수형(函數型) 컴포넌트는 return문(文)이 JSX를 반환(返還)
        - 그러나 클래스형(型) 컴포넌트는 render() 함수(函數)가 JSX를 반환(返還)
    - state 정의(定義)
        - state에 count값을 추가(追加)하고 사용(使用)
    - Add 버튼과 Minus 버튼 작성(作成)
    - add() 함수(函數)와 minus() 함수(函數)를 작성(作成)
    - 버튼의 동작(動作)을 위한 onClick 속성(屬性)을 추가(追加)
    - 리액트는 state를 직접(直接) 변경(變更)하는 경우(境遇)에는 render() 함수(函數)를 재차(再次) 실행(實行)하지 않음
    - 그렇기에 setState() 함수(函數)를 사용(使用)하여 count state 변경(變更)
    - 버튼으로 count state의 값을 증가(增加) 또는 감소(減少)시키도록 작성(作成)

## [9月15日]

### 학습내용(學習內容)
- props의 개념(概念)
- props로 컴포넌트에 데이터 전달(傳達)
- map() 함수(函數)의 사용(使用)

## [9月8日]

### 학습내용(學習內容)
- commit
- React 앱 동작(動作) 및 실행(實行)
- Component 작성(作成) 및 사용(使用)
- JSX