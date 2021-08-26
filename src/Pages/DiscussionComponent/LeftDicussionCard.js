import React from 'react'
import "./Styles/LeftDiscussionCard.css"
import {Link} from "react-router-dom"

function LeftDicussionCard({room}) {
    
    return (
        <Link className="left-hero" to={`/chatroom/${room.id}`}>
            <h1 className="left-roomName">{room.Roomname}</h1>
            <i class="fas fa-arrow-circle-right"></i>
        </Link>
    )
}

export default LeftDicussionCard
