// START: import-packages
import { createGlobalStyle } from 'styled-components';

// START: reset-styling
const GlobalStyle = createGlobalStyle`
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

  ol, ul {
    list-style-type: none;
  }
`;

export {
  GlobalStyle,
};