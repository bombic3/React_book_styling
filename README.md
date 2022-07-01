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

### Sass란

- Sass(Syntactically Awesome Style Sheets)(문법적으로 매우 멋진 스타일시트)
- CSS 전처리기로 복잡한 작업 쉽게 가능
- 스타일 코드의 재활용성과 코드의 가독성 높아 유지 보수 수월
- .scss / .sass 확장자 두 가지 문법 다름
  - .scss : 기존 css 문법과 비슷
  - .sass : {} ; 사용 안 함

### .sass

- {} ; 사용 안 함

```sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
	font: 100% $font-stack
	color: $primary-color
```

### .scss - 더 많이 사용됨

- 기존 css 문법과 비슷

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
	font: 100% $font-stack
	color: $primary-color
}
```

---

```jsx
$ yarn add sass
```

- 변수 사용하기
- 믹스인 만들기(재사용되는 스타일 블록을 함수처럼 사용할 수 있음)

SassComponent.scss

```scss
// Sass란
// - Sass(Syntactically Awesome Style Sheets)(문법적으로 매우 멋진 스타일시트)
// - CSS 전처리기로 복잡한 작업 쉽게 가능
// - 스타일 코드의 재활용성과 코드의 가독성 높아 유지 보수 수월
// - .scss / .sass 확장자 두 가지 문법 다름
//     - .scss : 기존 css 문법과 비슷
//     - .sass : {} ; 사용 안 함
//------------------------------------------
// 변수 사용하기
$red: #fa5252;
$orange: #fd7e14;
$yellow: #fcc419;
$green: #40c057;
$blue: #339af0;
$indigo: #5c7cfa;
$violet: #7950f2;
// 믹스인 만들기(재사용되는 스타일 블록을 함수처럼 사용할 수 있음)
@mixin square($size) {
  $calculated: 32px * $size;
  width: $calculated;
  height: $calculated;
}

.SassComponent {
  display: flex;
  .box {
    // 일반 CSS에서는 .SassComponent .box
    background: red;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &.red {
      // .red 클래스가 .box와 함께 사용되었을 때
      background: $red;
      @include square(1);
    }
    &.orange {
      background: $orange;
      @include square(2);
    }
    &.yellow {
      background: $yellow;
      @include square(3);
    }
    &.green {
      background: $green;
      @include square(4);
    }
    &.blue {
      background: $blue;
      @include square(5);
    }
    &.indigo {
      background: $indigo;
      @include square(6);
    }
    &.violet {
      background: $violet;
      @include square(7);
    }
    &:hover {
      background: black;
    }
  }
}
```

SassComponent.js

```jsx
import "./SassComponent.scss";

const SassComponent = () => {
  return (
    <div className="SassComponent">
      <div className="box red" />
      <div className="box orange" />
      <div className="box yellow" />
      <div className="box green" />
      <div className="box blue" />
      <div className="box indigo" />
      <div className="box violet" />
    </div>
  );
};

export default SassComponent;
```

App.js

```jsx
import React, { Component } from "react";
import SassComponent from "./SassComponent";

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
      </div>
    );
  }
}

