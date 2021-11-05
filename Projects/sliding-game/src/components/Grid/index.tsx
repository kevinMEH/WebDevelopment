import React, { useEffect, useRef } from "react";
import { Swappable } from "@shopify/draggable";

import { Wrapper } from "./Grid.styles";

// Components
import Block from "../Block";
import BlockWrapper from "../BlockWrapper";

const Grid = () => {
    
    let emptyWrapperRef = useRef(15);
    
    let blockWrappers:Array<JSX.Element> = [];

    // I hate react!!!1!11!1!!1!
    
    let up = emptyWrapperRef.current - 4;
    let down = emptyWrapperRef.current + 4;
    let left = emptyWrapperRef.current % 4 === 0 ? -420 : emptyWrapperRef.current - 1; // If block is on the left side there is no left block!
    let right = emptyWrapperRef.current % 4 === 3 ? -420 : emptyWrapperRef.current + 1; // If block is on the right side there is no right block!
    
    for(let i = 0; i < 16; i++) {
        let blockClassName = "Block Block--item" + i;

        if(i === emptyWrapperRef.current || i === up || i === down || i === left || i === right) {
            // Draggable if it's the empty block or neighbors
            blockClassName += " Block--isDraggable"; 
            if(i === emptyWrapperRef.current) {
                blockClassName += " Block--isEmpty";
            }
        }
        
        blockWrappers.push(
            <BlockWrapper index={i} >
                <Block
                    blockClassName={ blockClassName }
                    text={i + ""}
                />
            </BlockWrapper>
        )
    }
    
    useEffect(() => {
        // Swappable
        const containerSelector = ".BlockLayout";
        const containers = document.querySelectorAll(containerSelector);

        if (containers.length === 0) {
            console.log("Container length 0");
        }

        const swappable = new Swappable(containers, {
            draggable: ".Block--isDraggable",
            mirror: {
                appendTo: containerSelector,
                constrainDimensions: true,
            }
        });

        swappable.on("swappable:start", () => console.log("swappable:start"));
        swappable.on("swappable:swapped", () => console.log("swappable:swapped"));
        swappable.on("swappable:stop", () => console.log("swappable:stop"));
        
        // Block user is dragging
        let sourceContainer: HTMLElement;
        
        swappable.on("drag:start", (event) => {
            sourceContainer = event.source;
            console.log(sourceContainer);
            if(sourceContainer.classList.contains("Block--isEmpty")) return;

            event.cancel();
        })
        
        swappable.on("swappable:swap", (event) => {
            // User is using empty block
            if(sourceContainer.classList.contains("Block--isEmpty")) return;
            
            // Else if user is swapping numbered with numbered cancel.
            event.cancel();
        });
        
        swappable.on("swappable:swapped", () => {
            let emptyBlockWrapper: HTMLElement;
            let wrappers:HTMLElement[] = [].slice.call(sourceContainer.parentElement?.parentElement?.children);
            for(let wrapper of wrappers) {
                let child = wrapper.children[0];
                if(child.className.includes("isEmpty")) {
                    emptyBlockWrapper = wrapper;
                    break;
                }
            }
            let indexIndex = emptyBlockWrapper!.className.indexOf("index");
            emptyWrapperRef.current = +(emptyBlockWrapper!.className.substring(indexIndex + 5, indexIndex + 7).trim());
        });
        
        swappable.on("swappable:stop", () => {
            updateClasses();
        })
        
        function updateClasses() {
            let newNum = +emptyWrapperRef.current;
            let newUp = newNum - 4;
            let newDown = newNum + 4;
            let newLeft = newNum % 4 === 0 ? -420 : newNum - 1; // If block is on the left side there is no left block!
            let newRight = newNum % 4 === 3 ? -420 : newNum + 1; // If block is on the right side there is no right block!
            
            let wrappers:HTMLElement[] = [].slice.call(sourceContainer.parentElement?.parentElement?.children);
            
            for(let i = 0; i < 16; i++) {
                let blockOriginalClassName = wrappers[i].children[0].className;
                let blockClassName = "Block Block--item" + blockOriginalClassName.substring(blockOriginalClassName.indexOf("item") + 4, blockOriginalClassName.indexOf("item") + 6).trim();
                
                if(i === newNum || i === newUp || i === newDown || i === newLeft || i === newRight) {
                    // Draggable if it's the empty block or neighbors
                    blockClassName += " Block--isDraggable";
                }
                
                if(i === newNum) blockClassName += " Block--isEmpty";
                
                wrappers[i].children[0].className = blockClassName;
            }
            
            console.log("Updated");
            
        }
        
        function shuffle() {
            let newNum = +emptyWrapperRef.current;
            let newUp = newNum - 4;
            let newDown = newNum + 4;
            let newLeft = newNum % 4 === 0 ? -420 : newNum - 1; // If block is on the left side there is no left block!
            let newRight = newNum % 4 === 3 ? -420 : newNum + 1; // If block is on the right side there is no right block!
            let available = [];
            
            let emptyBlock = document.getElementsByClassName("Block--isEmpty")[0];
            let emptyBlockWrapper = emptyBlock.parentElement;
            
            if(newUp >= 0 && newUp <= 15) available.push(newUp);
            if(newDown >= 0 && newDown <= 15) available.push(newDown);
            if(newLeft >= 0 && newLeft <= 15) available.push(newLeft);
            if(newRight >= 0 && newRight <= 15) available.push(newRight);
            
            console.log(available);
            
            let random = Math.random();
            let swapTarget;
            for(let i = 0; i < available.length; i++) {
                if(random < ((i + 1) * 1 / available.length)) {
                    swapTarget = available[i];
                    break;
                }
            }
            
            let swapBlock = document.getElementsByClassName("Block--item" + swapTarget)[0];
            let swapBlockWrapper = swapBlock.parentElement;
            
            console.log(emptyBlockWrapper);
            console.log(swapBlockWrapper);
            
            emptyBlockWrapper!.innerHTML = "";
            swapBlockWrapper!.innerHTML = "";
            
            console.log(emptyBlockWrapper);
            console.log(swapBlockWrapper);
            
            emptyBlockWrapper!.innerHTML = swapBlock.outerHTML;
            swapBlockWrapper!.innerHTML = emptyBlock.outerHTML;
            
            sourceContainer = document.getElementsByClassName('Block--item15')[0] as HTMLElement;
            
            let indexIndex = swapBlockWrapper!.className.indexOf("index");
            emptyWrapperRef.current = +(swapBlockWrapper!.className.substring(indexIndex + 5, indexIndex + 7).trim());
            
            updateClasses();
        }
        
        for(let i = 0; i < 100; i++)
            shuffle();
        
    })
    
    // I hate react
    return (
        <Wrapper className="BlockLayout">
            { blockWrappers }
        </Wrapper>
    )
};

export default Grid;