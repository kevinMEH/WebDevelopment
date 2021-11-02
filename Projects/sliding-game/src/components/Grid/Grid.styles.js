import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    gap: 0.5rem;

    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);

    box-sizing: inherit;
`

export const BlockWrapper = styled.div`
    position: relative;
    box-sizing: inherit;
    display: block;
`