import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {

    const [currentProduct, setCurrentProduct] = useState({});

    const { productId } = useParams();

    const getCurrentProduct = () => {
        axios.get(`https://dummyjson.com/products/${productId}`).then(
            (data) => {
                setCurrentProduct(data.data);
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }

    useEffect(() => {
        getCurrentProduct();
    }, []);


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="border-b bg-white">
                <div className="mx-auto max-w-7xl px-4 py-4">
                    <p className="text-sm text-gray-500">
                        Home / Electronics / Headphones / Premium Wireless Headphones
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-8">
                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Product Gallery */}
                    <div>
                        <div className="overflow-hidden rounded-2xl border bg-white">
                            <img
                                src={`${currentProduct.thumbnail}`}
                                alt="Product"
                                className="h-[550px] w-full object-cover"
                            />
                        </div>

                        <div className="mt-4 grid grid-cols-5 gap-3">
                            <img
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
                                alt=""
                                className="h-24 w-full cursor-pointer rounded-lg border-2 border-black object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
                                alt=""
                                className="h-24 w-full cursor-pointer rounded-lg border object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400"
                                alt=""
                                className="h-24 w-full cursor-pointer rounded-lg border object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400"
                                alt=""
                                className="h-24 w-full cursor-pointer rounded-lg border object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400"
                                alt=""
                                className="h-24 w-full cursor-pointer rounded-lg border object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Information */}
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                In Stock
                            </span>
                            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                                25% OFF
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold text-gray-900">
                            {currentProduct.title}
                        </h1>

                        <div className="mt-4 flex items-center gap-4">
                            <div className="flex text-yellow-500">
                                ★★★★★
                            </div>
                            <span className="font-medium text-gray-900">4.8</span>
                            <span className="text-gray-500">(2,348 Reviews)</span>
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-500">5,643 Sold</span>
                        </div>

                        <div className="mt-6 flex items-center gap-4">
                            <span className="text-4xl font-bold text-black">
                                {Math.floor(currentProduct.price - currentProduct.discountPercentage * currentProduct.price / 100)}
                            </span>
                            <span className="text-xl text-gray-400 line-through">
                                {currentProduct.price}
                            </span>
                            <span className="rounded-md bg-red-100 px-2 py-1 text-sm font-semibold text-red-600">
                                Save {currentProduct.discountPercentage}%
                            </span>
                        </div>

                        <p className="mt-6 leading-relaxed text-gray-600">
                            Experience industry-leading noise cancellation, exceptional sound
                            quality, and all-day comfort with the Sony WH-1000XM5. Featuring
                            advanced AI-powered microphones, up to 30 hours of battery life,
                            and premium design for music lovers and professionals.
                        </p>

                        {/* Storage/Variant */}
                        {/* <div className="mt-8">
                            <h3 className="mb-4 font-semibold">Variant</h3>

                            <div className="flex flex-wrap gap-3">
                                <button className="rounded-lg border-2 border-black px-5 py-3 font-medium">
                                    Standard Edition
                                </button>
                                <button className="rounded-lg border px-5 py-3">
                                    Travel Bundle
                                </button>
                                <button className="rounded-lg border px-5 py-3">
                                    Premium Bundle
                                </button>
                            </div>
                        </div> */}

                        {/* Quantity */}
                        <div className="mt-8">
                            <h3 className="mb-4 font-semibold">Quantity</h3>

                            <div className="flex w-fit items-center rounded-lg border bg-white">
                                <button className="px-4 py-3 text-xl">−</button>
                                <span className="border-x px-6 py-3">1</span>
                                <button className="px-4 py-3 text-xl">+</button>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-10 flex gap-4">
                            <button className="flex-1 rounded-xl border-2 border-black px-6 py-4 font-semibold transition hover:bg-gray-100">
                                Add to Cart
                            </button>

                            <button className="flex-1 rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800">
                                Buy Now
                            </button>
                        </div>

                        {/* Delivery */}
                        <div className="mt-8 rounded-2xl border bg-white p-5">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold">🚚 Free Delivery</h4>
                                    <p className="text-sm text-gray-500">
                                        Free shipping on orders above $100. Estimated delivery:
                                        2-4 business days.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">🔄 Easy Returns</h4>
                                    <p className="text-sm text-gray-500">
                                        30-day return policy with full refund guarantee.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">🛡️ Warranty</h4>
                                    <p className="text-sm text-gray-500">
                                        Official 2-year manufacturer warranty included.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details Tabs */}
                <div className="mt-16 rounded-2xl border bg-white p-8">
                    <div className="mb-8 flex gap-8 border-b pb-4">
                        <button className="border-b-2 border-black pb-2 font-semibold">
                            Description
                        </button>
                        <button className="pb-2 text-gray-500">
                            Specifications
                        </button>
                        <button className="pb-2 text-gray-500">
                            Reviews
                        </button>
                        <button className="pb-2 text-gray-500">
                            FAQs
                        </button>
                    </div>

                    <div>
                        <h2 className="mb-4 text-2xl font-bold">
                            Product Description
                        </h2>

                        <p className="mb-4 text-gray-600">
                            The Sony WH-1000XM5 sets a new benchmark in premium wireless
                            headphones. Designed with cutting-edge noise cancellation
                            technology and superior audio performance, these headphones
                            deliver an immersive listening experience whether you're
                            commuting, working, or relaxing.
                        </p>

                        <p className="text-gray-600">
                            Featuring eight microphones, advanced AI processing, and a
                            lightweight ergonomic design, the WH-1000XM5 provides unmatched
                            comfort and crystal-clear sound quality. With support for
                            high-resolution audio and long-lasting battery life, it's built
                            for audiophiles and everyday users alike.
                        </p>
                    </div>
                </div>

                {/* Specifications */}
                <div className="mt-10 rounded-2xl border bg-white p-8">
                    <h2 className="mb-6 text-2xl font-bold">
                        Technical Specifications
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex justify-between border-b py-3">
                            <span className="text-gray-500">Brand</span>
                            <span className="font-medium">Sony</span>
                        </div>

                        <div className="flex justify-between border-b py-3">
                            <span className="text-gray-500">Model</span>
                            <span className="font-medium">WH-1000XM5</span>
                        </div>

                        <div className="flex justify-between border-b py-3">
                            <span className="text-gray-500">Connectivity</span>
                            <span className="font-medium">Bluetooth 5.2</span>
                        </div>

                        <div className="flex justify-between border-b py-3">
                            <span className="text-gray-500">Battery Life</span>
                            <span className="font-medium">Up to 30 Hours</span>
                        </div>

                        <div className="flex justify-between border-b py-3">
                            <span className="text-gray-500">Charging Port</span>
                            <span className="font-medium">USB-C</span>
                        </div>

                        <div className="flex justify-between border-b py-3">
                            <span className="text-gray-500">Weight</span>
                            <span className="font-medium">250g</span>
                        </div>

                        <div className="flex justify-between border-b py-3">
                            <span className="text-gray-500">Microphones</span>
                            <span className="font-medium">8 Microphones</span>
                        </div>

                        <div className="flex justify-between border-b py-3">
                            <span className="text-gray-500">Warranty</span>
                            <span className="font-medium">2 Years</span>
                        </div>
                    </div>
                </div>

                {/* Customer Reviews */}
                <div className="mt-10 rounded-2xl border bg-white p-8">
                    <h2 className="mb-6 text-2xl font-bold">
                        Customer Reviews
                    </h2>

                    <div className="space-y-6">
                        <div className="border-b pb-6">
                            <div className="flex items-center justify-between">
                                <h4 className="font-semibold">Michael Johnson</h4>
                                <span className="text-yellow-500">★★★★★</span>
                            </div>

                            <p className="mt-2 text-gray-600">
                                Outstanding sound quality and noise cancellation. Perfect for
                                flights and working in busy environments.
                            </p>
                        </div>

                        <div className="border-b pb-6">
                            <div className="flex items-center justify-between">
                                <h4 className="font-semibold">Sarah Williams</h4>
                                <span className="text-yellow-500">★★★★★</span>
                            </div>

                            <p className="mt-2 text-gray-600">
                                Very comfortable even after wearing them for several hours.
                                Battery life is excellent.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <h4 className="font-semibold">David Miller</h4>
                                <span className="text-yellow-500">★★★★☆</span>
                            </div>

                            <p className="mt-2 text-gray-600">
                                Great product overall. Premium build quality and amazing audio
                                performance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-10">
                    <h2 className="mb-6 text-2xl font-bold">
                        You May Also Like
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="overflow-hidden rounded-2xl border bg-white"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
                                    alt=""
                                    className="h-56 w-full object-cover"
                                />

                                <div className="p-4">
                                    <h3 className="font-semibold">
                                        Premium Wireless Headphones
                                    </h3>

                                    <p className="mt-2 text-lg font-bold">$249.99</p>

                                    <button className="mt-4 w-full rounded-lg bg-black py-3 text-white">
                                        View Product
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
