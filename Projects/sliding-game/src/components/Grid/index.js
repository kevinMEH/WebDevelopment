import React from "react";

import { Wrapper, BlockWrapper } from "./Grid.styles";

import { Block } from "../Block";

const Grid = () => {
    
    
    return (
        <Wrapper>
            <BlockWrapper style={ {gridArea: "0"} }>
                <Block text="0" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "1"} }>
                <Block text="1" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "2"} }>
                <Block text="2" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "3"} }>
                <Block text="3" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "4"} }>
                <Block text="4" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "5"} }>
                <Block text="5" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "6"} }>
                <Block text="6" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "7"} }>
                <Block text="7" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "8"} }>
                <Block text="8" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "9"} }>
                <Block text="9" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "10"} }>
                <Block text="10" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "11"} }>
                <Block text="11" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "12"} }>
                <Block text="12" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "13"} }>
                <Block text="13" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "14"} }>
                <Block text="14" />
            </BlockWrapper>

            <BlockWrapper style={ {gridArea: "15"} }>
                <Block text="" isBlank={true} />
            </BlockWrapper>
        </Wrapper>
    )
};

export default Grid;