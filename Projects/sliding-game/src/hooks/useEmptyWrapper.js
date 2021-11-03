import { useState, useEffect } from "react";

const useEmptyWrapper = () => {
    
    // Default empty block at 15
    const [emptyWrapper, setEmptyWrapper] = useState("15");
    console.log(emptyWrapper);
        
    return {emptyWrapper, setEmptyWrapper};
};

export default useEmptyWrapper;