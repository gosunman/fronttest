# Develop Diary

#### develop diary

- React의 작동 원리

1. react는 public/index.html을 렌더한다
2. index.html의 body에는 <div id="root"></div> 하나만 존재한다
3. 그렇기 때문에 src/index.js를 보면 ReactDOM.render(<App />, document.getElementById("root")); 명령어로 body를 구현하고 있다
4. 이는 다시 app.js의 컴포넌트 하나를 렌더링 하고 있는 것이다

- React의 리렌더링 조건

1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 컴포넌트가 리렌더링 될 때
4. this.forceUpdate로 강제로 리렌더링을 시킬 때

- HashRouter vs BrowserRouter

1. HashRouter는 서버와 소통 없이 작동한다..?

- Apollo를 이용해 API 쓰는 법

1.  Apollo는 index.js 최상단에 위치시켜 사용한다
2.  Clinet를 통해 uri를 설정하면 server graphql을 쓸 수 있고,
3.  clientState를 설정하면 local api를 쓸 수 있다

4.  useMutatin에서 update는? result 값을 얻는 방법!!

- styled-componets 를 이용해 컴포넌트 디자인 하는 법

1. const [컴포넌트 이름] = styled.[DOM element 이름]`[css 설정]`
2. return(<컴포넌트 이름></컴포넌트 이름>)

- 이벤트 지정하기

1. 특징

- 이벤트 이름은 카멜 표기법으로
- 함수를 전달해야한다
- DOM 요소에만 이벤트 설정이 가능하다
- object의 키 값으로 변수를 전달하고 싶을 때는 대괄호를 사용
- e.preventDefault()를 하면 페이지 새로고침을 하지 않는다

- setTimeout(()=> "a", 3000)
- {true && <div>true</div>}
- {false && <div>false</div>}

#### dependencies

1. styled-components

- 가장 최근에 개발되어 널리 채택된 css 방식
- js 파일 내부에 css 명령어를 삽입하여 css 파일을 별도로 만들 필요가 없다
- App.js 에 ThemeProvider를 최상위 컴포넌트로 삽입한다
- ThemeProvider의 property로 Theme을 추가한다

2. react-router-dom
3. graphql
4. react-apollo-hooks
5. apollo-boost
6. react-helmet
7. styled-reset
8. react-toastify

- popup 경고창 띄워주는 라이브러리

- GlobalStyles를 app.js에 컴포넌트로 삽입해두어야 body 태그 전체의 margin이나 padding을 조정할 수 있다

- 4장 5강
- 5장 8강
- 6장 3강
- 7장 7강
- 8장 5강
- 9장 3강
