import React, { useState } from 'react'
import Table from './Table'
import Form from './Form';

export default function App() {

  const [userData, setUserData] = useState([]);

  const addUser = (data) => {
    setUserData([...userData, data]);
  }


  return (
    <div className="h-screen bg-gray-100 flex  justify-center p-6">
      <Form addUser={addUser} />
      <Table userData={userData} setUserData={setUserData} />
    </div>
  )
}
