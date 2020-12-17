import './App.css';
import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    const newCount = count - 1;
    setCount(newCount);
  }

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  return ( 
    <div>
      <div className="page-title">
        <h1>Hello from AWS Amplify</h1>
      </div>
      <div className="counter">
        <p>Counter: {count}</p>
        <button onClick={() => decreaseCount()}>-</button>
        <button onClick={() => increaseCount()}>+</button>
      </div>
    </div>
  );
}
 
export default App;

