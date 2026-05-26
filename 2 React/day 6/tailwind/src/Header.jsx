import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Left Side - Title */}
                <h1 className="text-2xl font-bold text-gray-800">
                    MyStore
                </h1>

                {/* Right Side - Navigation */}
                <nav className="flex items-center gap-6">
                    <Link to={'/'}>
                        Home
                    </Link>
                    <Link to={'/about'}>
                        About
                    </Link>
                    <Link to={'/contact'}>
                        Contact
                    </Link>
                    <Link to={'/shop'}>
                        Shop
                    </Link>
                    <Link to={'/cart'}>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200">
                            Cart
                        </button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
