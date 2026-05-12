import React, { useState } from 'react'

export default function ShowHidePass() {

    const [pass, setPass] = useState(true);

    const showPass = () => {
        setPass(!pass);
    }

    return (
        <div className='pass'>
            <input type={pass == true ? 'password' : 'text'} />
            <button onClick={showPass}>{pass == true ? "Show" : "Hide"}</button>
        </div>
    )
}
