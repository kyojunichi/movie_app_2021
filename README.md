# 姜準一(강준일) 201840202


# [10月13日]

# 학습내용(學習內容)

## Movie 컴포넌트에 props 추가(追加)하고 출력(出力)해 보기
- Movie 컴포넌트에서 id、title、year、summary、poster props를 받아 출력(出力)할 수 있도록 수정(修正)
- App 컴포넌트에서 Movie 컴포넌트를 그릴 때 title만 우선(優先) 출력(出力)하도록 작성(作成)
- 음식(飮食) 앱을 작성(作成)했을 때 컴포넌트를 map()함수(函數)로 출력(出力)했던 것과 동일(同一)하게 코딩
- Movie.js 수정(修正)
```javascript
funtion Movies({ id, title, year, summary, poster }) {
    return <h4>{title}</h4>;
}
```

## App 컴포넌트에서 Movie 컴포넌트 그리기
- 구조분해할당(構造分解割當)으로 this.state에 있는 movies를 얻은 후(後)、App 컴포넌트에서 We are ready를 출력(出力)하고 있는 자리에 movies.map()을 사용(使用)
- map()函數의 첫 번째 인자(因子)로 컴포넌트를 반환(返還)하는 함수(函數)를 전달(傳達)
- App.js 수정(修正)
```javascript
render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? 'Loading...' : movies.map()}</div>
}
```

## map()함수(函數)에 컴포넌트를 반환(返還)하는 함수(函數) 전달(傳達)하기
- 코드를 조금씩 전개(展開)하여 완성(完成)하기 위해 우선(優先) Console 탭에 영화(映畫)데이터를 출력(出力)한 후(後)、아무것도 반환(返還)하지 않는 함수(函數)를 전달(傳達)
- App.js 수정(修正)
```javascript
{isLoading
    ? 'Loading...'
    : movies.map((movie) => {
        console.log(movie)
        return
    })}
```

## Movie 컴포넌트 반환(返還)하도록 movies.map() 수정(修正)하기
- App.js에 Movie 컴포넌트를 import한 후(後)、movies.map()에 전달(傳達)한 함수(函數)가 <Movie />를 반환(返還)하도록 한다
- App.js 수정(修正)
```javascript
import Movie from './Movie';
```

## Movie 컴포넌트에 props 전달(傳達)하기
- id、year、title、summary、poster를 isRequired로 설정(設定)했기 때문에 props를 모두 전달(傳達)해야함
- 단(但)、poster props의 경우(境遇) 키 이름이 medium-cover_image이므로 movies.poster가 아니라 movies.medium_cover_image라고 작성(作成)
- App을 실행(實行)해 보면 영화(映畫) 제목(題目)이 나오는 것을 확인(確認) 가능(可能)
- App.js 수정(修正)
```javascript
<Movie
    id={movie.id}
    year={movie.year}
    title={movie.title}
    summary={movie.summary}
    poster={movie.medium_cover_image}
/>
```

## key props 추가(追加)하기
- key props 문제(問題)를 해결(解決)해야함
- key props는 유일(唯一)해야 함으로 API에서 넘겨주는 id값을 사용(使用)
- console.log()는 사용(使用)하지 않음으로 삭제(削除)
- App.js 수정(修正)
```javascript
movies.map((movie) => {
    return (
        <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.poster}
        />
    )
})
```

# 06-4 영화(映畫) 앱 스타일링하기 - 기초(基礎)

## App 컴포넌트에 HTML 추가(追加)하기
- App컴포넌트가 반환(返還)할 JSX 바깥쪽을 <section class="container">로 감싼다
- Loading...은 <div class="loader><span class="loader">로 감싼다
- movies.map()은 <div class="movies">로 감싼다
- App.js 수정(修正)
```javascript
<section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
```


## Movie 컴포넌트에 HTML 추가(追加)하기
- Movie 컴포넌트가 반환(返還)할 JSX를 <div class="movie">로 감싼다
- 그 안에서 title、year、summary를 목적(目的)에 맞는 tag로 감싼다
- Movie.js 수정(修正)
```javascript
function Movie({ id, title, year, summary, poster }) {
    return (
        <div class="movie__data">
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__title">{year}</h5>
            <p class="movie_summary">{summary}</5>
        </div>
    )
}
```

## 영화(映畫) 포스터 이미지 추가(追加)하기
- 전체(全體) tag를 감싸는 div tag(class="movie")를 추가(追加)
- img tag를 그 아래에 추가(追加)해서 src속성(屬性)에는 poster props를、alt속성(屬性)에는 title props를 전달(傳達)
- Movie.js 수정(修正)
```javascript
function Movie({ id, title, year, summary, poster }) {
    return (
        <div class="movie>
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__title">{year}</h5>
                <p class="movie_summary">{summary}</5>
            </div>
        </div>
    )
}
```

