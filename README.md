# \***\*[ 📘 리액트를 다루는 기술 2]\*\***

---

# 9장 컴포넌트 스타일링

## 스타일링 방식 4가지

- CSS : 컴포넌트를 스타일링 하는 가방 기본 방식
- Sass : 자주 사용되는 CSS 전처리기(pre-processor) 중 하나로 확장된 CSS 문법 사용하여 CSS 코드 더욱 쉽게 작성
- CSS Module : 스타일 작성 시 CSS 클래스가 다른 CSS 클래스의 이름과 절대 충돌하지 않도록 파일마다 고유한 이름을 자동으로 생성해주는 옵션
- styled-components : 스타일을 자바스크립트 파일에 내장시키는 ㄴ방식. 스타일을 작성함과 동시에 해당 스타일이 적용된 컴포넌트를 만들 수 있게 해줌

```jsx
$ yarn create react-app styling-react
$ cd styling-react
$ yarn start
```

---

## 9.1 일반 CSS - 가장 흔한 방식

### CSS 작성 시 클래스 중복X 2가지 방식

- CSS를 작성할 때 가장 중요한 점은 CSS 클래스를 중복되지 않게 만드는 것
- CSS 클래스가 중복되는 것을 방지하는 여러가지 방식 중 두 가지
  1. 특별한 규칙을 사용하여 이름 짓기
  2. CSS Selector 활용하기

---

### 9.1.1 이름 짓는 규칙

- 클래스 이름 : 컴포넌트 이름-클래스 형태 (ex. App-header)
  - 클래스 이름에 컴포넌트 이름 포함시켜 중복 방지
- BEM 네이밍(BEM Naming) (ex. .card\_\_title-primary)
  - 일종의 규칙을 준수하여 해당 클래스가 어디에서 어떤 용도로 사용되는지 명확하게 작성하는 방식

---

### 9.1.2 CSS Seletor

- CSS 클래스가 특정 클래스 내부에 있는 경우에만 스타일 적용 (ex. .App .logo)
  App.js

```jsx
import logo from "./logo.svg";
import "./App.css";
// CSS Seletor 사용하여 스타일링하기
function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

App.css

```jsx
/* CSS Seletor 사용하여 스타일링하기 */
.App {
  text-align: center;
}

/*  .App 안에 들어 있는 .logo */
.App .logo {
  height: 40vmin;
  animation: App-logo-spin infinite 20s linear;
}

/* .App 안에 들어 있는 header 태그 */
.App header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

/* .App 안에 들어 있는 a 태그 */
.App a {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

---

## 9.2 Sass 사용하기
