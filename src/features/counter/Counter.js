import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, inputMsg } from './CounterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const msg = useSelector((state) => state.counter.msg)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <br>
            </br>
            <button onClick={() => dispatch(inputMsg("telah melalui redux"))}>ubah message</button>
            <span>{msg}</span>
        </div>
    )
}