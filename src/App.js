import React, { useState } from 'react';
import './App.css';
// Define the Counter component
function Counter() {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };
//function for reset
const reset=()=>{
  setCount(0)

}

  return (
    <div class='c1'>
          <div className='card container w-50' > 
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button id='b1' onClick={reset}>Reset</button>

    </div>

    </div>
    
  );
}

// Export the Counter component
export default Counter;
` `