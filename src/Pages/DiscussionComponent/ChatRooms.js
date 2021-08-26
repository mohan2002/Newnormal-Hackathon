import React from 'react'
import {useParams} from "react-router-dom"
import Navigation from '../../MainNavigation/Navigation';
import LeftPartChat from './LeftPartChat';
import "./Styles/ChatRoom.css"

function ChatRooms() {
    let params = useParams()
    console.log(params.id);
    return (
        <div>
            <Navigation/>
            <div className="chat-left">
                <LeftPartChat/>
            </div>
            
            <div className="chat-right">

            </div>
        </div>
    )
}

export default ChatRooms
