import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap');

    * {
        font-family: 'Roboto', sans-serif;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%
        line-height: 1;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #f2e5bc;

        h1 {
            text-align: center;
            font-size: 4rem;
            color: #427b58;
            font-weight: 900;
        }

        p {
            font-size: 2rem;
            color: #689d6a;
            font-weight: 600;
            padding-left: 10%;
            padding-right: 10%;
        }
    }
`

export const Container = styled.div`
    height: auto;
    padding-left: 25%;
    padding-right: 25%;
    padding-bottom: 2%;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
`

export const Faded = styled.p`
    margin-top: 5%;
    color: #458588;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: justify;
    text-justify: inter-word;
    opacity: 80%;
`