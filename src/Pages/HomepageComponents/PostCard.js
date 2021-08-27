import React, { useState ,useEffect} from 'react'
import "./styles/Postcard.css"
import Card from "./Card"
import me from "../Images/me.png"

import { firestore } from '../Context/firebase/firebase'
import { useAuth } from '../Context/AuthContext'
import firebase from 'firebase'


function PostCard({post}) {
    const [like,setLike] = useState(false)
    const [count,setCount] = useState()
    const [save,setSave] = useState(false)
    
    const {currentUser} = useAuth()
    const [user,setUser] = useState([])
    useEffect(() => {
        {currentUser 
            && 
            setUser(currentUser)
        }
    },[currentUser])

    console.log(user);

    const  generate = () => {
        setLike(true)
        firestore.collection("postsDatabase").doc(post.id).set({
            like: post.like + 1
        }, {merge:true})
        console.log("clicked");
    }

    const savePost = () => {
        setSave(true)
        firestore.collection(user.email).doc(post.id).set({
            id:post.id,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    return (
        <li className="item">
            
            <Card>
                <div className="banner">
                    <div className="left-bio">
                        <div>
                            <img src={post.PostedbyImage} className="me"/>
                        </div>
                        <div className="name-email">
                            <h1>{post.PostedbyName}</h1>
                            <p>{post.Email}</p>
                        </div>
                        
                    </div>
                    <div className="right">
                        <h1 className="cat">{post.EventCategory}</h1>
                    </div>
                </div>
                
                <div className="Overview">
                    
                    <div className="top">
                        <div className="event-desc">
                            <div className="event-name">
                                <p className="n">Event Name: </p>
                                <p className="m">{post.EventName}</p>
                            </div>
                            <div className="event-name">
                                <p className="n"> Description: </p>
                                <p>{post.Description}</p>
                               
                            </div>    
                        </div>
                        <div className="a">
                            <p>{post.EventDate}</p>
                        </div>
                        <div className="link-part">
                           <button><a className="Link" href={post.EventLink} target="_blank">Link</a></button> 
                        </div>   
                       
                        
                    </div> 
                    
                    <div className="bottom">
                    <div className="image">
                            <img src={post.EventImage1 || post.EventImage2} alt="props.title" className="image"/>
                        </div>
                    </div>
                </div>

                <div className="like-comment">
                    <div className={like ? "demo tooltip change" : "demo tooltip"} ><i class="fas fa-heart" onClick={generate}></i>
                    <span>{post.like}</span>
                    <span className="tooltiptext">{like ? "Liked" : "Like"}</span>
                   
                    </div>
                    <div className="demo tooltip"><i class="far fa-comment-dots" ></i><span className="tooltiptext">Comment</span></div>
                    <div className={save ? "demo tooltip change-black" : "demo tooltip"} onClick={savePost}><i class="fas fa-bookmark"></i><span className="tooltiptext">{save ? "Saved" : "Save"}</span></div>
                </div>
           
       
            </Card>
        </li>
    )
}

export default PostCard
