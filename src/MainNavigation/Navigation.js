import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Styles/Navigation.css"
import logo from '../Images/Group 1.png'
import { useAuth } from '../Pages/Context/AuthContext'
import {useHistory} from 'react-router-dom'

function Navigation() {
    const [click,setclick] = useState(false)
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
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <Link className="nav-logo" to="/homepage">
                        <img src={logo} className="log"></img>
                        <h1>EVENT HUB</h1>
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
                        <button className="nav-items btn" onClick={logoutuser}>LOGOUT</button>
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
