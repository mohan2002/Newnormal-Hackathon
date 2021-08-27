import React from 'react'
import me from "../Images/me.png"
import "./Styles/LeftPartChat.css"
import {Link} from "react-router-dom"
function LeftPartChat({details}) {
    return (
        <div className="demo-roomss">
            <div className="demo-room-name">
                <h1 className="demo-rm-nm">ROOM NAME</h1>
                <p className="alg">{details.Roomname}</p>
            </div>
            <div className="demo-created">
                <h1 className="demo-head">CREATED BY</h1>
                <h1 className="demo-created-name">{details.createdbyname}</h1>
                <img src={details.createdbyimage} className="demo-created-img"></img>
                <p className="demo-created-mail">{details.createdbyemail}</p>
                <Link className="bck" to="/discussion">BACK</Link>
            </div>


        </div>
    )
}

export default LeftPartChat
