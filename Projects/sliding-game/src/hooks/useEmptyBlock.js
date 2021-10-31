import { useState, useEffect } from "react";


export const useEmptyBlock = () => {
    // Default empty block at 15
    const [emptyBlock, setEmptyBlock] = useState("15");
    
    return {emptyBlock, setEmptyBlock};
};