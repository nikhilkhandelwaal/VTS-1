import React from 'react'
import Header from './Header'
import Footer from './Footer'
import User from './User'

function App() {

  const userData = [
    {
      name: "Shubh",
      age: 25,
      city: "Delhi",
      email: "shubh@gmail.com"
    },
    {
      name: "Shubham",
      age: 19,
      city: "Jaipur",
      email: "shubham@gmail.com"
    },
    {
      name: "Nancy",
      age: 15,
      city: "Banglore",
      email: "nancy@gmail.com"
    },
    {
      name: "Nikhil",
      age: 20,
      city: "Kota",
      email: "nikhil@gmail.com"
    }
  ]


  return (
    <div>
      <Header />
      <h1>This is middle Section</h1>
      <div className='userData'>
        <User userInfo={userData[0]} />
        <User userInfo={userData[1]} />
        <User userInfo={userData[2]} />
        <User userInfo={userData[3]} />
      </div>
      <Footer />
    </div>
  )
}

export default App
