import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Cart() {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="border-b bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-5">
                        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Review your items before checkout
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-5">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="flex flex-col gap-4 rounded-2xl border bg-white p-5 shadow-sm sm:flex-row"
                                >
                                    {/* Product Image */}
                                    <div className="h-32 w-full rounded-xl bg-gray-200 sm:h-28 sm:w-28" />

                                    {/* Product Info */}
                                    <div className="flex flex-1 flex-col justify-between">
                                        <div>
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900">
                                                        Premium Headphones
                                                    </h3>
                                                </div>

                                                <button className="text-sm font-medium text-red-500 hover:text-red-600">
                                                    Remove
                                                </button>
                                            </div>

                                            <p className="mt-1 text-sm text-gray-500">
                                                Beauty
                                            </p>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between">
                                            {/* Quantity */}
                                            <div className="flex items-center rounded-lg border">
                                                <button className="px-3 py-2 text-gray-600">−</button>
                                                <span className="px-4 text-sm font-medium">1</span>
                                                <button className="px-3 py-2 text-gray-600">+</button>
                                            </div>

                                            {/* Price */}
                                            <p className="text-lg font-bold text-gray-900">$199.00</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div>
                            <div className="sticky top-6 rounded-2xl border bg-white p-6 shadow-sm">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    Order Summary
                                </h2>

                                {/* Coupon */}
                                <div className="mt-6">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Promo Code
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter code"
                                            className="flex-1 rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                                        />
                                        <button className="rounded-lg bg-black px-4 py-2 text-white">
                                            Apply
                                        </button>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="mt-6 space-y-4">
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>Subtotal</span>
                                        <span>$597.00</span>
                                    </div>

                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>Shipping</span>
                                        <span>$20.00</span>
                                    </div>

                                    <div className="flex justify-between text-sm text-green-600">
                                        <span>Discount</span>
                                        <span>− $50.00</span>
                                    </div>

                                    <div className="border-t pt-4">
                                        <div className="flex justify-between text-lg font-bold text-gray-900">
                                            <span>Total</span>
                                            <span>$567.00</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <button className="mt-6 w-full rounded-xl bg-black py-3 font-medium text-white transition hover:bg-gray-800">
                                    Proceed to Checkout
                                </button>

                                {/* Continue Shopping */}
                                <button className="mt-3 w-full rounded-xl border py-3 font-medium text-gray-700 transition hover:bg-gray-50">
                                    Continue Shopping
                                </button>

                                {/* Security Note */}
                                <div className="mt-6 rounded-xl bg-gray-50 p-4 text-center text-sm text-gray-500">
                                    🔒 Secure checkout with encrypted payment processing
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
