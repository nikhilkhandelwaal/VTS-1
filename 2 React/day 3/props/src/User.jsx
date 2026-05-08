import React from 'react'

export default function User({ userInfo }) {


    return (
        <div className='user'>
            <p>Name: {userInfo.name}</p>
            <p>Age: {userInfo.age}</p>
            <p>City: {userInfo.city}</p>
            <p>Email: {userInfo.email}</p>
        </div>
    )
}
