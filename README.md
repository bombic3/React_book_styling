# \***\*[Β πΒ λ¦¬μ‘νΈλ₯Ό λ€λ£¨λ κΈ°μ  2]\*\***

---

# 9μ₯ μ»΄ν¬λνΈ μ€νμΌλ§

## μ€νμΌλ§ λ°©μ 4κ°μ§

- CSS : μ»΄ν¬λνΈλ₯Ό μ€νμΌλ§ νλ κ°λ°© κΈ°λ³Έ λ°©μ
- Sass : μμ£Ό μ¬μ©λλ CSS μ μ²λ¦¬κΈ°(pre-processor) μ€ νλλ‘ νμ₯λ CSS λ¬Έλ² μ¬μ©νμ¬ CSS μ½λ λμ± μ½κ² μμ±
- CSS Module : μ€νμΌ μμ± μ CSS ν΄λμ€κ° λ€λ₯Έ CSS ν΄λμ€μ μ΄λ¦κ³Ό μ λ μΆ©λνμ§ μλλ‘ νμΌλ§λ€ κ³ μ ν μ΄λ¦μ μλμΌλ‘ μμ±ν΄μ£Όλ μ΅μ
- styled-components : μ€νμΌμ μλ°μ€ν¬λ¦½νΈ νμΌμ λ΄μ₯μν€λ γ΄λ°©μ. μ€νμΌμ μμ±ν¨κ³Ό λμμ ν΄λΉ μ€νμΌμ΄ μ μ©λ μ»΄ν¬λνΈλ₯Ό λ§λ€ μ μκ² ν΄μ€

```jsx
$ yarn create react-app styling-react
$ cd styling-react
$ yarn start
```

---

## 9.1 μΌλ° CSS - κ°μ₯ νν λ°©μ

### CSS μμ± μ ν΄λμ€ μ€λ³΅X 2κ°μ§ λ°©μ

- CSSλ₯Ό μμ±ν  λ κ°μ₯ μ€μν μ μ CSS ν΄λμ€λ₯Ό μ€λ³΅λμ§ μκ² λ§λλ κ²
- CSS ν΄λμ€κ° μ€λ³΅λλ κ²μ λ°©μ§νλ μ¬λ¬κ°μ§ λ°©μ μ€ λ κ°μ§
  1. νΉλ³ν κ·μΉμ μ¬μ©νμ¬ μ΄λ¦ μ§κΈ°
  2. CSS Selector νμ©νκΈ°

---

### 9.1.1 μ΄λ¦ μ§λ κ·μΉ

- ν΄λμ€ μ΄λ¦ : μ»΄ν¬λνΈ μ΄λ¦-ν΄λμ€ νν (ex. App-header)
  - ν΄λμ€ μ΄λ¦μ μ»΄ν¬λνΈ μ΄λ¦ ν¬ν¨μμΌ μ€λ³΅ λ°©μ§
- BEM λ€μ΄λ°(BEM Naming) (ex. .card\_\_title-primary)
  - μΌμ’μ κ·μΉμ μ€μνμ¬ ν΄λΉ ν΄λμ€κ° μ΄λμμ μ΄λ€ μ©λλ‘ μ¬μ©λλμ§ λͺννκ² μμ±νλ λ°©μ

---

### 9.1.2 CSS Seletor

- CSS ν΄λμ€κ° νΉμ  ν΄λμ€ λ΄λΆμ μλ κ²½μ°μλ§ μ€νμΌ μ μ© (ex. .App .logo)
  App.js

