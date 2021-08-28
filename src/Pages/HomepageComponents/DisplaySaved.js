import React, { useEffect, useState } from 'react'
import "./styles/DisplaySaved.css"
import me from "../Images/me.png"
import { firestore } from '../Context/firebase/firebase';

function DisplaySaved({saved}) {
    const [display,setDisplay] = useState([])

    useEffect(() =>{
        firestore.collection("postsDatabase").doc(saved.id).get().then(snapshot =>setDisplay(snapshot.data()))
    },[])
    function handleDelete(){
        firestore.collection(saved.email).doc(saved.document_id).delete()
    }
    return (
        <div className="saved-hero">

            <div className="saved-hrow">
                <div className="saved-image">
                    <img src={display.PostedbyImage} className="saved-me"/>
                    <div className="saved-bio">
                        <h1 className="saved-bio-name">{display.PostedbyName}</h1>
                        <p className="saved-bio-email">{display.Email}</p>
                    </div>
                </div>

                <div className="saved-desc">
                    <p>
                       {display.Description}
                    </p>
                </div>

                <div className="saved-link">
                    <a href={display.EventLink} className="link-event-saved" target="_blank">EVENT LINK</a>
                    
                </div>
                <div className="delete-saved" onClick={handleDelete}>
                    <i class="fas fa-trash-alt"></i>
                </div>
                
            </div>
            
        </div>
    )
}

export default DisplaySaved
