import React from 'react'
import { useAuth } from './Context/AuthContext'
import {useHistory} from 'react-router-dom'
function Homepage() {
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
    {currentUser && console.log(currentUser)}
    return (
        <div>
            <button onClick={logoutuser}>Logout</button>
        </div>
    )
}

export default Homepage
