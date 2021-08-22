import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import logo from '../Images/Group 1.png'
import { useAuth } from './Context/AuthContext'

function StarterPage() {
    const history = useHistory()
    const {googleMethod,githubMethod} = useAuth()
    async function GoogleLogin(){
        try{
            await googleMethod()
            history.push("/homepage")
        }
        catch{
            alert("Hey")
        }
    }
    async function gitlogin(){
        try{
            await githubMethod()
            history.push("/homepage")
        }
        catch{
            alert("SORRY")
        }
    }
    return (
        <div>
            <img src={logo}></img>
            <h1>WELCOME</h1>
            <p>We help Students/users share informations, resources ask queries and make learning easier in certain ways!!</p>
            <button onClick={GoogleLogin}>Login with Google</button>
            <button onClick={gitlogin}>Login with Git</button>
        </div>
    )
}

export default StarterPage
