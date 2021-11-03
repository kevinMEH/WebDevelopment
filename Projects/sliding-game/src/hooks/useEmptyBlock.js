import { useState, useEffect } from "react";

const useEmptyBlock = () => {
    
    // Default empty block at 15
    const [emptyBlock, setEmptyBlock] = useState("15");
    console.log(emptyBlock);
        
    return {emptyBlock, setEmptyBlock};
};

export default useEmptyBlock;