## Movie 컴포넌트 정리(整理)하기
- Moive 컴포넌트에는 id props가 필요(必要)없으니 제거(除去)
- Movie.js 수정(修正)
```javascript
function Movie({ id, title, year, summary, poster }) {
```
```javascript
Movie.propTypes = {
    id: PropTypes.number.isRequired,
}
```
- Movie 컴포넌트에서 상기(上記)된 코드에서「id」와 「id: ... isRequired,」부분(部分)을 삭제(削除)

## style속성(屬性)으로 title 스타일링하기
- h3 tag에 style속성(屬性)을 추가(追加)하고 backgroundColor를 red로 준다
- Movie.js 수정(修正)
```javascript
<h3 class="movie__title" style={{ backgroundColor: 'red' }}>
    {title}
</h3>
```

## CSS파일 생성(生成)
- src폴더에 App.css、Movie.css를 생성(生成)

## App、Movie 컴포넌트에 CSS파일 import하기
- App.js 수정(修正)
```javascript
import React from 'react'
import axios from 'axios'
import Movie from './Movie'
import './App.css'
```
- Movie.js 수정(修正)
```javascript
import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'
```
- CSS파일로 적용(適用)할 것이기 때문에 이전(以前)에 입력(入力)한 이 부분(部分)은 제거(除去)
```javascript
style={{ backgroundColor: 'red'
```

## App.css파일 작성(作成)하기
- 배경색(背景色)을 어두운 색(色)으로 변경(變更)
- App.css 작성(作成)
```css
body {
    background-color: #2f2f2f;
}
```

# 07-1 영화(映畫) 앱 전체(全體) 모습 수정(修正)하기
- 페이지의 디자인은 이하(以下)와 같이 한다
- 좌측상단(左側上段)에는 살짝 튀어나온 듯한 느낌의 영화(映畫)포스트
- 우측(右側)에는 제목(題目)、장르、평점(評點)、시놉시스

## App.css의 내용(內容) 전부(全部) 삭제(削除)
- App.css의 내용(內容)을 전부(全部) 삭제(削除)

## Movie 컴포넌트에 genres props 전달(傳達)하기
- 런타임(runtime)아래에 있는 장르(genres)를 추가(追加)

## Movie 컴포넌트 수정(修正)하기
- Movie 컴포넌트 인자(因子)에 genres를 추가(追加)
- Movie.propTypes에는 genres props가 문자열배열(文字列配列) arrayOf(PropTypes.string)이며 isRequired를 추가(追加)
- Movie.js 수정(修正)
```javascript
function Movie({ id, title, year, summary, poster, genres }) {
    return (
        <div class="movie>
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__title">{year}</h5>
                <p class="movie_summary">{summary}</5>
            </div>
        </div>
    )
}
```
- Movie.js 수정(修正)
```javascript
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
```

## App 컴포넌트 수정(修正)하기
- genres props가 Movie 컴포넌트에 undefined로 전달(傳達)받았다는 부분(部分)부터 수정(修正)
- 이는 App컴포넌트에서 해당(該當) props를 Movie컴포넌트로 전달(傳達)하게 해야한다
- 메시지가 사라졌는지 console을 확인(確認)
- App.js 수정(修正)
```javascript
<Movie
    //(생략(省略))
    poster={movie.medium_cover_image}
    genres={movie.genres}
/>
```

## class 속성명(屬性名)을 className으로 변경(變更)하기
- HTML의 class와 JavaScript의 class라는 이름이 겹치면 React가 혼란(混亂)스러워 할 가능성(可能性)이 있기 때문
- console에서 확인(確認)
- 이와 유사(類似)한 예(例)를 하나 더 설명(說明)하면、label문(文)의 for element가 있음
- 이 경우(境遇)도 for="name"이 아니라 htmlFor="name"으로 작성(作成)
- App.js 수정(修正)
```javascript
<section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
```
- Movie.js 수정(修正)
```javascript
function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    )
}
```

## 영화(映畫) 장르 출력(出力)하기
- Movie컴포넌트에서 장르를 출력(出力)하도록 코드를 수정(修正)
- genres props가 배열(配列)이므로 map()함수(函數)를 사용(使用)
- genres props를 ul、li 태그로 감싸서 출력(出力)
- console을 확인(確認)해보면 key props가 없다는 메시지가 나옴
- Movie.js 수정(修正)
```javascript
<div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre) => {
                        return (
                            <li className="movie__genre">{genre}</li>
                        )
                    })}
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>
```


# [10月6日]

# 학습내용(學習內容)

