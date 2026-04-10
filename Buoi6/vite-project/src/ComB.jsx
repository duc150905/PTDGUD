import React from 'react'
import { counterState } from './counterState'
import { useRecoilState } from 'recoil'
function ComB() {
    const [count, setCount] = useRecoilState(counterState);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <button onClick={() => setCount(count - 1)}>Giảm</button>
        </div>
    )
}

export default ComB