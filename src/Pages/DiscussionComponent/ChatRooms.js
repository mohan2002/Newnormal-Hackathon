import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import Navigation from '../../MainNavigation/Navigation';
import { firestore } from '../Context/firebase/firebase';
import LeftPartChat from './LeftPartChat';
import "./Styles/ChatRoom.css"
import firebase from 'firebase';
import { useAuth } from '../Context/AuthContext';
import DisplayChat from './DisplayChat';
import DotLoader from "react-spinners/DotLoader";


function ChatRooms() {
    let params = useParams()
    const [details,setDetails] = useState([])
    const[message,setMessage] = useState("")
    const [replies,setReplies] = useState([])

    const {currentUser} = useAuth()
    const [user,setUser] = useState([])
    useEffect(() => {
        {currentUser 
            && 
            setUser(currentUser)
        }
    },[currentUser])


    useEffect(() => {
        firestore.collection("DiscussionRoom").doc(params.id).get().then(snapshot => setDetails(snapshot.data()))
    },[])

    
    async function handleSubmit(e){
        e.preventDefault()
        await firestore.collection("DiscussionRoom").doc(params.id).collection("chats").add({
            message:message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            image:user.photoURL,
            email:user.email,
            name:user.displayName,
            uuid:user.uid,
        })
        setMessage("")
    }
    useEffect(() => {
        firestore.collection("DiscussionRoom").doc(params.id).collection("chats").orderBy("timestamp","desc").onSnapshot(snapshot => {
            setReplies(
                snapshot.docs.map(doc => ({
                    message:doc.data().message,
                    image:doc.data().image,
                    email:doc.data().email,
                    name:doc.data().name,
                    uuid:doc.data().uuid,
                }))
            )
        })
    },[])
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        },2500)
    },[])

    
    return (
        <div className={loading && "header"}>
            {
                loading ?  <DotLoader color={"black"} loading={loading} size={60}  />

                :
            <div>
            <Navigation/>
            <div className="chat-hero">
                <div className="chat-left">
                    <LeftPartChat details={details}/>
                </div>
                
                <div className="chat-right">
                    <form className="form-reply" onSubmit={handleSubmit}>
                        <input className="reply-input" value={message} onChange={(e) =>{setMessage(e.target.value)}} placeholder="TYPE YOUR MESSAGE HERE" required/>
                        <button className="reply-btn">SEND🚀</button>
                    </form>


                    <div className="displaychat">
                        {
                            replies.map(reply => (
                                <DisplayChat reply={reply}/>
                            ))
                            
                        }

                    </div>
                     
                </div>

            </div>
            </div>
}
        </div>
    )
}

export default ChatRooms
