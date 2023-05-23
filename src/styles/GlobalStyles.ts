import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-red: #e04d3a;
        --color-red50: #a02a1f;
        --color-blue: #506474;
        --color-blue50: #303e47;

        --color-black: #110806;
        --color-black50: #16120f;
        --color-black100: #17110d;

        --color-confirm: #207d20;
        --color-background: #6a6a6a9e;
        --color-text: #c68a7a;

        --color-grey100: #e0e0e0;
        --fix-white: #fff;

        --font-family: 'Alkatra', cursive;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--font-family);
    }
    button{
        cursor: pointer;
        color:#fff;
        padding: 6px 16px;
        border: none;
        font-weight: 800;
    }
    ul,li{
        list-style: none;
    }
    main, body{
        background-color: var(--color-black50);
    }
   
`;
