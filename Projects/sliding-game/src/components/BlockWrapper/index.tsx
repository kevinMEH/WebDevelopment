import React from "react";

import { Wrapper } from "./BlockWrapper.styles";

const BlockWrapper = ({index, children}: {index: number, children:React.ReactNode} ) => {
    return (
        <Wrapper className={ "BlockWrapper index" + index }>
            { children }
        </Wrapper>
    )
}

export default BlockWrapper;