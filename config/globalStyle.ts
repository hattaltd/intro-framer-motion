// START: import-packages
import { createGlobalStyle } from 'styled-components';

// START: reset-styling
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/PoppinsRegular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/PoppinsMedium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/PoppinsSemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/PoppinsBold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }

  html::-webkit-scrollbar {
    width: 10px;
    padding: 0 10px;
  }

  html::-webkit-scrollbar-thumb {
    /* background-color: #fafafa; */
    border-radius: 4px;
    // transition: .5s ease linear;

    &:hover {
      background-color: #DADADA;
    }
  }

  html::-webkit-scrollbar-track {
    /* background-color: blue; */
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    font-style: normal;
  }

  ol, ul {
    list-style-type: none;
  }
`;

export {
  GlobalStyle,
};