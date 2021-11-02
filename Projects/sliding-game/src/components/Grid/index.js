import React from "react";

import { Wrapper, BlockWrapper } from "./Grid.styles";

// Components
import Block from "../Block";

// Hooks
import useEmptyBlock from "../../hooks/useEmptyBlock";

const Grid = () => {
    
    const {
        emptyBlock,
        setEmptyBlock
    } = useEmptyBlock();
    
    const blockWrappers = [];
    let emptyBlockNum = emptyBlock - 0;
    let up = emptyBlockNum - 4;
    let down = emptyBlockNum + 4;
    let left = emptyBlockNum % 4 === 0 ? -420 : emptyBlockNum - 1; // If block is on the left side there is no left block!
    let right = emptyBlockNum % 4 === 3 ? -420 : emptyBlockNum + 1; // If block is on the right side there is no right block!
    
    for(let i = 0; i < 16; i++) {
        let blockClassName = "Block Block--item" + i;
        
        if(i === emptyBlockNum || i === up || i === down || i === left || i === right) {
            // Draggable if it's the empty block or neighbors
            blockClassName += " Block--isDraggable"; 
            if(i === emptyBlockNum) {
                blockClassName += " Block--isEmpty";
            }
        }
        
        blockWrappers.push(
            <BlockWrapper className={ "BlockWrapper" } >
                <div className={ blockClassName }>
                    <Block
                        text={i + ""}
                    />
                </div>
            </BlockWrapper>
        )
    }
    
    // const updateClasses = () => {
    //     let emptyBlockNum = emptyBlock - 0
    // }
    
    return (
        <Wrapper className="BlockLayout">
            { blockWrappers }
        </Wrapper>
    )
};

export default Grid;