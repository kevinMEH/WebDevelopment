import { useState, useEffect } from "react";
import initializeSwappable from "../components/swappable";

const useEmptyBlock = () => {
    
    // Default empty block at 15
    const [emptyBlock, setEmptyBlock] = useState("15");
    console.log(emptyBlock);
        
    useEffect(() => initializeSwappable(), []);
    
    return {emptyBlock, setEmptyBlock};
};

export default useEmptyBlock;