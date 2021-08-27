import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import  "./Styles/Leftcard.css"
import Sticky from 'react-sticky-el';

function LeftCard() {
    const {currentUser} = useAuth()
    const [user,setUser] = useState([])

    useEffect(() => {
        {currentUser 
            && 
            setUser(currentUser)
        }
    },[currentUser])
    
    return (
        <div className="container">
            <div className="bio">
           
                <img src={user.photoURL} className="img"/>

                <p className="mail">{user.displayName  || user.email}</p>
            </div>
            
        <div>
            <Link className="bottom-part" to="/add">
                <p>Add posts</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </Link>
            
            <div className="bottom-part">
                <p>My posts</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.42zM8.48 16c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1H8.48zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>
            </div>  
        </div>
        
        </div>
    )
}

export default LeftCard
