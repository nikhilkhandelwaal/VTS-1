import React from 'react'
import Counter from './Counter'
import Shop from './Shop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
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
      }
    ]
  )


  return (
    <RouterProvider router={routes} />
  )
}