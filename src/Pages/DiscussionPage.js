import React, { useRef ,useState,useEffect} from 'react'
import Navigation from '../MainNavigation/Navigation'
import LeftDicussionCard from './DiscussionComponent/LeftDicussionCard'
import "./Pages Styles/Discussion.css"
import { firestore } from './Context/firebase/firebase'
import firebase from 'firebase'
import { useAuth } from './Context/AuthContext'

function DiscussionPage() {

    const roomName = useRef()
    const [rooms,setRooms] = useState([])


    const {currentUser} = useAuth()
    const [user,setUser] = useState([])
    useEffect(() => {
        {currentUser 
            && 
            setUser(currentUser)
        }
    },[currentUser])

    console.log(user);

   async function CreateRoom(e){
        e.preventDefault()
        const id = firebase.firestore().collection('DiscussionRoom').doc().id
        await firestore.collection("DiscussionRoom").doc(id).set({
            Roomname:roomName.current.value,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
            createdbyname:user.displayName,
            createdbyimage:user.photoURL,
            createdbyemail:user.email,
        })
    }

    useEffect(() => {
        firestore.collection('DiscussionRoom').orderBy('timeStamp',"desc").onSnapshot(snapshot => {
            setRooms(
                snapshot.docs.map(doc => ({
                    id:doc.id,
                    Roomname:doc.data().Roomname,
                }))
            )
        })
    },[])

    return (
        <div>
            <Navigation/>

            <div className="discussion-hero">
                <div className="discussion-left">
                    <h1 className="discussion-head">CURRENT CHAT ROOMS</h1>
                    {
                        rooms.map(room => (
                            <LeftDicussionCard room={room}/>
                        ))
                    }
                </div>
                
                <form className="discussion-right" onSubmit={CreateRoom}>
                    <h1>Create chat rooms on your own!</h1>
                    <input type="text" className="room-name" placeholder="CHAT ROOM NAME" ref={roomName} required/>
                    <button className="room-submit">CREATE</button>
                </form>
            </div>        
            
        </div>
    )
}

export default DiscussionPage
