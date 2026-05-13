import React, { useState } from 'react'
import Counter from './Counter'
import ShowHidePass from './ShowHidePass'
import Model from './Model'
import List from './List'

export default function App() {

  const [cardData, setCardData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


  return (
    <div className='cardLayout'>
      {/* <Counter productPrice={50} />
      <Counter productPrice={100} />
      <Counter productPrice={150} />
      <Counter productPrice={200} />
      <Counter productPrice={250} /> */}
      {/* <ShowHidePass /> */}
      {/* <Model /> */}


      {
        cardData.map(
          (value, index) => {
            return (
              <List data={value} />
              //  <List data={1} />
              //  <List data={2} />
              //  <List data={3} />
              //  <List data={4} />
              //  <List data={5} />
            )
          }
        )
      }


    </div>
  )
}
