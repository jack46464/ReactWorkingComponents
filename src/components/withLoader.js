import React,{useState} from 'react';
const withLoader=(WrappedComponent)=>{
    return (props)=>{
        const[loading,setLoading]=useState(true);
        setTimeout(()=>{
         setLoading(false);
        },5000)
   
    return(
        <div>
            {loading?<p>Loading...</p> : <WrappedComponent {...props}></WrappedComponent>}
        </div>
    )
}
}
export default withLoader;