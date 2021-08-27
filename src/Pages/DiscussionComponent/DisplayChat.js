import { useState ,useEffect} from "react"
import React from 'react'
import { useAuth } from "../Context/AuthContext"
import "./Styles/DisplayChat.css"

function DisplayChat({reply}) {
    
    const {currentUser} = useAuth()
    const [user,setUser] = useState([])
    useEffect(() => {
        {currentUser 
            && 
            setUser(currentUser)
        }
    },[currentUser])


    const messageClass1 = user.uid === reply.uuid ? 'fire' : 'cool';
    const messageClass2 = user.uid === reply.uuid ? 'bro' : 'doop';
    const messageClass3 = user.uid === reply.uuid ? 'green-color' : 'blue';



    return (

        <div className={`main ${messageClass1}`}>
            <div className={`msgs ${messageClass2}`}>
                <img src={reply.image} className="msg-img"/>
                <p className={`msg-txt ${messageClass3}`}>{reply.message}</p>
            </div>       
        </div>
    )
}

export default DisplayChat