export default App;
```

---

### 9.2.1 utils 함수 분리하기

- 여러 파일에서 사용될 수 있는 Sass 변수 및 믹스인은 다른 파일로 따로 분리

```scss
@import "./styles/utils.scss";
```

./styles/utils.scss

```scss
// 변수 사용하기
$red: #fa5252;
$orange: #fd7e14;
$yellow: #fcc419;
$green: #40c057;
$blue: #339af0;
$indigo: #5c7cfa;
$violet: #7950f2;
// 믹스인 만들기(재사용되는 스타일 블록을 함수처럼 사용할 수 있음)
@mixin square($size) {
  $calculated: 32px * $size;
  width: $calculated;
  height: $calculated;
}
```

---

### 9.2.2 @import ‘../../../styles/utils’; - sass-loader 설정 커스터 마이징

- create-react-app으로 마든 프로젝트는 프로젝트 구조의 복잡도를 낮추기 위해 세부 설정이 숨겨져 있음
- 해당 프로젝트 디렉터리에서 yarn eject 명령어 실행 → 세부 설정 밖으로 꺼내 주기 (커밋 push 후)

> $ yarn eject

1. 프로젝트 디렉터리/config/webpack.config.js 들어가기
2. sassRegex 키워드 찾기
3. use 안의 ‘sass-loader’ 지우기
4. use ( … )**.concat** ~ 추가하기
5. 저장 후 서버 껐다 키기
6. @import ‘utils.scss’; 추가하기(utils.scss 사용하는 컴포넌트들에)

```jsx
{
              test: **sassRegex**,
              exclude: sassModuleRegex,
              **use**: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  modules: {
                    mode: 'icss',
                  },
                },
              **// 'sass-loader'**
              ).**concat({
                loader: require.resolve('sass-loader'),
                options: {
                  sassOptions: {
                  includePaths: [paths.appSrc + '/styles'],
                  },
                }
              }),**
              sideEffects: true,
            },
```

---

@import ‘utils.scss’; 매번 넣지 말고 옵션 수정

1. 조금 전 추가했던 코드에 sass-loader의 옵션 additionalData 추가

   - Sass 파일 불러올 때마다 코드의 맨 윗부분에 특정 코드 포함시켜줌
   - 이렇게 하면 모든 scss 파일에서 utils.scss 자동으로 불러줌

   ```jsx
   {
                 test: sassRegex,
                 exclude: sassModuleRegex,
                 use: getStyleLoaders(
                   {
                     importLoaders: 3,
                     sourceMap: isEnvProduction
                       ? shouldUseSourceMap
                       : isEnvDevelopment,
                     modules: {
                       mode: 'icss',
                     },
                   },
                 // 'sass-loader'
                 ).concat({
                   loader: require.resolve('sass-loader'),
                   options: {
                     sassOptions: {
                     includePaths: [paths.appSrc + '/styles'],
                     },
   									**additionalData: `@import 'utils';`**
                   }
                 }),
                 sideEffects: true,
               },
   ```

---

### 9.2.3 node_modules 에서 라이브러리 불러오기

- Sass의 장점 중 하나는 라이브러리를 쉽게 불러와서 사용할 수 있다는 것
- yarn 을 통해 설치한 라이브러리를 사용하는 가장 기본적인 방법
  - 상대 경로를 사용하여 node_modules까지 들어가서 불러오는 방법
  > @import ‘../../../node_modules/library/styles’;
  - 같은 방법 ~ 로 함축
  - 물결 문자를 사용하면 자동으로 node_modules에서 라이브러리 디렉터리를 탐지하여 스타일을 불러 올 수 있음
  > @import ‘~library/styles’;
  ***
  - 반응형 디자인을 쉽게 만들어 주는
    → include-media
    [include.media - Your larger context](https://www.include.media/)
  - 편리한 색상 팔레트
    → open-color
    [](https://www.npmjs.com/package/open-color)
  ***
  1. $ yarn add open-color include-media 명령어 입력하여 설치

     > $ yarn add open-color include-media

  2. utils.scss 파일 열고 물결표시 사용하여 라이브러리 불러오기

     - Sass 라이브러리 불러올 때는 node_modules 내부 라이브러리 경로 안에 들어 잇는 scss 파일 불러와야 함
     - 보통 css 파일 경로가 어디 위치하고 있는지 라이브러리 공식 메뉴얼에서 안 알려줌
     - 직접 경로로 들어가서 확인해야 함

     ```scss
     @import "~include-media/dist/include-media";
     @import "~open-color/open-color";
     ```

  3. SassComponent.scss 파일 수정

     ```scss
     .SassComponent {
       display: flex;
       **background: $oc-gray-2;
       @include media('<768px') {
         background: $oc-gray-9;
       }**
     	(...)
     ```

     → SassComponent의 배경색을 open-colors 팔레트 라이브러리에서 불러온 색으로 가로 크기에 따라 (768px) 바꿔줌

---

## 9.3 CSS Module - 고민 필요 X

- 스타일 작성 시 CSS 클래스가 다른 CSS 클래스의 이름과 절대 충돌하지 않도록 파일마다 고유한 이름을 자동으로 생성해주는 옵션
- [파일이름]_[클래스이름]_[해시값] 형태로 자동으로 만들어서 스타일 클래스 이름 중첩 방지(고민필요X)
- 구버전(v1) 웹팩에서 css-loader 설정 별도 필요
- 현버전(v2이상) .module.css 확장자로 파일 저장

CSSModule.module.css

```css
/* 자동으로 고유해지므로
흔히 사용되는 단어를 클래스 이름으로 마음대로 사용 가능 */

.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
}