```jsx
import logo from "./logo.svg";
import "./App.css";
// CSS Seletor μ¬μ©νμ¬ μ€νμΌλ§νκΈ°
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
/* CSS Seletor μ¬μ©νμ¬ μ€νμΌλ§νκΈ° */
.App {
  text-align: center;
}

/*  .App μμ λ€μ΄ μλ .logo */
.App .logo {
  height: 40vmin;
  animation: App-logo-spin infinite 20s linear;
}

/* .App μμ λ€μ΄ μλ header νκ·Έ */
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

/* .App μμ λ€μ΄ μλ a νκ·Έ */
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

## 9.2 Sass μ¬μ©νκΈ°

# \***\*[Β πΒ λ¦¬μ‘νΈλ₯Ό λ€λ£¨λ κΈ°μ  2]\*\***

---

# 9μ₯ μ»΄ν¬λνΈ μ€νμΌλ§

## μ€νμΌλ§ λ°©μ 4κ°μ§

- CSS : μ»΄ν¬λνΈλ₯Ό μ€νμΌλ§ νλ κ°λ°© κΈ°λ³Έ λ°©μ
- Sass : μμ£Ό μ¬μ©λλ CSS μ μ²λ¦¬κΈ°(pre-processor) μ€ νλλ‘ νμ₯λ CSS λ¬Έλ² μ¬μ©νμ¬ CSS μ½λ λμ± μ½κ² μμ±
- CSS Module : μ€νμΌ μμ± μ CSS ν΄λμ€κ° λ€λ₯Έ CSS ν΄λμ€μ μ΄λ¦κ³Ό μ λ μΆ©λνμ§ μλλ‘ νμΌλ§λ€ κ³ μ ν μ΄λ¦μ μλμΌλ‘ μμ±ν΄μ£Όλ μ΅μ
- styled-components : μ€νμΌμ μλ°μ€ν¬λ¦½νΈ νμΌμ λ΄μ₯μν€λ γ΄λ°©μ. μ€νμΌμ μμ±ν¨κ³Ό λμμ ν΄λΉ μ€νμΌμ΄ μ μ©λ μ»΄ν¬λνΈλ₯Ό λ§λ€ μ μκ² ν΄μ€

```jsx
$ yarn create react-app styling-react
$ cd styling-react
$ yarn start
```

---

## 9.1 μΌλ° CSS - κ°μ₯ νν λ°©μ

### CSS μμ± μ ν΄λμ€ μ€λ³΅X 2κ°μ§ λ°©μ

- CSSλ₯Ό μμ±ν  λ κ°μ₯ μ€μν μ μ CSS ν΄λμ€λ₯Ό μ€λ³΅λμ§ μκ² λ§λλ κ²
- CSS ν΄λμ€κ° μ€λ³΅λλ κ²μ λ°©μ§νλ μ¬λ¬κ°μ§ λ°©μ μ€ λ κ°μ§
  1. νΉλ³ν κ·μΉμ μ¬μ©νμ¬ μ΄λ¦ μ§κΈ°
  2. CSS Selector νμ©νκΈ°

---

### 9.1.1 μ΄λ¦ μ§λ κ·μΉ

- ν΄λμ€ μ΄λ¦ : μ»΄ν¬λνΈ μ΄λ¦-ν΄λμ€ νν (ex. App-header)
  - ν΄λμ€ μ΄λ¦μ μ»΄ν¬λνΈ μ΄λ¦ ν¬ν¨μμΌ μ€λ³΅ λ°©μ§
- BEM λ€μ΄λ°(BEM Naming) (ex. .card\_\_title-primary)
  - μΌμ’μ κ·μΉμ μ€μνμ¬ ν΄λΉ ν΄λμ€κ° μ΄λμμ μ΄λ€ μ©λλ‘ μ¬μ©λλμ§ λͺννκ² μμ±νλ λ°©μ

---

### 9.1.2 CSS Seletor

- CSS ν΄λμ€κ° νΉμ  ν΄λμ€ λ΄λΆμ μλ κ²½μ°μλ§ μ€νμΌ μ μ© (ex. .App .logo)

App.js

```jsx
import logo from "./logo.svg";
import "./App.css";
// CSS Seletor μ¬μ©νμ¬ μ€νμΌλ§νκΈ°
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
/* CSS Seletor μ¬μ©νμ¬ μ€νμΌλ§νκΈ° */
.App {
  text-align: center;
}

/*  .App μμ λ€μ΄ μλ .logo */
.App .logo {
  height: 40vmin;
  animation: App-logo-spin infinite 20s linear;
}

/* .App μμ λ€μ΄ μλ header νκ·Έ */
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

/* .App μμ λ€μ΄ μλ a νκ·Έ */
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

## 9.2 Sass μ¬μ©νκΈ°

### Sassλ

- Sass(Syntactically Awesome Style Sheets)(λ¬Έλ²μ μΌλ‘ λ§€μ° λ©μ§ μ€νμΌμνΈ)
- CSS μ μ²λ¦¬κΈ°λ‘ λ³΅μ‘ν μμ μ½κ² κ°λ₯
- μ€νμΌ μ½λμ μ¬νμ©μ±κ³Ό μ½λμ κ°λμ± λμ μ μ§ λ³΄μ μμ
- .scss / .sass νμ₯μ λ κ°μ§ λ¬Έλ² λ€λ¦
  - .scss : κΈ°μ‘΄ css λ¬Έλ²κ³Ό λΉμ·
  - .sass : {} ; μ¬μ© μ ν¨

### .sass

- {} ; μ¬μ© μ ν¨

```sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
	font: 100% $font-stack
	color: $primary-color
```

### .scss - λ λ§μ΄ μ¬μ©λ¨

- κΈ°μ‘΄ css λ¬Έλ²κ³Ό λΉμ·

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

- λ³μ μ¬μ©νκΈ°
- λ―Ήμ€μΈ λ§λ€κΈ°(μ¬μ¬μ©λλ μ€νμΌ λΈλ‘μ ν¨μμ²λΌ μ¬μ©ν  μ μμ)

SassComponent.scss

```scss
// Sassλ
// - Sass(Syntactically Awesome Style Sheets)(λ¬Έλ²μ μΌλ‘ λ§€μ° λ©μ§ μ€νμΌμνΈ)
// - CSS μ μ²λ¦¬κΈ°λ‘ λ³΅μ‘ν μμ μ½κ² κ°λ₯
// - μ€νμΌ μ½λμ μ¬νμ©μ±κ³Ό μ½λμ κ°λμ± λμ μ μ§ λ³΄μ μμ
// - .scss / .sass νμ₯μ λ κ°μ§ λ¬Έλ² λ€λ¦
//     - .scss : κΈ°μ‘΄ css λ¬Έλ²κ³Ό λΉμ·
//     - .sass : {} ; μ¬μ© μ ν¨
//------------------------------------------
// λ³μ μ¬μ©νκΈ°
$red: #fa5252;
$orange: #fd7e14;
$yellow: #fcc419;
$green: #40c057;
$blue: #339af0;
$indigo: #5c7cfa;
$violet: #7950f2;
// λ―Ήμ€μΈ λ§λ€κΈ°(μ¬μ¬μ©λλ μ€νμΌ λΈλ‘μ ν¨μμ²λΌ μ¬μ©ν  μ μμ)
@mixin square($size) {
  $calculated: 32px * $size;
  width: $calculated;
  height: $calculated;
}

.SassComponent {
  display: flex;
  .box {
    // μΌλ° CSSμμλ .SassComponent .box
    background: red;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &.red {
      // .red ν΄λμ€κ° .boxμ ν¨κ» μ¬μ©λμμ λ
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

### 9.2.1 utils ν¨μ λΆλ¦¬νκΈ°

- μ¬λ¬ νμΌμμ μ¬μ©λ  μ μλ Sass λ³μ λ° λ―Ήμ€μΈμ λ€λ₯Έ νμΌλ‘ λ°λ‘ λΆλ¦¬

```scss
@import "./styles/utils.scss";
```

./styles/utils.scss

```scss
// λ³μ μ¬μ©νκΈ°
$red: #fa5252;
$orange: #fd7e14;
$yellow: #fcc419;
$green: #40c057;
$blue: #339af0;
$indigo: #5c7cfa;
$violet: #7950f2;
// λ―Ήμ€μΈ λ§λ€κΈ°(μ¬μ¬μ©λλ μ€νμΌ λΈλ‘μ ν¨μμ²λΌ μ¬μ©ν  μ μμ)
@mixin square($size) {
  $calculated: 32px * $size;
  width: $calculated;
  height: $calculated;
}
```

---

### 9.2.2 @import β../../../styles/utilsβ; - sass-loader μ€μ  μ»€μ€ν° λ§μ΄μ§

- create-react-appμΌλ‘ λ§λ  νλ‘μ νΈλ νλ‘μ νΈ κ΅¬μ‘°μ λ³΅μ‘λλ₯Ό λ?μΆκΈ° μν΄ μΈλΆ μ€μ μ΄ μ¨κ²¨μ Έ μμ
- ν΄λΉ νλ‘μ νΈ λλ ν°λ¦¬μμ yarn eject λͺλ Ήμ΄ μ€ν β μΈλΆ μ€μ  λ°μΌλ‘ κΊΌλ΄ μ£ΌκΈ° (μ»€λ° push ν)

> $ yarn eject

1. νλ‘μ νΈ λλ ν°λ¦¬/config/webpack.config.js λ€μ΄κ°κΈ°
2. sassRegex ν€μλ μ°ΎκΈ°
3. use μμ βsass-loaderβ μ§μ°κΈ°
4. use ( β¦ )**.concat** ~ μΆκ°νκΈ°
5. μ μ₯ ν μλ² κ»λ€ ν€κΈ°
6. @import βutils.scssβ; μΆκ°νκΈ°(utils.scss μ¬μ©νλ μ»΄ν¬λνΈλ€μ)

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

@import βutils.scssβ; λ§€λ² λ£μ§ λ§κ³  μ΅μ μμ 

1. μ‘°κΈ μ  μΆκ°νλ μ½λμ sass-loaderμ μ΅μ additionalData μΆκ°

   - Sass νμΌ λΆλ¬μ¬ λλ§λ€ μ½λμ λ§¨ μλΆλΆμ νΉμ  μ½λ ν¬ν¨μμΌμ€
   - μ΄λ κ² νλ©΄ λͺ¨λ  scss νμΌμμ utils.scss μλμΌλ‘ λΆλ¬μ€

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

### 9.2.3 node_modules μμ λΌμ΄λΈλ¬λ¦¬ λΆλ¬μ€κΈ°

- Sassμ μ₯μ  μ€ νλλ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ½κ² λΆλ¬μμ μ¬μ©ν  μ μλ€λ κ²
- yarn μ ν΅ν΄ μ€μΉν λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©νλ κ°μ₯ κΈ°λ³Έμ μΈ λ°©λ²

  - μλ κ²½λ‘λ₯Ό μ¬μ©νμ¬ node_modulesκΉμ§ λ€μ΄κ°μ λΆλ¬μ€λ λ°©λ²
    > @import β../../../node_modules/library/stylesβ;
  - κ°μ λ°©λ² ~ λ‘ ν¨μΆ
  - λ¬Όκ²° λ¬Έμλ₯Ό μ¬μ©νλ©΄ μλμΌλ‘ node_modulesμμ λΌμ΄λΈλ¬λ¦¬ λλ ν°λ¦¬λ₯Ό νμ§νμ¬ μ€νμΌμ λΆλ¬ μ¬ μ μμ
    > @import β~library/stylesβ;

  ***

  - λ°μν λμμΈμ μ½κ² λ§λ€μ΄ μ£Όλ
    β include-media
    [include.media - Your larger context](https://www.include.media/)
  - νΈλ¦¬ν μμ νλ νΈ
    β open-color
    [](https://www.npmjs.com/package/open-color)

  ***

  1. $ yarn add open-color include-media λͺλ Ήμ΄ μλ ₯νμ¬ μ€μΉ

     > $ yarn add open-color include-media

  2. utils.scss νμΌ μ΄κ³  λ¬Όκ²°νμ μ¬μ©νμ¬ λΌμ΄λΈλ¬λ¦¬ λΆλ¬μ€κΈ°

     - Sass λΌμ΄λΈλ¬λ¦¬ λΆλ¬μ¬ λλ node_modules λ΄λΆ λΌμ΄λΈλ¬λ¦¬ κ²½λ‘ μμ λ€μ΄ μλ scss νμΌ λΆλ¬μμΌ ν¨
     - λ³΄ν΅ css νμΌ κ²½λ‘κ° μ΄λ μμΉνκ³  μλμ§ λΌμ΄λΈλ¬λ¦¬ κ³΅μ λ©λ΄μΌμμ μ μλ €μ€
     - μ§μ  κ²½λ‘λ‘ λ€μ΄κ°μ νμΈν΄μΌ ν¨

     ```scss
     @import "~include-media/dist/include-media";
     @import "~open-color/open-color";
     ```

  3. SassComponent.scss νμΌ μμ 

     ```scss
     .SassComponent {
       display: flex;
       **background: $oc-gray-2;
       @include media('<768px') {
         background: $oc-gray-9;
       }**
     	(...)
     ```

     β SassComponentμ λ°°κ²½μμ open-colors νλ νΈ λΌμ΄λΈλ¬λ¦¬μμ λΆλ¬μ¨ μμΌλ‘ κ°λ‘ ν¬κΈ°μ λ°λΌ (768px) λ°κΏμ€

---

## 9.3 CSS Module - κ³ λ―Ό νμ X

- μ€νμΌ μμ± μ CSS ν΄λμ€κ° λ€λ₯Έ CSS ν΄λμ€μ μ΄λ¦κ³Ό μ λ μΆ©λνμ§ μλλ‘ νμΌλ§λ€ κ³ μ ν μ΄λ¦μ μλμΌλ‘ μμ±ν΄μ£Όλ μ΅μ
- [νμΌμ΄λ¦]_[ν΄λμ€μ΄λ¦]_[ν΄μκ°] ννλ‘ μλμΌλ‘ λ§λ€μ΄μ μ€νμΌ ν΄λμ€ μ΄λ¦ μ€μ²© λ°©μ§(κ³ λ―ΌνμX)
- κ΅¬λ²μ (v1) μΉν©μμ css-loader μ€μ  λ³λ νμ
- νλ²μ (v2μ΄μ) .module.css νμ₯μλ‘ νμΌ μ μ₯

CSSModule.module.css

```css
/* μλμΌλ‘ κ³ μ ν΄μ§λ―λ‘
νν μ¬μ©λλ λ¨μ΄λ₯Ό ν΄λμ€ μ΄λ¦μΌλ‘ λ§μλλ‘ μ¬μ© κ°λ₯ */

.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
}

