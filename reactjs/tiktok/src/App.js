/*
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="App">

      <h1>{counter}</h1>

      <button onClick={handleIncrease}> Increase</button>

    </div>
  );
}

export default App;
*/

import LayoutEffect from "./f8/useLayoutEffect";
import Referent from "./f8/useRef";

function App() {


  return (
    <div className="App">

      <Referent />

    </div>
  );
}

export default App;