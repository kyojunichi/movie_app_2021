# 姜準一(강준일) 201840202


# [11月10日]

# 학습내용(學習內容)

## 영화(映畫) 제목(題目) 출력(出力)하기
- 우선(于先) 영화(映畫) 제목(題目)부터 출력(出力)할 것
- Movie 컴포넌트로부터 전달(傳達)받은 영화(映畫)데이터는 location.state에 들어 있음
- Detail.js 수정(修正)
```javascript
import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        return <span>{location.state.title}</span>;
    }
}

export default Detail;
```

## /movie-detail로 바로 이동(移動)하기
- 그런데 또 다시 /movie-detail로 바로 이동(移動)하면 오류(誤謬)가 발생(發生)
- componentDidMount() 생명주기함수(生命週期函數)에 작성(作成)한 리다이렉트 기능(機能)이 동작(動作)하고 있지 않기 때문
- Detail 컴포넌트의 실행(實行) 순서(順序) 때문에 location.state가 아까와 마찬가지로 undefined이기 때문

## location.state 확인(確認)하기
- location.state가 없으면 render()함수(函數)가 null을 반환(返還)하도록 수정(修正)
- Detail.js 수정(修正)
```javascript
import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;
```
- location.state가 없으면 render()함수(函數)가 null을 반환(返還)하도록 만들어서 문제(問題)없이 실행(實行)되도록 만들었음

## package.json 파일 수정(修正)하기
- 이제 영화(映畫)앱을 GitHub에 배포(配布)해 볼 것임
- GitHub 주소(住所)를 영화(映畫)앱이 인식(認識)할 수 있도록 package.json 파일을 열어 수정(修正)
- 계속(繼續)해서 scripts 키값으로 명령어(命令語)를 추가(追加)
- package.json 수정(修正)
```
{
  "name": "movie_app_2021",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.22.0",
    "gh-pages": "^3.2.3",
    "prop-types": "^15.7.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "homepage": "https://kyojunichi.github.io/movie_app_2021"
}
```

## 최종(最終)코드 GitHub에 업로드하기
- 이하(以下)의 명령어(命令語)를 입력(入力)하여 최종완성(最終完成)코드를 GitHub저장소(貯藏所)에 업로드
```
git add .
git commit -m "최종완성(最終完成)코드"
git push origin master
```

## gh-pages 설치(設置)하기
- 최종완성(最終完成)코드를 GitHub저장소(貯藏所)에 업로드 후(後)
- 배포(配布)서비스를 이용(利用)해서 타인(他人)들이 영화(映畫)앱을 사용(使用)할 수 있도록 해야함
- GitHub에서 무료(無料)로 제공(提供)하는 GitHub Pages 서비스를 사용(使用)할 것임
- 이하(以下)의 명령어(命令語)를 입력(入力)하여 gh-pages를 설치(設置)
```
npm install gh-pages
```

## GitHub저장소(貯藏所) 재차(再次) 확인(確認)하기
- 이하(以下)의 명령어(命令語)를 입력(入力)하면 업로드한 GitHub저장소(貯藏所)의 주소(住所)를 확인(確認)할 수 있다
```
git remote -v
```

## 영화(映畫)앱 GitHub에 배포(配布)하기
- 터미널에서 이하(以下)의 명령어(命令語)를 입력(入力)하여 영화(映畫)앱을 배포(配布)
```
npm run deploy
```

## GitHub Pages에 접속(接續)하여 영화(映畫)앱 확인(確認)하기
- url에 「　https://[GitHub계정(計定)].github.io/[저장소명(貯藏所名)]　」을 입력(入力)
- 그 후(後) GitHub에 배포(配布)한 영화(映畫)앱을 확인(確認)

# [11月3日]

# 학습내용(學習內容)

## Navigation 컴포넌트 위치(位置) 재차(再次) 확인(確認)하기
- 혹시(或是) 실수(失手)로 Navigation 컴포넌트를 HashRouter 바깥에 위치(位置)시켰는지 컴포넌트의 위치(位置)를 재차(再次) 확인(確認)

