import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const increase5 = () => {
    setCount(prev => prev + 5);
  };

  const decrease = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={increase5}>+5</button>
      <button onClick={decrease}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
