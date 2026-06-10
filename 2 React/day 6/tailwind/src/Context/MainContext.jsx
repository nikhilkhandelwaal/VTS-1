import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext();


export default function MainContext({ children }) {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return (
        <Context.Provider value={{ cart, setCart }}>
            {children}
        </Context.Provider>
    )
}