/* νΉμ  ν΄λμ€κ° μΉ νμ΄μ§μμ μ μ­μ μΌλ‘ μ¬μ©λλ κ²½μ°
κΈλ‘λ² CSS μμ± */

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
		**// μλ¦¬λ¨ΌνΈμ className={styles.ν΄λμ€μ΄λ¦}
    // :globalμ κ·Έλ₯ λ¬Έμμ΄λ‘ λ£μ΄μ€**
    <div **className={styles.wrapper}**>
      μλνμΈμ. μμκ³  νΈλ¦¬ν <span className="something">CSS Module!</span>
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

- ν΄λμ€ μ¬λ¬κ° λ£μ΄μ€ λ λ°±ν±μΌλ‘ κ°μΈμ¨ λ¦¬ν°λ΄ν΄μ£ΌκΈ° '${} ${}'
- λλ className={[styles.wrapper, styles.inverted].join(' ')}
- <div className={`${styles.wrapper} ${styles.inverted}`}>

CSSModule.js

```jsx
import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
    // μλ¦¬λ¨ΌνΈμ className={styles.ν΄λμ€μ΄λ¦}
    // :globalμ κ·Έλ₯ λ¬Έμμ΄λ‘ λ£μ΄μ€
    **// ν΄λμ€ μ¬λ¬κ° λ£μ΄μ€ λ λ°±ν±μΌλ‘ κ°μΈμ¨ λ¦¬ν°λ΄ν΄μ£ΌκΈ° '${} ${}'
    // λλ className={[styles.wrapper, styles.inverted].join(' ')}
    // <div className={`${styles.wrapper} ${styles.inverted}`}>**
    **<div className={[styles.wrapper, styles.inverted].join(' ')}>**
      μλνμΈμ. μμκ³  νΈλ¦¬ν <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

CSSModule.module.css

```jsx
/* μλμΌλ‘ κ³ μ ν΄μ§λ―λ‘
νν μ¬μ©λλ λ¨μ΄λ₯Ό ν΄λμ€ μ΄λ¦μΌλ‘ λ§μλλ‘ μ¬μ© κ°λ₯ */

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

/* νΉμ  ν΄λμ€κ° μΉ νμ΄μ§μμ μ μ­μ μΌλ‘ μ¬μ©λλ κ²½μ°
κΈλ‘λ² CSS μμ± */

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

- classnames λΌμ΄λΈλ¬λ¦¬λ CSS ν΄λμ€λ₯Ό μ‘°κ±΄λΆλ‘ μ€μ ν  λ λ§€μ° μ μ©
- CSS Moduleμ μ¬μ©ν  λ μ΄ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©νλ©΄ μ¬λ¬ ν΄λμ€λ₯Ό μ μ©ν  λ λ§€μ° νΈλ¦¬
- classnames λΌμ΄λΈλ¬λ¦¬ μ€μΉ
  > $ yarn add classnames
