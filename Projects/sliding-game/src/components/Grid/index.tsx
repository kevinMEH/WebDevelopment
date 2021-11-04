import React, { Component, useState, useEffect, useRef } from "react";
import { Swappable } from "@shopify/draggable";

import { Wrapper } from "./Grid.styles";

// Components
import Block from "../Block";
import BlockWrapper from "../BlockWrapper";

const Grid = () => {
    
    let emptyWrapperRef = useRef(15);


    // I hate react!!!1!11!1!!1!
    const [
        blockClasses,
        setBlockClasses
    ] = useState<string[]>(
        [
            "Block Block--item0",
            "Block Block--item1",
            "Block Block--item2",
            "Block Block--item3",
            "Block Block--item4",
            "Block Block--item5",
            "Block Block--item6",
            "Block Block--item7",
            "Block Block--item8",
            "Block Block--item9",
            "Block Block--item10",
            "Block Block--item11 Block--isDraggable",
            "Block Block--item12",
            "Block Block--item13",
            "Block Block--item14 Block--isDraggable",
            "Block Block--item15 Block--isDraggable Block--isEmpty",
        ]
    );  
    
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
            let emptyBlockWrapper: HTMLElement;
            let wrappers:HTMLElement[] = [].slice.call(sourceContainer.parentElement?.parentElement?.children);
            for(let wrapper of wrappers) {
                console.log(wrapper);
                let child = wrapper.children[0];
                if(child.className.includes("isEmpty")) {
                    emptyBlockWrapper = wrapper;
                    break;
                }
            }
            console.log("EMPTY BLOCK WRAPPER " + emptyBlockWrapper!)
            emptyWrapperRef.current = +(emptyBlockWrapper!.className.substring(emptyBlockWrapper!.className.indexOf("index") + 5));
            console.log(emptyWrapperRef.current);
            updateClasses();
        });
        
        function updateClasses() {
            let newNum = +emptyWrapperRef.current;
            let newUp = newNum - 4;
            let newDown = newNum + 4;
            let newLeft = newNum % 4 === 0 ? -420 : newNum - 1; // If block is on the left side there is no left block!
            let newRight = newNum % 4 === 3 ? -420 : newNum + 1; // If block is on the right side there is no right block!
            
            for(let i = 0; i < 16; i++) {
                let blockClassName = "Block Block--item" + i;
                
                if(i === newUp || i === newDown || i === newLeft || i === newRight) {
                    // Draggable if it's the empty block or neighbors
                    blockClassName += " Block--isDraggable";
                }
                
                console.log(blockClassName);
                
                let tempBlockClasses2 = blockClasses;
                tempBlockClasses2[i] = blockClassName;
                setBlockClasses(tempBlockClasses2);
            }
        }
        
    }, [blockClasses])
    

    
    
    // I hate react
    return (
        <Wrapper className="BlockLayout">
            <BlockWrapper index={0} >
                <Block
                    blockClassName={ blockClasses[0] }
                    text={ 0 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={1} >
                <Block
                    blockClassName={ blockClasses[1] }
                    text={ 1 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={2} >
                <Block
                    blockClassName={ blockClasses[2] }
                    text={ 2 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={3} >
                <Block
                    blockClassName={ blockClasses[3] }
                    text={ 3 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={4} >
                <Block
                    blockClassName={ blockClasses[4] }
                    text={ 4 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={5} >
                <Block
                    blockClassName={ blockClasses[5] }
                    text={ 5 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={6} >
                <Block
                    blockClassName={ blockClasses[6] }
                    text={ 6 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={7} >
                <Block
                    blockClassName={ blockClasses[7] }
                    text={ 7 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={8} >
                <Block
                    blockClassName={ blockClasses[8] }
                    text={ 8 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={9} >
                <Block
                    blockClassName={ blockClasses[9] }
                    text={ 9 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={10} >
                <Block
                    blockClassName={ blockClasses[10] }
                    text={ 10 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={11} >
                <Block
                    blockClassName={ blockClasses[11] }
                    text={ 11 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={12} >
                <Block
                    blockClassName={ blockClasses[12] }
                    text={ 12 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={13} >
                <Block
                    blockClassName={ blockClasses[13] }
                    text={ 13 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={14} >
                <Block
                    blockClassName={ blockClasses[14] }
                    text={ 14 + "" }
                />
            </BlockWrapper>
            <BlockWrapper index={15} >
                <Block
                    blockClassName={ blockClasses[15] }
                    text={ 15 + "" }
                />
            </BlockWrapper>
        </Wrapper>
    )
};

export default Grid;