import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
    display: grid;
    gap: 0.5rem;
    
    max-width: 68rem;

    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(4, auto);

    box-sizing: inherit;
    
    align-items: center;
    justify-content: center;
    justify-items: center;
`