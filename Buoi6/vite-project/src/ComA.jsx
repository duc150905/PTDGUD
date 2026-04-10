import React from 'react'
import { counterState } from './counterState'
import { useRecoilValue } from 'recoil'
function ComA() {
    const count = useRecoilValue(counterState);
    return (
        <h2>{count}</h2>
    )
}

export default ComA