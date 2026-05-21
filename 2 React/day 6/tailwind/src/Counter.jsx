import React, { useEffect, useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    const inc = () => {
        setCount(count + 1);
    }

    const decs = () => {
        setCount(count - 1);
    }


    useEffect(() => {
        setPrice(count * 100);
    }, [count]); // useEffect(function, dependecies)


    return (
        <div className='flex justify-center items-center gap-15 text-5xl my-5'>
            <button onClick={decs} className='bg-blue-500 p-4 px-7 rounded-3xl'>-</button>
            <h1>{count}</h1>
            <h1>{price}</h1>
            <button onClick={inc} className='bg-blue-500 p-4 px-7 rounded-3xl'>+</button>
        </div>
    )
}
