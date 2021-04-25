import { createGlobalStyle } from 'styled-components';
import * as color from './GlobalColors';
import * as typeface from './GlobalFonts';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
  
  body{
    padding: 0;
    margin: 0;
    font-family: ${typeface.manrope};
    background-color: ${color.$white};
    color: ${color.$black};
    
    h1,h2,h3,h4,h5,h6, p {
        margin: 0;
    }
    h1 {
      font-weight: ${typeface.$regular};
    }
    h2 {
      font-weight: ${typeface.$light};
    }
    h3 {
        font-weight: ${typeface.$thin};
    }
    a, a:visited, a:hover {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }
    
  }
`;

export default GlobalStyle;
