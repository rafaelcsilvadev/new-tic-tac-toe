import styled from 'styled-components/macro';

export const Button = styled.button`
    margin: 20px 0 0 0;
    padding: 10px;
    background-color: #119f17;
    color: #fff;
    font-size: 14px;

    &:focus{
        outline: none;
    }

    &:hover{
        opacity: 0.8;
    }

    @media screen and (min-width: 400px){
        font-size: 16px;
    }

`;