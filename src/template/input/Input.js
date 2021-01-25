import React from 'react'
import './style.scss'
function Input({autoComplete, icon, autoFocus}) {
    return (
        <React.Fragment>
            <span>
                <input autoFocus={autoFocus} autoComplete={autoComplete} className="basic-slide" id="name" type="text" placeholder="search or start new chat" /><label htmlFor="name"><img src={icon} width="15px" style={{marginTop:'-4px'}} /></label>
            </span>

        </React.Fragment>
    )
}

export default Input
