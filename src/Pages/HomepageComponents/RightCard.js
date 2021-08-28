import React, { useEffect, useState } from 'react'
import "./styles/RighCard.css"
import PostCard from "./PostCard"
import {firestore} from "../Context/firebase/firebase"
import moment from 'moment'

function RightCard() {
    const [posts,setPosts] = useState([])



    useEffect(() => {
        firestore.collection("postsDatabase").orderBy('timeStamp',"desc").onSnapshot(snapshot => {
            setPosts(
                snapshot.docs.map(doc =>({
                    id:doc.id,
                    PostedbyName:doc.data().PostedbyName,
                    Email:doc.data().Email,
                    PostedbyImage:doc.data().PostedbyImage,
                    EventName:doc.data().EventName,
                    Description:doc.data().Description,
                    EventDate:doc.data().EventDate,
                    EventCategory:doc.data().Eventcategory,
                    EventImage1:doc.data().EventImage1,
                    EventImage2:doc.data().EventImage2,
                    EventLink:doc.data().EventLink,
                    like:doc.data().like,
                }))
            )
        })

    },[])
    

    return (
        <div>
        <ul className="list">
            {posts.map(post => (
            <PostCard post={post}/>
            ))}



        </ul>
        </div>
    )
}

export default RightCard
