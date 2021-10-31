import React from 'react';

import { Content } from "./Block.styles";

const Block = ( {text, isBlank = false} ) => {
    <span>
        <h1>{text}</h1>
    </span>
}

export default Block;