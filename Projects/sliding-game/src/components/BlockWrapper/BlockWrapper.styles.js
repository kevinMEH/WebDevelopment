import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    position: relative;
    box-sizing: inherit;
    display: flex;
    
    &:after {
        content: "";
        display: block;
        height: 0;
        width: 0;
        padding-bottom: 100%;
    }
`
