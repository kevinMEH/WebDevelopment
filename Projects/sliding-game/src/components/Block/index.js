import React from 'react';

import { Content } from "./Block.styles";

const Block = ( {text, isDraggable = false} ) => {
    return (
        <span>
            <Content>
                <h1>{text}</h1>
            </Content>
        </span>
    );
}

export default Block;