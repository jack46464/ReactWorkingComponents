import React, { useRef } from 'react';

export default function ChangeUnControllInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = 'Vandalur Vadivel';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Change Value</button>
    </div>
  );
}