## Navigation 컴포넌트 스타일링하기
- components 폴더에 Navigation.css 파일을 생성(生成)
- 그 후(後) 이하(以下)와 같이 Navigation.css를 작성(作成)
```css
.nav {
    z-index: 1;
    position: fixed;
    top: 50px;
    left: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 10px 20px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    border-radius: 5px;
  }
  
  @media screen and (max-width: 1090px) {
    .nav {
      left: initial;
      top: initial;
      bottom: 0px;
      width: 100%;
    }
  }
  
  .nav a {
    text-decoration: none;
    color: #0008fc;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    font-weight: 600;
  }
  
  .nav a:not(:last-child) {
    margin-bottom: 20px;
  }
```
- Navigation.css 작성(作成) 후(後)、Navigation.js 수정(修正)
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
```

# 08-4 영화(映畫) 상세(詳細) 정보(情報) 기능(機能) 만들어 보기

## route props 관찰(觀察)하기
- 우선(于先) console.log()를 통(通)해 About으로 어떤 props가 넘어오는지 관찰(觀察)
```javascript
import React from "react";
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."
            </span>
            <span>- George Orwell, 1984</span>
        </div>
    );
}

export default About;
```

## route props에 데이터 담아 보내기
- route props에 데이터를 전송(傳送)하려면 Navigation 컴포넌트에 있는 Link 컴포넌트의 to props의 구조(構造)를 변경(變更)해야함。
- 이하(以下)와 같이 Navigation 컴포넌트 /about으로 전송(傳送)해주는 Link 컴포넌트의 to props를 수정(修正)
- Navigation.js 수정(修正)
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to={{ pathname: '/about', state: { fromNavigation: true }}}>About</Link>
    </div>
  );
}

export default Navigation;
```

## route props 재차(再次) 관찰(觀察)하기
- /about으로 이동(移動)한 다음 [Console] 탭에서 [location]을 확인(確認)
- state 키에서 우리가 전송(傳送)한 데이터를 확인(確認) 가능(可能)

## Navigation 컴포넌트 정리(整理)하기
- 직전(直前)까지 작성(作成)한 코드는 사용(使用)하지 않을 것
- 그러므로 Navigation 컴포넌트를 원상태(原狀態)로 복구(復舊)
- Navigation.js 수정(修正)
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
```

## Movie 컴포넌트에 Link 컴포넌트 추가(追加)하기
- Movie 컴포넌트에 Link 컴포넌트를 임포트
- Link 컴포넌트에 to props를 작성(作成)
- Movie.js 수정(修正)
```javascript
import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/Movie-detail',
                    state: { year, title, summary, poster, genres },
                }}
            >
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => {
                            return(
                                <li key={index} className="movie__genre">
                                    {genre}
                                </li>
                            )
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
```

## Detail 컴포넌트 만들기
- Detail 컴포넌트를 routes 폴더에 추가(追加)
- Detail 컴포넌트에서 Movie 컴포넌트의 Link 컴포넌트가 전송(傳送)한 영화(映畫)데이터를 확인(確認)할 수 있도록 console.log()도 작성(作成)
- Detail.js 작성(作成)
```javascript
import React from "react";

function Detail(props) {
  console.log(props);
  return <span>hello</span>;
}

export default Detail;
```

## Route 컴포넌트 추가(追加)하기
- App.js를 연 후(後)、Detail 컴포넌트를 임포트
- Route 컴포넌트에서 Detail 컴포넌트를 그려주도록 코드를 작성(作成)
- App.js 수정(修正)
```javascript
import React from "react";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
```

## 영화(映畫)카드를 눌러 /movie-detail로 이동(移動)한 후(後) 영화(映畫) 데이터 확인(確認)하기
- 영화(映畫)카드를 눌러 /movie-detail로 이동(移動)
- 화면(畫面)을 보면 Detail 컴포넌트가 출력(出力)하고 있는 hello라는 문장(文章)이 보인다。
- [Console] 탭을 확인(確認)해보면 [location -> state]에 Movie 컴포넌트에서 Link 컴포넌트를 통(通)해 전송(傳送)해준 데이터가 들어 있다。

## /movie-detail로 직접(直接) 이동(移動)하기
- URL에 /movie-detail을 입력(入力)하여 직접(直接) 이동(移動)
- [Console]탭에 영화(映畫)데이터가 있는지 확인(確認)
- Detail 컴포넌트의 hello는 문제(問題)없이 출력(出力)
- 하지만 [Console]탭에는 영화(映畫)데이터가 없다。
- Detail 컴포넌트로 영화(映畫)데이터가 넘어오지 못한 것이다。
- 이러한 경우(境遇)에는 사용자(使用者)를 강제(強制)로 Home으로 돌려보내야 한다。
- 이러한 기능(機能)을 리다이렉트 기능(機能)라고 한다。

# 08-5 리다이렉트 기능(機能) 만들어 보기

## history 키 관찰(觀察)하기
- 주소창(住所窓)에 localhost:3000를 입력(入力)하여 이동(移動)
- 임의(任意)의 영화(映畫)카드를 눌러 이동(移動)
- [Console]탭에서 [history]에 출력(出力)된 값을 펼쳐서 관찰(觀察)
- 지정(指定)한 URL로 보내주는 push()함수(函數)를 사용(使用)할 것이다。

## Detail 컴포넌트 클래스형(型) 컴포넌트로 변경(變更)하기
- Detail 컴포넌트를 함수형(型)에서 클래스형(型) 컴포넌트로 변경(變更)
- 그 후(後) location, history 키를 구조분해할당(構造分解割當)
- Detail.js 수정(修正)
```javascript
import React from "react";

class Detail extends React.Component {
    componentDidMount() {
      const { location, history } = this.props;
    }

    render() {
      return <span>hello</span>;
    }
}

export default Detail;
```

## push()함수(函數) 사용(使用)하기
- location.state가 undefined인 경우(境遇) history.push("/")를 실행(實行)하도록 코드를 작성(作成)
- Detail.js 수정(修正)
```javascript
import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        return <span>hello</span>;
    }
}

