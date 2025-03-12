import { useCallback,useState } from "react";
import CallbackChild from "./CallbackChild";

function Parent(){
    const[uniqueNo,SetUniqueNo]=useState(0);
    // const generateUniqueNumber=(value)=>{
    //     SetUniqueNo(value);
    // }
    const generateUniqueNumber=useCallback((value)=>{
        SetUniqueNo(value);
    },[]);
    return(
        <div>
            <h5>Unique Number:{uniqueNo}</h5>
            <CallbackChild generateNumber={generateUniqueNumber}></CallbackChild>
        </div>
    )
}
export default Parent;