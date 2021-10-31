import { createGlobalStyle } from "styled-components";

export const GLobalStyle = createGlobalStyle`

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
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }
    }
`