- classnames κ°λ΅ μ¬μ©λ² - μ¬λ¬ κ°μ§ μ’λ₯μ νλΌλ―Έν°λ₯Ό μ‘°ν©ν΄ CSS ν΄λμ€λ₯Ό μ€μ  ν  μ μλ€
  classnamesEx.js

  ```jsx
  // classnames κ°λ΅ μ¬μ©λ²
  import classNames from "classnames";

  classNames("one", "two"); // = 'one two'
  classNames("one", { two: true }); // = 'one two'
  classNames("one", { two: false }); // = 'one'
  classNames("one", ["two", "three"]); // = 'one two three'

  const myClass = "hello";
  classNames("one", myClass, { myCondition: true });
  // = 'one hello mycondition'

  // μ¬λ¬ κ°μ§ μ’λ₯μ νλΌλ―Έν°λ₯Ό μ‘°ν©ν΄ CSS ν΄λμ€λ₯Ό μ€μ  ν  μ μλ€
  ```

- props κ°μ λ°λΌ λ€λ₯Έ μ€νμΌ μ£ΌκΈ° μμ

  ```jsx
  // props κ°μ λ°λΌ λ€λ₯Έ μ€νμΌ μ£ΌκΈ°
  const classnamesMycom = ({ highlighted, theme }) => (
    <div className={classNames("classnamesMycom", { highlighted }, theme)}>
      Hello
    </div>
  );

  // highlighted: true -> highlighted ν΄λμ€ μ μ©
  // highlighted: false -> highlighted ν΄λμ€ μ μ© μ λ¨
  // μΆκ°λ‘ themeμΌλ‘ μ λ¬λ°λ λ¬Έμμ΄μ λ΄μ© κ·Έλλ‘ ν΄λμ€μ μ μ©
  ```

### CSS Moduleκ³Ό classnames ν¨κ» μ¬μ©νκΈ° - bind ν¨μ μ¬μ© cx(βν΄λμ€μ΄λ¦β,βν΄λμ€μ΄λ¦2)

- classnamesμ λ΄μ₯λμ΄ μλ bind ν¨μ μ¬μ©νλ©΄ styles.[ν΄λμ€μ΄λ¦] μ¨μ€ νμ X
- μ¬μ μ λ―Έλ¦¬ stylesμμ λ°μ μ¨ ν μ¬μ©νκ²λ μ€μ νκ³ 
- cx(βν΄λμ€ μ΄λ¦β, βν΄λμ€ μ΄λ¦2β) ννλ‘ μ¬μ©

CSSModule.js

```jsx
import classNames from 'classnames';
**import styles from './CSSModule.module.css';
// CSS Moduleκ³Ό classnames ν¨κ» μ¬μ©νκΈ°
// - classnamesμ λ΄μ₯λμ΄ μλ bind ν¨μ μ¬μ©νλ©΄ styles.[ν΄λμ€μ΄λ¦] μ¨μ€ νμ X
// - μ¬μ μ λ―Έλ¦¬ stylesμμ λ°μ μ¨ ν μ¬μ©νκ²λ μ€μ νκ³ 
// - cx(βν΄λμ€ μ΄λ¦β, βν΄λμ€ μ΄λ¦2β) ννλ‘ μ¬μ©
const cx = classNames.bind(styles);
// -> λ―Έλ¦¬ stylesμμ ν΄λμ€ λ°μ μ€λλ‘ μ€μ **

const CSSModule = () => {
  return (
    // μλ¦¬λ¨ΌνΈμ className={styles.ν΄λμ€μ΄λ¦}
    // :globalμ κ·Έλ₯ λ¬Έμμ΄λ‘ λ£μ΄μ€
    // ν΄λμ€ μ¬λ¬κ° λ£μ΄μ€ λ λ°±ν±μΌλ‘ κ°μΈμ¨ λ¦¬ν°λ΄ν΄μ£ΌκΈ° '${} ${}'
    // λλ className={[styles.wrapper, styles.inverted].join(' ')}
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    // <div className={[styles.wrapper, styles.inverted].join(' ')}>
    **<div className={cx('wrapper', 'inverted')}>**
      μλνμΈμ. μμκ³  νΈλ¦¬ν <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

---

### 9.3.2 Sassμ ν¨κ» μ¬μ©νκΈ°

- CSSModule.module.css β CSSModule.module.scss νμ₯μ λ°κΎΈκ³  μ½λ μμ 

CSSModule.module.scss

```scss
/* μλμΌλ‘ κ³ μ ν΄μ§λ―λ‘
νν μ¬μ©λλ λ¨μ΄λ₯Ό ν΄λμ€ μ΄λ¦μΌλ‘ λ§μλλ‘ μ¬μ© κ°λ₯ */

.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
  **// invertedκ° .wrapperμ ν¨κ² μ¬μ©λμμ λλ§ μ μ©
  &.inverted {
    color: black;
    background: white;
    border: 1px solid black;
  }**
}

/* νΉμ  ν΄λμ€κ° μΉ νμ΄μ§μμ μ μ­μ μΌλ‘ μ¬μ©λλ κ²½μ°
κΈλ‘λ² CSS μμ± */

