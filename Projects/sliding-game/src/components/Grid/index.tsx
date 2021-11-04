import React, { Component, useState, useEffect, useRef } from "react";
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
            // draggable: ".Block",
            mirror: {
                appendTo: containerSelector,
                constrainDimensions: true,
            }
        });

        console.log("Swappable Success.");

        swappable.on("swappable:start", () => console.log("swappable:start"));
        swappable.on("swappable:swapped", () => console.log("swappable:swapped"));
        swappable.on("swappable:stop", () => console.log("swappable:stop"));
        
        // Block user is dragging
        let sourceContainer: HTMLElement;
        
        swappable.on("drag:start", (event) => {
            sourceContainer = event.source;
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
            console.log("EMPTY BLOCK WRAPPER " + emptyBlockWrapper!)
            let indexIndex = emptyBlockWrapper!.className.indexOf("index");
            emptyWrapperRef.current = +(emptyBlockWrapper!.className.substring(indexIndex + 5, indexIndex + 7).trim());
            console.log(emptyWrapperRef.current);
            updateClasses();
        });
        
        function updateClasses() {
            let newNum = +emptyWrapperRef.current;
            let newUp = newNum - 4;
            let newDown = newNum + 4;
            let newLeft = newNum % 4 === 0 ? -420 : newNum - 1; // If block is on the left side there is no left block!
            let newRight = newNum % 4 === 3 ? -420 : newNum + 1; // If block is on the right side there is no right block!
            
            let wrappers:HTMLElement[] = [].slice.call(sourceContainer.parentElement?.parentElement?.children);
            console.log(wrappers);
            
            for(let i = 0; i < 16; i++) {
                let blockClassName = "Block Block--item" + i;
                
                if(i === newUp || i === newDown || i === newLeft || i === newRight) {
                    // Draggable if it's the empty block or neighbors
                    blockClassName += " Block--isDraggable";
                }
                
                wrappers[i].children[0].className = blockClassName;
            }
        }
        
    })
    

    
    
    // I hate react
    return (
        <Wrapper className="BlockLayout">
            { blockWrappers }
        </Wrapper>
    )
};

export default Grid;