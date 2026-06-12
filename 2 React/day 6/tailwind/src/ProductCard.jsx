import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './Context/MainContext'

export default function ProductCard({ value }) {

    const { cart, setCart } = useContext(Context);

    const addToCart = (productItem) => {
        const isAvailable = cart.filter((item) => item.id === productItem.id);
        if (isAvailable.length > 0) {
            isAvailable[0].quantity++;
        } else {
            const newCartItem = {
                id: productItem.id,
                title: productItem.title,
                price: productItem.price,
                thumbnail: productItem.thumbnail,
                category: productItem.category,
                quantity: 1
            }
            setCart([...cart, newCartItem]);
        }

    }

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

            <img
                src={value.thumbnail}
                alt="Product"
                className="w-full h-56 object-cover"
            />

            <div className="p-5">
                <Link to={`/productdetail/${value.id}`}>
                    <h2 className="text-lg font-semibold text-gray-800">
                        {value.title} <span className='text-sm  text-gray-400'> ({value.rating})</span>
                    </h2>
                </Link>
                <h2 className="text-sm  text-gray-400">
                    {value.category}
                </h2>

                <p className="text-blue-600 font-bold mt-2">
                    {value.price}
                </p>

                <button onClick={() => addToCart(value)} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
