
import { useState } from 'react';

import './Counter.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter+1)
    return (
        <div>
             <h1>Counter is {counter}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;