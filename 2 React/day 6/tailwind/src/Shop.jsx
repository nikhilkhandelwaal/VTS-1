import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ProductCard from './ProductCard'
import axios from 'axios';

export default function Shop() {

    const [allProducts, setAllProducts] = useState([]);

    const getAllProducts = () => {
        axios.get('https://dummyjson.com/products').then(
            (data) => {
                setAllProducts(data.data.products);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(() => {
        getAllProducts(); // Run this function on page refresh
    }, [])


    return (
        <>
            <Header />
            <section className="max-w-7xl mx-auto px-6 py-12">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Featured Products
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Browse our latest collection
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        allProducts.map((value, index) => {
                            return (
                                <ProductCard value={value} />
                            )
                        })
                    }
                </div>
            </section>
            <Footer />
        </>
    )
}
