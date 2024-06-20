import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);  
  };

  function isPrime(num)
{      
 if(num <= 1)
  {
    return false;
  }
  for(let i = 2; i < num; i++)
    {
      if(num % i === 0)
        {
          return false;
        }
    }
    return true;
}
     
  return (
    <div className="container" style={{textAlign:"center", marginTop:"200px",backgroundColor:"Orange",width:"50%",margin:"auto", padding:"10px 20px"}}>
      <h1 style={{textAlign:"center", color:"white"}}>Welcome to Counter 2.0</h1>
      <div className="buttons">
        <button onClick={handleDecrement} disabled={count==0 }>-1</button>
        <button onClick={handleIncrement}>+1</button>
      </div>
      <button onClick={handleReset}>Reset Count</button>
      <h1 style={{color:"white"}}>Count: {count}</h1>
      <p style={{color:"white",fontWeight:"bold"}} >This Number is: {count % 2 === 0 ? 'Even' : 'Odd'}</p>
      <p style={{color:"white",fontWeight:"bold"}}>Prime Number: {isPrime(count) ? 'true' : 'false'}</p>
    </div>
  );
}



export default Counter;