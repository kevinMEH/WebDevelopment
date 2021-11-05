import styled from "styled-components";

export const BlockSpan = styled.span`
    height: 100%;
    position: relative;
    display: block;
`

export const Content = styled.div`
    color: #d5c4a1;
    background-color: #f2e5bc;
    border: 0.5rem solid currentColor;
    
    h1 {
        font-size: 2.5rem;
        color: #928374;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    position: relative;
    min-height: 8rem;
    height: 100%;
    min-width: 8rem;

    box-sizing: inherit;
`