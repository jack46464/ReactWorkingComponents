import React, { memo } from "react";
function Child({generateNumber}){
    console.log("child component every time re-rendered");
    const generateUniNumber=()=>{
        generateNumber(Math.random());
    }
    return(
        <div>
            <button onClick={generateUniNumber}>Generate Unique Number</button>
        </div>
    )

}
export default memo(Child);