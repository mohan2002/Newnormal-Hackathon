import React from 'react'
import { useAuth } from './Context/AuthContext'
import Navigation from '../MainNavigation/Navigation'
import LeftCard from './Components/LeftCard'
import "./Pages Styles/Homepage.css"
import RightCard from './HomepageComponents/RightCard'

function Homepage() {
    const{currentUser} = useAuth()
    {currentUser && console.log(currentUser)}
    return (
        <div>
            <Navigation/>
            <div className="part">
                <div className="left-card">
                    <LeftCard/>
                </div>
                <div className="right-card">
                    <RightCard/>
                </div>
            </div>
        </div>
    )
}

export default Homepage
