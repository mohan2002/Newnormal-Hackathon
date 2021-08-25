import React, { useState } from 'react'
import "./styles/Postcard.css"
import Card from "./Card"
import me from "../Images/me.png"
import demo from "../Images/demo.jpg"
function PostCard({post}) {
    const [like,setLike] = useState(false)
    const [save,setSave] = useState(false)
    function genereate(){
        console.log(post.id);
    }

    return (
        <li className="item" onClick={genereate}>
            
            <Card>
                <div className="banner">
                    <div className="left-bio">
                        <div>
                            <img src={me} className="me"/>
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
                        <div className="image">
                            <img src={post.EventImage1 || post.EventImage2} alt="props.title" className="image"/>
                        </div>
                        
                    </div> 
                    
                    <div className="bottom">
                        <div className="a">
                            <p>{post.EventDate}</p>
                        </div>
                        <div className="link-part">
                            <a className="Link" href={post.EventLink} target="_blank">Link</a>
                        </div>   
                    </div>
                </div>

                <div className="like-comment">
                    <div className={like ? "demo tooltip change" : "demo tooltip"} onClick={() => {setLike(!like)}}><i class="fas fa-heart"></i>
                    <span className="tooltiptext">{like ? "Liked" : "Like"}</span>
                    </div>
                    <div className="demo tooltip"><i class="far fa-comment-dots" ></i><span className="tooltiptext">Comment</span></div>
                    <div className={save ? "demo tooltip change-black" : "demo tooltip"} onClick={() => {setSave(!save)}}><i class="fas fa-bookmark"></i><span className="tooltiptext">{save ? "Saved" : "Save"}</span></div>
                </div>
           
       
            </Card>
        </li>
    )
}

export default PostCard
