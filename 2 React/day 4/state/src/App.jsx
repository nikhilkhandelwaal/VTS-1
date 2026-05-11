import React from 'react'
import Counter from './Counter'

export default function App() {
  return (
    <div>
      <Counter productPrice={50} />
      <Counter productPrice={100} />
      <Counter productPrice={150} />
      <Counter productPrice={200} />
      <Counter productPrice={250} />
    </div>
  )
}
