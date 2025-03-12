import React, { useState, useMemo } from 'react';

// Function to simulate an expensive calculation (e.g., sum of numbers up to a large number)
const calculateSum = (num) => {
  console.log("Calculating sum...");
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

function UseMemo() {
    console.log("Use memo render...");
  const [number, setNumber] = useState(10);
  const [text, setText] = useState('');

  // Memoize the result of calculateSum, only recalculating when 'number' changes
  const memoizedSum = useMemo(() => calculateSum(number), [number]);

   //const memoizedSum = calculateSum(number);

  return (
    <div>
      <h1>Expensive Calculation with useMemo</h1>
      
      {/* Number input to trigger expensive calculation */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
      />
      
      <h2>Sum: {memoizedSum}</h2>

      {/* Text input to demonstrate re-render without affecting memoized value */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Typed Text: {text}</p>
    </div>
  );
}

export default UseMemo;