import { useState } from "react";

import classes from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  return (
    <div className={classes.btn}>
      <h1>Counter is {counter}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;
