import React, { useRef } from "react";
import { Swappable } from "@shopify/draggable";

import { Wrapper } from "./Grid.styles";

// Components
import Block from "../Block";
import BlockWrapper from "../BlockWrapper";

// Hooks
import useEmptyWrapper from "../../hooks/useEmptyWrapper";

// Swappable
import initializeSwappable from "../swappable";

const Grid = () => {
    
    const {
        emptyWrapper,
        setEmptyWrapper
    } = useEmptyWrapper();
    
    const blockWrappers = [];
    const blocks:Array<JSX.Element> = [];
    
    // Initial creation of wrapper and block
    let emptyBlockNum:number = +emptyWrapper;
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

        blocks.push(
            <Block
                blockClassName={ blockClassName }
                text={i + ""}
            />
        );
        
        blockWrappers.push(
            <BlockWrapper index={i} >
                { blocks[i] }
            </BlockWrapper>
        )
    }
    
    // Update of blocks
    function updateClasses() {
        let newNum = +emptyWrapper;
        let newUp = emptyBlockNum - 4;
        let newDown = emptyBlockNum + 4;
        let newLeft = emptyBlockNum % 4 === 0 ? -420 : emptyBlockNum - 1; // If block is on the left side there is no left block!
        let newRight = emptyBlockNum % 4 === 3 ? -420 : emptyBlockNum + 1; // If block is on the right side there is no right block!
        
        for(let i = 0; i < 16; i++) {
            let blockClassName = "Block Block--item" + i;
            
            if(i === newNum || i === newUp || i === newDown || i === newLeft || i === newRight) {
                // Draggable if it's the empty block or neighbors
                blockClassName += " Block--isDraggable"; 
                if(i === newNum) {
                    blockClassName += " Block--isEmpty";
                }
            }
        }
    }
    
    const swappable = useRef(initializeSwappable()).current as Swappable;
    
    let sourceContainer: HTMLElement;
	
	swappable.on("drag:start", (event) => {
		sourceContainer = event.source;
	})
	
	swappable.on("swappable:swap", (event) => {
		// User is using empty block
		if(sourceContainer.classList.contains("Block--isEmpty")) return;
		
		// User is using numbered block and swapping with empty
		if(event.over.classList.contains("Block--isEmpty")) return;
		
		// Else if user is swapping numbered with numbered cancel.
		event.cancel();
	});
    
    swappable.on("swappable:swapped", () => {
        updateClasses();
    });
    
    return (
        <Wrapper className="BlockLayout">
            { blockWrappers }
        </Wrapper>
    )
};

export default Grid;