export default Detail;
```

## 리다이렉트 기능(機能) 확인(確認)해 보기
- 영화(映畫)앱을 실행(實行)한 후(後) 직접(直接) 주소(住所)를 입력(入力)하여 /movie-detail으로 이동(移動)
- 그러면 다시 Home으로 돌아오게 된다。

# [10月27日]

# 학습내용(學習內容)

## li 엘리먼트에 key props 추가(追加)하기
- 그런데 genre에는 key값으로 사용(使用)하기에 적당(適當)한 id값 같은 것이 없음。
- 이럴 경우(境遇) 새롭게 만들어 내야 하는데、map()함수(函數)에는 2번(繁)째 매개변수(媒介變數)를 지정(指定)할 경우(境遇) 배열(配列)의 index 값을 반환(返還)해 주는 기능(機能)이 있다。
- 이것을 이용(利用)해서 배열(配列)의 인덱스를 key props로 활용(活用)하는 것이다。
- console을 확인(確認)해 본다。
- Movie.js 수정(修正)
```javascript
<ul className="movie__genres">
    {genres.map((genre, index) => {
        return(
            <li key={index} className="movie__genre">
                 {genre}
            </li>
        )
    })}
</ul>
```

# 07-2 영화(映畫) 앱 멋지게 스타일링하기

## App.css 파일 수정(修正)하기
- 사이트 전체(全體)에서 사용(使用)할 기본적(基本的)인 글꼴、배경(背景) 등(等)을 설정(設定)한다。
- App.css 수정(修正)
```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #eff3f7;
    height: 100%;
}
```

## Movie.css 파일 수정(修正)하기
- 계속(繼續)하여 Movie.css파일을 수정(修正)
- Movie.css 수정(修正)
```css
.movies .movie {
    background-color: white;
    margin-bottom: 70px;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
}

.movies .movie a {
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 2fr;
    grid-gap: 20px;
    text-decoration: none;
    color: inherit;
}

.movie img {
    position: relative;
    top: -50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}

.movie .movie__title,
.movie .movie__year {
    margin: 0;
    font-weight: 300;
}

.movie .movie__title {
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
}

.movie .movie__genres {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0px;
}

.movie__genres li,
.movie .movie__year {
    margin-right: 10px;
    font-size: 14px;
}
```

## 시놉시스 180자(字)로 제한(制限)하기
- 자바스크립트의 slice함수(函數)를 이용(利用)하여 구현(具現)한다。
- Movie.js 수정(修正)
```javascript
<p className="movie__summary">{summary.slice(0, 180)}...</p>
```

## 영화(映畫) 앱 제목(題目) 관찰(觀察)하기
- 현재(現在) 영화(映畫) 앱의 제목(題目)은 create-react-app에서 지정(指定)한 기본(基本)값인 React App으로 설정(設定)되어있음。

## 영화(映畫) 앱 제목(題目) 변경(變更)
- public폴더의 index.html에서 title을 수정(修正)
- index.html 수정(修正)
```html
<title>Movie App</title>
```

# 08-1 react-router-dom 설치(設置)하고 프로젝트 폴더 정리(整理)하기

## react-router-dom 설치(設置)하기
- react-router-dom 패키지를 설치(設置)
- 하단(下段)에 작성(作成)되어있는 코드를 명령(命令)프롬프트에 입력(入力)
```
> npm install react-router-dom
```

## components 폴더에 Movie 컴포넌트 옮기기
- src폴더 內에 components폴더를 생성(生成)하고 Movie컴포넌트들을 이동(移動)

## routes 폴더에 라우터가 보여줄 화면(畫面) 작성(作成)하기
- src폴더 內에 routes폴더를 생성(生成)하고 Home.js와 About.js 파일 생성(生成)

## Home.js 수정(修正)하기
- App.js내용(內容)을 Home.js로 복사(複寫)하고 컴포넌트 이름을 Home으로 수정(修正)
- Home.css를 생성(生成)하고 Home.js에 import한다。
```javascript
import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
    …
}

