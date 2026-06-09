import React, { useEffect, useState, useRef } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'

export default function Shop() {

    const [allProducts, setAllProducts] = useState([]);
    const [showProducts, setShowProducts] = useState([]);
    const [filterPrice, setFilterPrice] = useState(10000);
    const [allCategories, setAllCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const price = useRef();

    const getAllProducts = () => {
        axios.get('https://dummyjson.com/products').then(
            (data) => {
                setAllProducts(data.data.products);
                setShowProducts(data.data.products);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    // fetch all categeories
    const getAllCategories = () => {
        axios.get('https://dummyjson.com/products/category-list').then((data) => {
            setAllCategories(data.data);
        }).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    const priceFilter = () => {
        setFilterPrice(price.current.value);
    }

    const fetchCategory = (category) => {
        console.log(category);
        setSelectedCategory(category);
        axios.get(`https://dummyjson.com/products/category/${category}`).then((data) => {
            setAllProducts(data.data.products);
            setShowProducts(data.data.products);
        }).catch((err) => console.log(err))
    }


    useEffect(() => {
        getAllProducts(); // Run this function on page refresh
        getAllCategories();
    }, []);

    useEffect(() => {
        const filterProducts = allProducts.filter((product) => {
            return product.price <= filterPrice;
        });
        setShowProducts(filterProducts);

    }, [filterPrice]);




    return (
        <>
            {/* <Header /> */}

            <section className="w-9xl mx-auto px-6 py-12 flex">
                <aside className="w-100 bg-white border-r border-gray-200 p-5 space-y-6">
                    {/* Header */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
                        <p className="text-sm text-gray-500">Refine your results</p>
                    </div>
                    {/* Price Filter */}
                    <div>
                        <h3 className="mb-3 text-sm font-medium text-gray-700">
                            Price Range
                        </h3>

                        <input
                            type="range"
                            min="0"
                            max="200"
                            defaultValue="200"
                            className="w-full accent-blue-600"
                            onChange={priceFilter}
                            ref={price}
                        />

                        <div className="mt-2 flex justify-between text-xs text-gray-500">
                            <span>$0</span>
                            <span>${filterPrice}</span>
                        </div>
                    </div>

                    {/* Rating Filter */}
                    <div>
                        <h3 className="mb-3 text-sm font-medium text-gray-700">
                            Minimum Rating
                        </h3>

                        <input
                            type="range"
                            min="1"
                            max="5"
                            step="1"
                            defaultValue="4"
                            className="w-full accent-yellow-500"
                        />

                        <div className="mt-2 flex justify-between text-xs text-gray-500">
                            <span>1★</span>
                            <span>5★</span>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="mb-3 text-sm font-medium text-gray-700">
                            Categories
                        </h3>

                        <div className="space-y-2">
                            <label
                                className={`${selectedCategory ? "" : "bg-blue-600 text-white"} flex items-center gap-2 text-sm  cursor-pointer border p-2 border-gray-200 rounded-md px-4`}
                                onClick={() => setSelectedCategory(null)}
                            >
                                All Categories
                            </label>
                            {allCategories.map((category) => (
                                <label
                                    key={category}
                                    className={` ${selectedCategory === category ? "bg-blue-600 text-white" : ""} flex items-center gap-2 text-sm text-gray-600 cursor-pointer border p-2 border-gray-200 rounded-md px-4`}
                                    onClick={() => fetchCategory(category)}
                                >
                                    {category}
                                </label>
                            ))}
                        </div>
                    </div>



                    {/* Apply Button */}
                    <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
                        Apply Filters
                    </button>
                </aside>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        showProducts.map((value, index) => {
                            return (
                                <ProductCard value={value} />
                            )
                        })
                    }
                </div>
            </section>
            {/* <Footer /> */}
        </>
    )
}