- 생명주기함수(生命週期函數)
    - constructor()함수(函數)
        - constructor()는 Component를 생성(生成)할 때 state값을 초기화(初期化)하거나 메서드를 바인딩할 때 사용(使用)
        - render()함수(函數)보다 constructor()함수(函數)가 먼저 실행(實行)
    - componentDidMount()함수(函數)
        - 컴포넌트가 처음 화면(畫面)에 그려지면 실행(實行)되는 함수(函數)
        - render()함수(函數)가 실행(實行)된 직후(直後) componentDidMount()함수(函數)가 실행(實行)
    - componentDidUpdate()함수(函數)
        - 화면(畫面)이 업데이트되면 실행(實行)
        - 버튼을 클릭하면 setState()함수(函數)가 실행(實行)
        - render()함수(函數)로 화면(畫面)이 업데이트된 직후(直後) componentDidUpdate()함수(函數)가 실행(實行)
    - componentWillUnmount() 함수(函數)
        - 컴포넌트가 화면(畫面)에서 떠날 때 실행(實行)
        - 보통(普通) 컴포넌트에 적용(適用)한 이벤트 리스너를 제거(除去)할 때 많이 사용(使用)

- 영화(映畫) 앱 만들기 시작(始作)
- 영화(映畫) 데이터 로딩 상태(狀態)를 표시(表示)
    - isLoading state를 추가(追加)
    - isLoading state는 아직 데이터가 없기 때문에 확인(確認)을 위해 true로 세팅
    - 구조분해할당(構造分解割當)으로 this.state에 있는 isLoading을 상수(常數)로 선언(宣言)하여 앞으로 this.state를 쓰지 않아도 되게 함
    - 삼항연산자(三項演算子)를 사용(使用)해서 isLoading이 true면 「Loading...」 을 출력(出力)하고 false면 「We are ready」 를 출력(出力)

- 로딩 현상(現象) 구현(具現)
    - setTimeout()함수(函數)를 적용(適用)하여 구현(具現)
    - setTimeout()함수(函數)는 첫 번째 인자(因子)로 전달(傳達)한 함수(函數)를 두 번째 인자(因子)로 전달(傳達)한 값(밀리秒) 후(後)에 실행(實行)
    - setTimeout()함수(函數)의 첫 번째 인자(因子)는 실행(實行)할 함수(函數)이고、두 번째 인자(因子)로 전달(傳達)한 값은 지연시간(遲延時間)
    - 생명주기함수(生命週期函數)인 componentDidMount()함수(函數)를 사용(使用)하여 먼저 Render()函數가 수행(遂行)된 다음 setTimeout()함수(函數)를 실행(實行)

- axios 설치(設置)

- JSON Viewer 확장도구(擴張道具)를 설치(設置)

- 노마드 코더 영화(映畫) API를 영화(映畫) 앱에서 호출(呼出)

- 영화(映畫) API 사용(使用)해보기
    - getMovies()함수(函數)를 작성(作成)
    - getMovies()함수(函數) 內에서 axios.get()이 실행(實行)하도록 한다
    - axios.get()의 return값은 movies에 저장(貯藏)
    - 이 때 자바스크립트에게 getMovies()함수(函數)는 시간(時間)이 필요(必要)하다는 것을 알리기 위해 async、await를 사용(使用)

- 영화(映畫) 데이터 화면(畫面)에 그리기
    - console.log()함수(函數)로 영화(映畫) 데이터 출력(出力)
    - 객체(客體)에 있는 movie키에 접근(接近)
    - movies state에 영화(映畫) 데이터 저장(貯藏)
    - isLoading state를 true에서 false로 업데이트

- Movie 컴포넌트 작성(作成)
    - Movie 컴포넌트는 state가 필요(必要)하지 않으므로 클래스형(型) 컴포넌트가 아닌 함수형(函數型) 컴포넌트로 작성(作成)
    - Movie에 넘어와야 하는 영화(映畫) 데이터를 정의(定義)하고 관리(管理)하기 위해 prop-types를 사용(使用)

- Movie.propTypes 작성(作成)
    - id는 자료형(資料型)이 Number이고 필(必)히 있어야 하니까 PropTypes.number.isRequired로 작성(作成)
    - year、title、summary、poster도 각각(各々) Movie.propTypes에 추가(追加)

- 노마드 코더 영화(映畫) API 정렬기능(整列機能) 사용(使用)

- axios.get() 수정(修正)
    - axios.get()에 yts-proxy.now.sh/list_movies.json?sort_by=rating을 전달(傳達)
    - 평점(評點) 내림차순(次順)으로 영화(映畫) 데이터를 가져올 수 있게 되었음


# [9月29日]

# 학습내용(學習內容)

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

# [9月15日]

# 학습내용(學習內容)
- props의 개념(概念)
- props로 컴포넌트에 데이터 전달(傳達)
- map() 함수(函數)의 사용(使用)

# [9月8日]

# 학습내용(學習內容)
- commit
- React 앱 동작(動作) 및 실행(實行)
- Component 작성(作成) 및 사용(使用)
- JSX