**:global {
  // :global {}λ‘ κ°μΈκΈ°
  .something {
    font-weight: 800;
    color: aqua;
  }
  // μ­ λ€λ₯Έ ν΄λμ€ μμ± κ°λ₯
}**
```

CSSModule.js

```scss
import classNames from 'classnames';
import styles from '**./CSSModule.module.scss**';
// CSS Moduleκ³Ό classnames ν¨κ» μ¬μ©νκΈ°
// - classnamesμ λ΄μ₯λμ΄ μλ bind ν¨μ μ¬μ©νλ©΄ styles.[ν΄λμ€μ΄λ¦] μ¨μ€ νμ X
// - μ¬μ μ λ―Έλ¦¬ stylesμμ λ°μ μ¨ ν μ¬μ©νκ²λ μ€μ νκ³ 
// - cx(βν΄λμ€ μ΄λ¦β, βν΄λμ€ μ΄λ¦2β) ννλ‘ μ¬μ©
const cx = classNames.bind(styles);
// -> λ―Έλ¦¬ stylesμμ ν΄λμ€ λ°μ μ€λλ‘ μ€μ 

const CSSModule = () => {
  return (
    // μλ¦¬λ¨ΌνΈμ className={styles.ν΄λμ€μ΄λ¦}
    // :globalμ κ·Έλ₯ λ¬Έμμ΄λ‘ λ£μ΄μ€
    // ν΄λμ€ μ¬λ¬κ° λ£μ΄μ€ λ λ°±ν±μΌλ‘ κ°μΈμ¨ λ¦¬ν°λ΄ν΄μ£ΌκΈ° '${} ${}'
    // λλ className={[styles.wrapper, styles.inverted].join(' ')}
    // <div className={`${styles.wrapper} ${styles.inverted}`}>
    // <div className={[styles.wrapper, styles.inverted].join(' ')}>
    <div className={cx('wrapper', 'inverted')}>
      μλνμΈμ. μμκ³  νΈλ¦¬ν <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
```

### 9.3.3 μΌλ° .css/.scss νμΌμμ μ μ­(:global) μ¬μ© = :local

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

## 9.4 styled-components

- μ€νμΌμ μλ°μ€ν¬λ¦½νΈ νμΌμ λ΄μ₯μν€λ λ°©μ. μ€νμΌμ μμ±ν¨κ³Ό λμμ ν΄λΉ μ€νμΌμ΄ μ μ©λ μ»΄ν¬λνΈλ₯Ό λ§λ€ μ μκ² ν΄μ€
- μλ°μ€ν¬λ¦½νΈ νμΌ νλμ μ€νμΌκΉμ§ μμ±ν  μ μκΈ° λλ¬Έμ .css λλ .scss κ°μ§ μ€νμΌ νμΌ μ λ§λ€μ΄λ λ¨
- styled-componentsμ μΌλ° classNamesλ₯Ό μ¬μ©νλ CSS/Sassλ₯Ό λΉκ΅νμ λ, κ°μ₯ ν° μ₯μ μ props κ°μΌλ‘ μ λ¬ν΄ μ£Όλ κ°μ μ½κ² μ€νμΌμ μ μ©ν  μ μλ€λ κ²
- μ»΄ν¬λνΈ μ€νμΌλ§μ λ λ€λ₯Έ ν¨λ¬λ€μ μλ°μ€ν¬λ¦½νΈ νμΌ μμ μ€νμΌμ μ μΈνλ λ°©μ
  β βCSS-in JSβ λΌκ³  λΆλ¦
  β κ΄λ ¨λ λΌμ΄λΈλ¬λ¦¬ βhttps://github.com/MicheleBertoli/css-in-jsβ
  β styled-componentsλ₯Ό λμ²΄ν  μ μλ λΌμ΄λΈλ¬λ¦¬λ‘λ νλ emotionμ΄ λνμ μ΄λ©° μλ λ°©μμ styled-comjponentsμ λΉμ·

---

### styled-components μ¬μ©νκΈ°

1. μ€μΉ

   > yarn add styled-components

2. VSC νμ₯μ λ§μΌμμ vscode-styled-components μ€μΉ(μμ μ μμ μΌλ‘ μν κ°λμ± λμ¬μ€)
3. StyledComponents.js νμΌ μμ±
   - propsλ‘ λ£μ΄ μ€ κ°μ μ§μ  μ λ¬ν΄ μ€ μ μμ
     - μ€νμΌ μͺ½μμ μ»΄ν¬λνΈμκ² μ λ¬λ props κ° μ°Έμ‘°ν  μ μμ
     - background κ°μ props μ‘°νν΄μ props.color κ° μ¬μ©, color κ°μ΄ μ£Όμ΄μ§μ§ μμμ λλ blue κΈ°λ³Έ μμμΌλ‘ μ€μ 
   - & λ¬Έμλ‘ Sass μ²λΌ μκΈ° μμ  μ ν κ°λ₯
   - inverted κ°μ΄ true μΌ λμ νΉμ  μ€νμΌλ λΆμ¬

StyledComponents.js

```jsx
import styled, { css } from "styled-components";

// VSC λ§μΌνλ μ΄μ€μμ vscode-styled-components μ€μΉνλ©΄ μμ κ°λμ± λμμ§

// propsλ‘ λ£μ΄ μ€ κ°μ μ§μ  μ λ¬ν΄ μ€ μ μμ
// & λ¬Έμλ‘ Sass μ²λΌ μκΈ° μμ  μ ν κ°λ₯
// inverted κ°μ΄ true μΌ λμ νΉμ  μ€νμΌλ λΆμ¬
const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponents = () => {
  <Box color="black">
    <Button>μλνμΈμ</Button>
    <Button inverted={true}>νλλ¦¬λ§</Button>
  </Box>;
};

export default StyledComponents;
```

App.js

```jsx
import React, { Component } from "react";
import StyledComponents from "./StyledComponents";

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponents />
      </div>
    );
  }
}

