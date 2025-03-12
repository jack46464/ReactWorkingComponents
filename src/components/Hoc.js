import React, { useRef } from 'react';
import withLogging from './WithLog';
import InputComponent from './Input';

const EnhancedInput = withLogging(InputComponent);

const App = () => {
  const inputRef = useRef(100);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Forward Ref with HOC Example</h1>
      <EnhancedInput ref={inputRef} placeholder="Yes It's me!" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
};

export default App;