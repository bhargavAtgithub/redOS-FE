import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html,
    body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 50%;
    }

    p, span, h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        cursor: none;

        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;
    }

    *:focus {
        outline: none;
    }

    *::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }

`;

export default GlobalStyles;
