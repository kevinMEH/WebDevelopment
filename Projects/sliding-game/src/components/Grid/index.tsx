import React, { Children, useRef } from "react";
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
    
    const blockWrappers:Array<JSX.Element> = [];
    const blocks:Array<JSX.Element> = [];
    let emptyBlock:JSX.Element;
    
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
        
        if(i === emptyBlockNum) emptyBlock = blocks[i];
    }
    
    // Update of blocks
    function updateClasses() {
        let newNum = +emptyWrapper;
        let newUp = newNum - 4;
        let newDown = newNum + 4;
        let newLeft = newNum % 4 === 0 ? -420 : emptyBlockNum - 1; // If block is on the left side there is no left block!
        let newRight = newNum % 4 === 3 ? -420 : emptyBlockNum + 1; // If block is on the right side there is no right block!
        
        for(let i = 0; i < 16; i++) {
            let blockClassName = "Block Block--item" + i;
            
            if(i === newUp || i === newDown || i === newLeft || i === newRight) {
                // Draggable if it's the empty block or neighbors
                blockClassName += " Block--isDraggable"; 
            }
            
            blockWrappers[i].props.children.blockClassName = blockClassName;
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
    
    interface BlockProps {
        blockClassName: string,
        text: string
    }
    
    swappable.on("swappable:swapped", () => {
        let emptyBlockWrapper;
        for(let wrapper of blockWrappers) {
            let child = React.Children.only<React.ReactElement<BlockProps>>(wrapper.props.children);
            if(child.props.blockClassName.includes("isEmpty")) emptyBlockWrapper = wrapper;
        }
        setEmptyWrapper((emptyBlockWrapper as any).index)
        updateClasses();
    });
    
    return (
        <Wrapper className="BlockLayout">
            { blockWrappers }
        </Wrapper>
    )
};

export default Grid;