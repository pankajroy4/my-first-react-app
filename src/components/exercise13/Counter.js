import { useState } from "react";
export function Counter(){
  const [count, setCount] = useState(0);

  function handleIncrement(){
    setCount(prev => prev+1) // Functional Update. If we just do setCount(count+1) then this may fail Because if multiple state updates batch or come from async events, then this version can break.
  }

  function handleDecrement(){
    setCount(prev => prev -1)
  }

  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}