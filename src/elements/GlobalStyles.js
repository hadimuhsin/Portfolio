import { createGlobalStyle } from 'styled-components';

import * as font from '../fonts/font.js';

export default createGlobalStyle`
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  height: 100%;
  width: 100%;
  margin: 0;
  margin-left: auto;
  margin-right: auto;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  -webkit-margin-before: 0;
  margin-block-start: 0;
  -webkit-margin-after: 0;
  margin-block-end: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: 0;
  margin-inline-end: 0;

  display: inline-block;
  font-size: inherit;
}

a {
  text-decoration: none;
  -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
  -webkit-tap-highlight-color: transparent;
  color: inherit;
}

img {
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
}

::-webkit-scrollbar {
  display: none;
}

@font-face {
  font-family: "SourceSansPro";
  src: local('SourceSansPro300'), url('${font.SourceSansPro300}') format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: "SourceSansPro";
  src: local('SourceSansPro400'), url('${font.SourceSansPro400}') format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: "SourceSansPro";
  src: local('SourceSansPro700'), url('${font.SourceSansPro700}') format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: "SourceSansPro";
  src: local('SourceSansPro900'), url('${font.SourceSansPro900}') format("woff2");
  font-weight: 900;
  font-style: normal;
  font-display: block;
}

body {
  padding-top: 20vh;
  line-height: 1;
  --sides-padding-desktop: 3%;
  --sides-padding-mobile: 5%;

  --background-color: hsl(0, 0%, 99%);
  --background-color-translucent: hsla(0, 0%, 99%, 0.92);
  --primary-color: hsl(150, 3%, 14%);
  --primary-color-light: hsla(150, 3%, 14%, 0.85);
  --secondary-color-a: hsl(351, 100%, 63%);
  --secondary-color-b: hsl(32, 100%, 54%);
  background-color: var(--background-color);
  font-family: 'SourceSansPro', sans-serif;
  font-size: 19px;
  font-weight: 400;
  color: var(--primary-color);

  @media (max-width: 849px) {
    font-size: 18px;
  }
}
`;
