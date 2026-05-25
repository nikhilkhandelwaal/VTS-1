import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Left Side */}
                    <div>
                        <h2 className="text-2xl font-bold">MyStore</h2>
                        <p className="text-gray-400 mt-2 text-sm">
                            Your one-stop shop for everything.
                        </p>
                    </div>

                    {/* Center Navigation */}
                    <nav className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            Home
                        </a>

                        <a
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            About
                        </a>

                        <a
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            Contact
                        </a>

                        <a
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            Shop
                        </a>
                    </nav>

                    {/* Right Side */}

                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                    © 2026 MyStore. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
