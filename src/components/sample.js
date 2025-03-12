
import react,{useEffect,useState} from 'react';
function MyComponents(){
    const[count,setCount]=useState(0);
        const[list,SetList]=useState([10,20,30,40,50]);
        useEffect(()=>{
            console.log("Render again again")
        },[count]);

    const handleClick=()=>{
      setCount(count+1);
    }

    return(
        <div>
            {list.map((value,index)=>{
        return(
        <h1>{index}_{value}<br/></h1>
            );
        
       })
     }
 <h1>Count is:{count}</h1>
 <button onClick={handleClick}>Click</button>
        </div>
        )        
}
export default MyComponents;
