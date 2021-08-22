import React from 'react'
import { useAuth } from './Context/AuthContext'
import Navigation from '../MainNavigation/Navigation'
function Homepage() {
    const{currentUser} = useAuth()
    {currentUser && console.log(currentUser)}
    return (
        <div>
            <Navigation/>
            <h1>Posts page</h1>
        </div>
    )
}

export default Homepage
