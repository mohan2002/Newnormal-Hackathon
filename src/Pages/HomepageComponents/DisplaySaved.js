import React, { useEffect, useState } from 'react'
import "./styles/DisplaySaved.css"
import me from "../Images/me.png"
import { firestore } from '../Context/firebase/firebase';

function DisplaySaved({saved}) {
    const [display,setDisplay] = useState([])
    console.log(saved);

    useEffect(() =>{
        firestore.collection("postsDatabase").doc(saved.id).get().then(snapshot =>setDisplay(snapshot.data()))
    },[])

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

            </div>
            
        </div>
    )
}

export default DisplaySaved
