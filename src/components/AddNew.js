import React, { useState, createContext, useContext } from 'react';
import NextPage from './NextPage';




const UserContext = createContext();


function AddNew() {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  )
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
    const uservalue = useContext(UserContext);
  return (
    <>
      <h1>Component 3:{uservalue}</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
  const[isNavigate,setIsNavigate]=useState(false);
//  const handleClick=()=>{
//    setIsNavigate
//   };
  

  return (
    <>
      <h1>Component 5</h1>
      <button onClick={()=>setIsNavigate(true)}>AddNewpage</button>
      {isNavigate?<NextPage></NextPage>:null}
    </>
  );
}

export default AddNew;
