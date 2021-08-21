import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Images/Group 1.png'

function StarterPage() {
    return (
        <div>
            <img src={logo}></img>
            <h1>WELCOME</h1>
            <p>We help Students/users share informations, resources ask queries and make learning easier in certain ways!!</p>
            <Link to="/login">LOGIN</Link>
            <Link>SIGNUP</Link>
        </div>
    )
}

export default StarterPage
