import React from 'react'

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
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                        Home
                    </a>

                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                        About
                    </a>

                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                        Contact
                    </a>

                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                        Shop
                    </a>

                    {/* Cart Button */}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200">
                        Cart
                    </button>
                </nav>
            </div>
        </header>
    )
}