/* 특정 클래스가 웹 페이지에서 전역적으로 사용되는 경우
글로벌 CSS 작성 */

:global .something {
  font-weight: 800;
  color: aqua;
}
```

CSSModule.js

```jsx
import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
		**// 엘리먼트에 className={styles.클래스이름}
    // :global은 그냥 문자열로 넣어줌**
    <div **className={styles.wrapper}**>
      안녕하세요. 예쁘고 편리한 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

App.js

```jsx
import React, { Component } from "react";
import CSSModule from "./CSSModule";

class App extends Component {
  render() {
    return (
      <div>
        <CSSModule />
      </div>
    );
  }
}

export default App;
```

---

- 클래스 여러개 넣어줄 때 백틱으로 감싸써 리터럴해주기 '${} ${}'
- 또는 className={[styles.wrapper, styles.inverted].join(' ')}
- <div className={`${styles.wrapper} ${styles.inverted}`}>

CSSModule.js

```jsx
import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
    // 엘리먼트에 className={styles.클래스이름}
    // :global은 그냥 문자열로 넣어줌
    **// 클래스 여러개 넣어줄 때 백틱으로 감싸써 리터럴해주기 '${} ${}'
    // 또는 className={[styles.wrapper, styles.inverted].join(' ')}
    // <div className={`${styles.wrapper} ${styles.inverted}`}>**
    **<div className={[styles.wrapper, styles.inverted].join(' ')}>**
      안녕하세요. 예쁘고 편리한 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

CSSModule.module.css

```jsx
/* 자동으로 고유해지므로
흔히 사용되는 단어를 클래스 이름으로 마음대로 사용 가능 */

.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
}

**.inverted {
  color: black;
  background: white;
  border: 1px solid black;
}**

/* 특정 클래스가 웹 페이지에서 전역적으로 사용되는 경우
글로벌 CSS 작성 */

:global .something {
  font-weight: 800;
  color: aqua;
}
```

App.js

```jsx
import React, { Component } from "react";
import CSSModule from "./CSSModule";

class App extends Component {
  render() {
    return (
      <div>
        <CSSModule />
      </div>
    );
  }
}

