import { createGlobalStyle } from 'styled-components/macro';

export const Global = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        border: 0;
    }

    a, 
    a:link, 
    a:hover, 
    a:visited,
    button{
        text-decoration: none;
    }

    ul, 
    ol, 
    li{
        list-style: none;
    }

    body{
        background-color: #212121;
    }

    span,
    p, 
    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6, 
    label,
    button,
    a{
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
        line-height: 1.8;
    }

    input, 
    select{
        font-family: Arial, Helvetica, sans-serif;
        color: #030303;
    }

`;
