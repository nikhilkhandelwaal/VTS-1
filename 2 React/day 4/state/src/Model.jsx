import React, { useState } from 'react'

export default function Model() {

    const [showModel, setShowModel] = useState(false);

    const modelShowHide = () => {
        setShowModel(!showModel);
    }


    return (
        <div>
            <button onClick={modelShowHide}>{showModel == false ? "Show Model" : "Hide Model"}</button>
            <div className={`modal ${showModel == true ? 'modalShow' : ''}`} >
                <h2>Hey this is model</h2>
            </div>
        </div>
    )
}
