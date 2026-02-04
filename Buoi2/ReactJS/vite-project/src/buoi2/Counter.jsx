import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const cong = () => {
        setCount(count + 1);
    }
    const tru = () => {
        if (count > 0)
            setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div>
            <h2>CounterApp</h2>
            <p style={{ fontSize: '32px', color: count > 10 ? 'red' : 'black' }}>{count}</p>
            <button onClick={cong}>+</button>
            <button onClick={tru}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter