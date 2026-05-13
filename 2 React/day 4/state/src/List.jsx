import React from 'react'

export default function List({ data }) {
    return (
        <div className="card">
            <img src="https://via.placeholder.com/300x180" alt="Card Image" />

            <h2>Card Title {data}</h2>

            <p>
                This is a simple responsive card using minimal HTML and CSS.
            </p>

            <button>Read More</button>
        </div>
    )
}
