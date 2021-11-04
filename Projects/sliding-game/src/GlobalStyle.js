import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    * {
        font-family: 'Roboto Mono', monospace;
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

        h1 {
            text-align: center;
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }
    }
`

export const Container = styled.div`
    height: auto;
    padding-top: 4%;
    padding-left: 25%;
    padding-right: 25%;
    padding-bottom: 4%;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
`