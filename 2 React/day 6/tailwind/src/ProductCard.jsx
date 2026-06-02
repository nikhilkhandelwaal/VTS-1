import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ value }) {

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

                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
