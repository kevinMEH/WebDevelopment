import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    gap: 0.5rem;

    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
        "0 1 2 3"
        "4 5 6 7"
        "8 9 10 11"
        "12 13 14 15";

    box-sizing: inherit;
`

export const BlockWrapper = styled.div`
    position: relative;
    box-sizing: inherit;
    ${'' /* grid-area: REPLACEME; */}
    display: block;
`