export default Home;
```

## Home.css 작성(作成)하기
- Home.css파일을 작성(作成)
```css
.container {
    height: 100%;
    display: flex;
    justify-content: center;
}
  
.loader {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
}
.movies {
    display: grid;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    grid-gap: 100px;
    padding: 50px;
    width: 80%;
    padding-top: 70px;
}
  
@media screen and (max-width: 1090px) {
    .movies {
      grid-template-columns: 1fr;
      width: 100%;
    }
}
```

## App.js 수정(修正)하기
- App.js 내용(內容)을 Home.js로 복사(複寫)하고 컴포넌트명(名)을 Home으로 수정(修正)
- App.js 수정(修正)
```javascript
import React from "react";
import Home from "./routes/Home";
import './App.css';

function App() {
  return <Home />;
}

export default App;
```

# 08-2 라우터 만들어 보기

## HashRouter와 Route 컴포넌트 사용(使用)하기
- HashRouter와 Router컴포넌트 import한다。
- HashRouter컴포넌트가 Route컴포넌트를 감싸 반환(返還)하도록 App.js를 수정(修正)
- Home을 import했던 코드는 잠시(暫時) 지운다。
- Route에는 2가지 props를 전달(傳達)할 수 있다。하나는 URL을 위한 path props고、또 하나는 URL에 맞는 컴포넌트를 불러주기 위한 component props이다。
- App.js 수정(修正)
```javascript
import React from "react";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Route />
    </HashRouter>
  );
}

export default App;
```

## Route 컴포넌트에 path、component props 추가(追加)하기
- About 컴포넌트를 import한다。
- path、component props에 URL과 About컴포넌트를 전달(傳達)
- App.js 수정(修正)
```javascript
import React from "react";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';

function App() {
  return (
    <HashRouter>
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

## About.js 수정(修正)하기
- About.js의 내용(內容)이 비어 있으니 간단(簡單)하게 채우자。
- About.js 수정(修正)
```javascript
import React from "react";

function About() {
    return <span>About this page: I built it because I love movies.</span>;
}

export default About;
```

## 라우터 테스트해 보기
- localhost:3000/#에 path props로 전달(傳達)했던 값 /about을 붙여 다시 접속(接屬)
- URL은 localhost:3000/#/about이고、액션3에서 작성(作成)했던 내용(內容)이 출력(出力)
- 이것은 Route 컴포넌트에 전달(傳達)한 path props를 보고 component props에 지정(指定)한 About 컴포넌트를 그려 준 것이다。

## Home 컴포넌트를 위(爲)한 Route컴포넌트 추가(追加)하기
- App컴포넌트에 Home컴포넌트를 import하고、또 다른 Route컴포넌트를 추가(追加)
- path props를 「/」 으로 입력(入力)한 이유(理由)는 localhost:3000에 접속(接屬)하면 기본(基本)으로 보여줄 컴포넌트를 Home 컴포넌트로 하기 위해서이다。
- App.js 수정(修正)
```javascript
import React from "react";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

## 라우터 테스트하고 문제(問題) 찾아보기
- localhost:3000에 접속(接屬)하면 주소(住所) 뒤에 자동(自動)으로 /#/가 붙으면서 영화(映畫) 앱 화면(畫面)이 나타난다。
- 금번(今番)에는 /about에도 접속(接屬)해 본다。당연(當然)히 About컴포넌트만 출력(出力)되야 함에도、Movie컴포넌트가 함께 출력(出力)

## 라우터 자세(仔細)히 관찰(觀察)하기
- App컴포넌트에 라우터를 다음과 같이 구성(構成)
- App.js 수정(修正)
```javascript
import React from "react";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>Introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
    </HashRouter>
  );
}

