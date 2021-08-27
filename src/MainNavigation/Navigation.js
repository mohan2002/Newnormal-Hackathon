import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Styles/Navigation.css"
import logo from '../Images/Group 1.png'
import { useAuth } from '../Pages/Context/AuthContext'
import {useHistory} from 'react-router-dom'

function Navigation() {
    const [click,setclick] = useState(false)
    const [dropclick,setdropclick] = useState(true)
    const{currentUser,logout} = useAuth()
    const history = useHistory()
    async function logoutuser(){
        try{
            await logout();
            history.push('/')
        }
        catch{
            alert("sorry")
        }
    }
    const handleClick = () => setclick(!click)
    const handledropdown = () => setdropclick(!dropclick)
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <Link className="nav-logo" to="/homepage">
                        <img src={logo} className="log"></img>
                        <h1>Event Hub</h1>
                    </Link>
                    
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-items">
                            <Link className="nav-links" to="/homepage">
                                POSTS
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link className="nav-links" to="/query">
                                QUERY
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link className="nav-links" to="/discussion">
                                DISCUSSION
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link className="nav-links" to="/about">
                                ABOUT
                            </Link>
                        </li>

                        <div className="dropdown">
                            <div className="settings">
                                <button className="nav-items btn" onClick={handledropdown}>SETTINGS</button>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
                            </div>
                            <div className={dropclick ? "hide" : "dropdown-content"}>
                                <a href="#" className="a">Profile</a>
                                <a href="#" onClick={logoutuser} className="a">Logout</a>
                            </div>
                        </div>
                        
                        
                    </ul>

                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times":"fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation

