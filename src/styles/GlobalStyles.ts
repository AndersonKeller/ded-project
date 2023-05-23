import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-red: #e04d3a;
        --color-red-50: #a02a1f;
        --color-red-0: #732828;
        --color-blue: #506474;
        --color-blue-50: #303e47;

        --color-black: #110806;
        --color-black-50: #16120f;
        --color-black-100: #17110d;

        --color-confirm: #207d20;
        --color-background: #6a6a6a9e;
        --color-text: #c68a7a;

        --color-gray-900: #212121;
        --color-gray-800: #424242;
        --color-gray-700: #616161;
        --color-gray-600: #757575;
        --color-gray-500: #9e9e9e;
        --color-gray-400: #bdbdbd;
        --color-gray-300: #e0e0e0;
        --color-gray-200: #eeeeee;
        --color-gray-100: #f5f5f5;
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
        background-color: var(--color-gray-900);
    }
   
`;
