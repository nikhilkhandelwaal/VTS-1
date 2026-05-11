import React, { useState } from 'react'

export default function Counter({ productPrice }) {

    // How to create a state in react
    // [ state_name, state_modifier] = useState(0)
    const [count, setCount] = useState(1);

    const decs = () => {
        setCount(count - 1);
        // 
    }

    const inc = () => {
        setCount(count + 1);
        // setCount(2+1) => setCount(3)
    }


    return (
        <div className='counter'>
            <h1>{productPrice}</h1>
            <button onClick={decs}>-</button>
            <h1>{count}</h1>
            <button onClick={inc}>+</button>
            <h1>{productPrice * count}</h1>
        </div>
    )
}
