import { useState, useEffect, useRef,useCallback } from "react";
import ReactDOM from "react-dom/client";
import '../App.css';
import PromiseData from './Promise';
// import ForwardData from './ForwardRef';
import HocCompoent from './Hoc';
// import ChangeUnControllInput from './ChangeRef';
import RefComponent  from "./RefFile";
import ErrorBoundary from "./ErrorBoundary";
import HocComponent from './HocComponent';
import CallbackParent from './CallbackParent';
import MemoChild from './MemoChild';
import AsyncPromise from "./AsyncPromise";
import UseMemo  from "./UseMemo";
import UseCallback from "./useCallback";
const NextPage = () => {
  const [count, setCount] = useState(0);
  const[isNavigate,setIsNavigate]=useState(false);
  

// Callback function to process user data
function processUserData(data, callback) {
  console.log("Processing user data:", data);
  callback();
  console.log("call back completed");
}

// Function to fetch user data with a callback
function fetchUserDataWithCallback(callback) {
  // Simulating an API request
  const userData = { id: 1, name: "John Doe" };
  callback(userData);
  console.log("Final call back completed");
}

// Using the callback
fetchUserDataWithCallback((data) => {
  processUserData(data, () => {
      console.log("User data processed successfully.");
  });
});



  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setIsNavigate(true)}>Promise Page</button>
      {isNavigate?<UseCallback></UseCallback>:null}
      {/* Pass the memoized increment function to a child component */}
    
    </div>

  );
};

export default NextPage;
