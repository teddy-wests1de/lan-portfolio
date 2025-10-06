import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-dark: #2d2e33;
        --color-navy: #2C3E50;
        --color-slate-gray: #34495E;
        --color-sky-blue: #3498DB;
        --color-light-gray: #F8F9FA;
    }

    *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: #2d2e33;
            color: #f0f0f0;
            line-height: 1.6;
            padding: 1rem;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
        }
     
        h1, h2, h3 {
            margin-bottom: 20px;
            color: #fff;
        }
`;

export default GlobalStyles;
