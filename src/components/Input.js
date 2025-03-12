
import React from 'react';

const InputComponent = React.forwardRef((props, ref) => {
    const handleSubmit=()=>{
          console.log('child component')
    }
    return <div><input ref={ref} {...props} />
    <button onClick={handleSubmit}>Iam a Button </button></div>;
    {/* <button onClick={handleSubmit}>Iam a Button </button> */}
   
});

export default InputComponent;