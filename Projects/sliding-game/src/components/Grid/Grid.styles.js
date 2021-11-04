import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    gap: 0.5rem;
    
    max-width: 34rem;

    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);

    box-sizing: inherit;
    
    align-items: center;
    justify-content: center;
    justify-items: center;
`