import React from 'react'
import { useAuth } from './Context/AuthContext'
import Navigation from '../MainNavigation/Navigation'
import LeftCard from './Components/LeftCard'
import "./Pages Styles/Homepage.css"
function Homepage() {
    const{currentUser} = useAuth()
    {currentUser && console.log(currentUser)}
    return (
        <div>
            <Navigation/>
            <div className="Left-part">
                <LeftCard/>
            </div>
        </div>
    )
}

export default Homepage
