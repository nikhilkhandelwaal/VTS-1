import React from 'react'
import Counter from './Counter'
import Shop from './Shop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import ProductDetail from './ProductDetail'


export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: '',
            element: <Home />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/shop",
            element: <Shop />
          },
          {
            path: "/cart",
            element: <Cart />
          },
          {
            path: "/productdetail/:productId",
            element: <ProductDetail />
          }
        ]
      }
    ]
  )


  return (
    <RouterProvider router={routes} />
  )
}