export default App;
```

---

### 9.4.1 Tagged ννλ¦Ώ λ¦¬ν°λ΄ (λ°±ν±κΈ°νΈ μ¬μ©)

- (λ°±ν±κΈ°νΈ) Tagged ννλ¦Ώ λ¦¬ν°λ΄μ μ¬μ©νλ©΄ ννλ¦Ώ μ¬μ΄μ¬μ΄μ λ€μ΄κ°λ μλ°μ€ν¬λ¦½νΈ κ°μ²΄λ ν¨μμ μλ³Έ κ°μ κ·Έλλ‘ μΆμΆν  μ μμ
- μ΄ μμ±μ μ¬μ©νμ¬ styled-components λ‘ λ§λ  μ»΄ν¬λνΈμ propsλ₯Ό μ€νμΌ μͺ½μμ μ½κ² μ‘°ν ν  μ μλλ‘ ν¨

---

### 9.4.2 μ€νμΌλ§λ μλ¦¬λ¨ΌνΈ λ§λ€κΈ°

- μ»΄ν¬λνΈ νμΌμ μλ¨μμ styled μ λΆλ¬μ€κ³  **styled.νκ·Έλͺ** μ μ¬μ©νμ¬ κ΅¬ν
  ```jsx
  import styled from "styled-components";

  const MyComponent = styled.div`
    font-size: 2rem;
  `;
  ```
- λ€μ λ°±ν± κΈ°νΈ μ¬μ©μ¬μ¬ λ£μ΄μ£Όλ©΄, ν΄λΉ μ€νμΌμ΄ μ μ©λ divλ‘ μ΄λ£¨μ΄μ§ λ¦¬μ‘νΈ μ»΄ν¬λνΈκ° μμ±
- κ·Έλμ λμ€μ <MyComponent>λ―Έλ¦¬ λ§λ  divμ§λ‘±</MyComponent>μ κ°μ ννλ‘ μ¬μ©ν  μ μμ
- μ¬μ©ν΄μΌ ν  νκ·Έλͺμ΄ μ λμ μ΄κ±°λ νΉμ  μ»΄ν¬λνΈ μμ²΄μ μ€νμΌλ§ν΄μ£Όκ³  μΆλ€λ©΄
  ```jsx
  // νκ·Έμ νμμ styled ν¨μμ μΈμλ‘ μ λ¬
  const MyInput = styled("input")`
    background: gray;
  `;

  // μμ μ»΄ν¬λνΈ νμμ κ°μ λ£μ΄ μ€
  const StyledLink = styled(Link)`
    color: blue;
  `;
  ```
  β Link μ»΄ν¬λνΈλ λ¦¬μ‘νΈ λΌμ°ν° λ΄μ©μ λμ΄
  β μ΄λ°μμΌλ‘ μ»΄ν¬λνΈλ₯Ό styledμ νλΌλ―Έν°μ λ£λ κ²½μ°μλ μ»΄ν¬λνΈμ className propsλ₯Ό μ΅μμ DOMμ className κ°μΌλ‘ μ€μ νλ μμμ΄ λ΄λΆμ μΌλ‘ λμ΄ μμ΄μΌ ν¨(λ° μμ μ½λ μ°Έκ³ )
  ```jsx
  const Sample = ({ className }) => {
    return <div className={className}>Samele</div>;
  };

  const StyledSample = styled(Sample)`
    font-size: 2rem;
  `;
  ```

---

### 9.4.3 μ€νμΌμμ props μ‘°ννκΈ°

- propsλ‘ λ£μ΄ μ€ κ°μ μ§μ  μ λ¬ν΄ μ€ μ μμ
  - μ€νμΌ μͺ½μμ μ»΄ν¬λνΈμκ² μ λ¬λ props κ° μ°Έμ‘°ν  μ μμ
  - background κ°μ props μ‘°νν΄μ props.color κ° μ¬μ©, color κ°μ΄ μ£Όμ΄μ§μ§ μμμ λλ blue κΈ°λ³Έ μμμΌλ‘ μ€μ 
  ```jsx
  const Box = styled.div`
    /* propsλ‘ λ£μ΄ μ€ κ°μ μ§μ  μ λ¬ν΄ μ€ μ μμ */
    background: ${(props) => props.color || "blue"};
    padding: 1rem;
    display: flex;
  `;
  ```
- μ΄λ κ² λ§λ  μ½λλ JSXμμ μ¬μ©λ  λ λ€μκ³Ό κ°μ΄ color κ°μ propsλ‘ λ£μ΄ μ€ μ μμ
  ```jsx
  <Box color="black">(...)</Box>
  ```

---

### 9.4.4 propsμ λ°λ₯Έ μ‘°κ±΄λΆ μ€νμΌλ§

- μΌλ° CSS ν΄λμ€ μ¬μ© μ β μ‘°κ±΄λΆ μ€νμΌλ§ className μ¬μ©
- styled-components β μ‘°κ±΄λΆ μ€νμΌλ§ κ°λ¨νκ² propsλ‘ μ²λ¦¬
- μ€νμΌ μ½λ μ¬λ¬ μ€μ propsμ λ°λΌ λ£μ΄ μ£Όμ΄μΌ ν  λλ CSSλ₯Ό styled-componentsμμ λΆλ¬μμΌ ν¨
  ```jsx
  ${props =>
      props.inverted &&
      **css**`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  ```
  - μ‘°κ±΄λΆ μ€νμΌλ§ ν  μ λ£λ μ¬λ¬ μ€μ μ½λμμ props μ°Έμ‘° ν  λ β λ°λμ CSS λ‘ κ°μΈμ£Όμ΄ Tagged ννλ¦Ώ λ¦¬ν°λ΄ μ¬μ©ν΄μ£ΌκΈ°
    ```jsx
    // μ‘°κ±΄λΆ μ€νμΌλ§ ν  μ λ£λ μ¬λ¬ μ€μ μ½λμμ props μ°Έμ‘° μ ν  λ β CSS μ λΆλ¬λ λ¨
    ${props =>
        props.inverted &&
    		`
        background: none;
        border: 2px solid white;
        color: white;
        &:hover {
          background: white;
          color: black;
        }
      `};
    ```
    - λ§μ½ CSSλ₯Ό μ¬μ©νμ§ μκ³  λ€μκ³Ό κ°μ΄ λ°λ‘ λ¬Έμμ΄μ λ£μ΄λ μλνκΈ°λ νμ§λ§ ν΄λΉ λ΄μ©μ΄ κ·Έμ  λ¬Έμμ΄λ‘λ§ μ·¨κΈλ¨ β VS Code νμ₯ νλ‘κ·Έλ¨μμ μ νμ€ νμ΄λΌμ΄νμ΄ μ λ¨
    - λν μΉλͺμ  λ¨μ μ Tagged ννλ¦Ώ λ¦¬ν°λ΄μ΄ μλκΈ° λλ¬Έμ ν¨μλ₯Ό λ°μ μ¬μ©νμ§ λͺ»ν΄ ν΄λΉ λΆλΆμμλ props κ°μ μ¬μ©νμ§ λͺ» ν¨
    - μ‘°κ±΄λΆ μ€νμΌλ§ ν  μ λ£λ μ¬λ¬ μ€μ μ½λμμ props μ°Έμ‘° μ ν  λ β CSS μ λΆλ¬λ λ¨

---

### 9.4.5 λ°μν λμμΈ

- μΌλ° CSSμ λκ°μ΄ media μΏΌλ¦¬(query) μ¬μ©
  β κΈ°λ³Έμ μΌλ‘ κ°λ‘ ν¬λ¦¬ 1024px μ κ°μ΄λ° μ λ ¬μ νκ³ 
  β κ°λ‘ ν¬κΈ°κ° μμμ§μ λ°λΌ ν¬κΈ°λ₯Ό μ€μ΄κ³ 
  β 768px λ―Έλ§μ΄ λλ©΄ κ½ μ±μλλ€.

```jsx
const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;

  /* κΈ°λ³Έμ μΌλ‘ κ°λ‘ ν¬λ¦¬ 1024px μ κ°μ΄λ° μ λ ¬μ νκ³ 
      κ°λ‘ ν¬κΈ°κ° μμμ§μ λ°λΌ ν¬κΈ°λ₯Ό μ€μ΄κ³ 
      768px λ―Έλ§μ΄ λλ©΄ κ½ μ±μλλ€. */
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
```

---

- μ»΄ν¬λνΈλ§λ€ λ°λ³΅ νλ¦ β ν¨μννμ¬ μ¬μ© β styled-components λ©λ΄μΌμμ μ§κ³΅νλ μ νΈ ν¨μ μ¬μ©
- μμ λ€λ₯Έ νμΌλ‘ λͺ¨λνν λ€ νΈνκ² μ¬κΈ°μ κΈ°μ λΆλ¬ μ¬μ©
  - size κ°μ²΄μ λ€λΌ μλμΌλ‘ media μΏΌλ¦¬ ν¨μ λ§λ€μ΄ μ€
  - μ°Έκ³  : β[https://styled-components.com/docs/advanced#media-templates](https://styled-components.com/docs/advanced#media-templates)β

```jsx
// ### λ°μν λμμΈ
// - μΌλ° CSSμ λκ°μ΄ media μΏΌλ¦¬(query) μ¬μ©
// - μ»΄ν¬λνΈλ§λ€ λ°λ³΅ νλ¦ β ν¨μννμ¬ μ¬μ© β styled-components λ©λ΄μΌμμ μ§κ³΅νλ μ νΈ ν¨μ μ¬μ©
//     - size κ°μ²΄μ λ€λΌ μλμΌλ‘ media μΏΌλ¦¬ ν¨μ λ§λ€μ΄ μ€
//     - μ°Έκ³  : β[https://styled-components.com/docs/advanced#media-templates](https://styled-components.com/docs/advanced#media-templates)β
const sizes = {
  desktop: 1024,
  tablet: 768,
};
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, []);

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;

  /* κΈ°λ³Έμ μΌλ‘ κ°λ‘ ν¬λ¦¬ 1024px μ κ°μ΄λ° μ λ ¬μ νκ³ 
      κ°λ‘ ν¬κΈ°κ° μμμ§μ λ°λΌ ν¬κΈ°λ₯Ό μ€μ΄κ³ 
      768px λ―Έλ§μ΄ λλ©΄ κ½ μ±μλλ€. */
  width: 1024px;
  margin: 0 auto;
  /*
  @media (max-width: 1024px) {
    width: 768;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  */
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`}
`;
```

---