export default App;
```

## 라우터 다시 테스트해 보기
- /home에 접속(接屬)하면 문제(問題)가 없어 보이지만、/home/introduction에 접속(接屬)하면 Home이 함께 나오는 문제(問題)는 여전(如前)
- 라우터는 사용자(使用者)가 /home/introduction에 접속(接屬)하면 /、/home、/home/introduction 순서(順序)로 path props가 있는지를 찾는다。그런데 이들 모드가 path props를 가지고 있기 때문에 introduction에 접속(接屬)하면 이 모든 것이 보이는 것
- 이와 같은 이유(理由)로 /about에 접속(接屬)하면 /、/about 순서(順序)로 path props를 찾기 때문에 Home과 About컴포넌트는 모두 출력(出力)되는 것

## App 다시 원래(元來)대로 복원(復元)하기
- App.js를 액션08에서 테스트했던 이전(以前) 상태(狀態)로 복원(復元)
- App.js 수정(修正)
```javascript
import React from "react";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

## Route 컴포넌트에 exact props 추가(追加)해 보기
- path props가 "/" 인 Route컴포넌트에 exact={true}를 추가(追加)
- App.js 수정(修正)
```javascript
import React from "react";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

## About.css 작성(作成)하기
- route폴더 內에 About.css파일을 생성(生成)하고、css코드를 작성(作成)
- About.js에 About.css를 import하고、적용(適用)할 수 있도록 내용(內容)도 수정(修正)
- About.css 작성(作成)
```css
.about__container {
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
      0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    margin: 0 auto;
    margin-top: 100px;
    width: 100%;
    max-width: 400px;
    font-weight: 300;
  }
  
  .about__container span:first-child {
    font-size: 20px;
  }
  .about__container span:last-child {
    display: block;
    margin-top: 10px;
  }
```

## About.js 수정(修正)하기
- About.js에 About.css를 import
- 적용(適用)할 수 있도록 내용(內容)도 수정(修正)
- About.js 수정(修正)
```javascript
import React from "react";
import './About.css';

function About() {
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."
            </span>
            <span>- George Orwell, 1984</span>
        </div>
    );
}

export default About;
```

# 08-3 내비게이션 만들어 보기

## Navigation 컴포넌트 작성(作成)
- Home과 About이라는 2개(個)의 버튼을 생성(生成)하고、각각(各々)의 버튼을 눌렀을 때 해당(該當) 화면(畫面)이 보이도록 할 것이다。
- 먼저 components폴더 內에 Navigation.js파일을 생성(生成)하고、2개(個)의 a 태그를 반환(返還)하도록 작성(作成)
- Navigation.js 작성(作成)
```javascript
import React from 'react';

function Navigation() {
  return (
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </div>
  );
}

export default Navigation;
```

## Navigation 컴포넌트 App 컴포넌트에 포함(包含)시키기
- App컴포넌트에 Navigation을 import시키고、<HashRoute>에서 불러오게 한다。
- 앱을 실행(實行)하면 Navigation이 출력(出力)되는 것을 확인(確認) 가능(可能)
- App.js 수정(修正)
```javascript
import React from "react";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

## Home링크 눌러 보기
- Home링크를 눌러본다。
- 링크를 클릭할 때마다 리액트가 죽고、새 페이지가 열리는 문제(問題)가 발생(發生)
- 원인(原因)은 a태그의 href속성(屬性)이 페이지 전체(全體)를 다시 그리는 성질(性質)을 가지고 있기 때문이다。
- 이대로라면 필요(必要)한 부분(部分)만 다시 그려주는 리액트를 써야할 이유(理由)가 없다。
- 이 문제(問題)를 해결(解決)하려면 react-router-dom의 Link컴포넌트를 사용(使用)하면 된다。

## a 엘리먼트를 Link 컴포넌트로 변경(變更)하기
- Navigation컴포넌트에 Link컴포넌트를 import하고 a태그를 Link컴포넌트로 변경(變更)
- href속성(屬性)은 to로 수정(修正)
- 앱을 실행(實行)하고 링크를 클릭해 본다。페이지 전체(全體) 문제(問題)가 해결(解決)된 것을 확인(確認) 가능(可能)
- Navigation.js 수정(修正)
```javascript
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
```


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