export default App;
```

---

### 9.3.1 classnames

- classnames 라이브러리는 CSS 클래스를 조건부로 설정할 때 매우 유용
- CSS Module을 사용할 때 이 라이브러리를 사용하면 여러 클래스를 적용할 때 매우 편리
- classnames 라이브러리 설치
  > $ yarn add classnames
- classnames 간략 사용법 - 여러 가지 종류의 파라미터를 조합해 CSS 클래스를 설정 할 수 있다
  classnamesEx.js
  ```jsx
  // classnames 간략 사용법
  import classNames from "classnames";

  classNames("one", "two"); // = 'one two'
  classNames("one", { two: true }); // = 'one two'
  classNames("one", { two: false }); // = 'one'
  classNames("one", ["two", "three"]); // = 'one two three'

  const myClass = "hello";
  classNames("one", myClass, { myCondition: true });
  // = 'one hello mycondition'

  // 여러 가지 종류의 파라미터를 조합해 CSS 클래스를 설정 할 수 있다
  ```
- props 값에 따라 다른 스타일 주기 예시
  ```jsx
  // props 값에 따라 다른 스타일 주기
  const classnamesMycom = ({ highlighted, theme }) => (
    <div className={classNames("classnamesMycom", { highlighted }, theme)}>
      Hello
    </div>
  );

  // highlighted: true -> highlighted 클래스 적용
  // highlighted: false -> highlighted 클래스 적용 안 됨
  // 추가로 theme으로 전달받는 문자열은 내용 그대로 클래스에 적용
  ```

### CSS Module과 classnames 함께 사용하기 - bind 함수 사용 cx(’클래스이름’,’클래스이름2)

- classnames에 내장되어 있는 bind 함수 사용하면 styles.[클래스이름] 써줄 필요 X
- 사전에 미리 styles에서 받아 온 후 사용하게끔 설정하고
- cx(’클래스 이름’, ‘클래스 이름2’) 형태로 사용

CSSModule.js

```jsx
import classNames from 'classnames';
**import styles from './CSSModule.module.css';
// CSS Module과 classnames 함께 사용하기
// - classnames에 내장되어 있는 bind 함수 사용하면 styles.[클래스이름] 써줄 필요 X
// - 사전에 미리 styles에서 받아 온 후 사용하게끔 설정하고
// - cx(’클래스 이름’, ‘클래스 이름2’) 형태로 사용
const cx = classNames.bind(styles);
// -> 미리 styles에서 클래스 받아 오도록 설정**

const CSSModule = () => {
  return (
    // 엘리먼트에 className={styles.클래스이름}
    // :global은 그냥 문자열로 넣어줌
    // 클래스 여러개 넣어줄 때 백틱으로 감싸써 리터럴해주기 '${} ${}'
    // 또는 className={[styles.wrapper, styles.inverted].join(' ')}
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    // <div className={[styles.wrapper, styles.inverted].join(' ')}>
    **<div className={cx('wrapper', 'inverted')}>**
      안녕하세요. 예쁘고 편리한 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

---

### 9.3.2 Sass와 함께 사용하기

- CSSModule.module.css → CSSModule.module.scss 확장자 바꾸고 코드 수정

CSSModule.module.scss

```scss
/* 자동으로 고유해지므로
흔히 사용되는 단어를 클래스 이름으로 마음대로 사용 가능 */

.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
  **// inverted가 .wrapper와 함게 사용되었을 때만 적용
  &.inverted {
    color: black;
    background: white;
    border: 1px solid black;
  }**
}

/* 특정 클래스가 웹 페이지에서 전역적으로 사용되는 경우
글로벌 CSS 작성 */

**:global {
  // :global {}로 감싸기
  .something {
    font-weight: 800;
    color: aqua;
  }
  // 쭉 다른 클래스 생성 가능
}**
```

CSSModule.js

```scss
import classNames from 'classnames';
import styles from '**./CSSModule.module.scss**';
// CSS Module과 classnames 함께 사용하기
// - classnames에 내장되어 있는 bind 함수 사용하면 styles.[클래스이름] 써줄 필요 X
// - 사전에 미리 styles에서 받아 온 후 사용하게끔 설정하고
// - cx(’클래스 이름’, ‘클래스 이름2’) 형태로 사용
const cx = classNames.bind(styles);
// -> 미리 styles에서 클래스 받아 오도록 설정

const CSSModule = () => {
  return (
    // 엘리먼트에 className={styles.클래스이름}
    // :global은 그냥 문자열로 넣어줌
    // 클래스 여러개 넣어줄 때 백틱으로 감싸써 리터럴해주기 '${} ${}'
    // 또는 className={[styles.wrapper, styles.inverted].join(' ')}
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    // <div className={[styles.wrapper, styles.inverted].join(' ')}>
    <div className={cx('wrapper', 'inverted')}>
      안녕하세요. 예쁘고 편리한 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

### 9.3.3 일반 .css/.scss 파일에서 전역(:global) 사용 = :local

```css
:local .wrapper {
  ...;
}
```

```scss
:local {
	.wrapper { ... }
}
```

---
