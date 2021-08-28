import React,{useState,useEffect} from 'react'
import Navigation from '../../MainNavigation/Navigation'
import { useAuth } from '../Context/AuthContext'
import { firestore } from '../Context/firebase/firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import PostCard from '../HomepageComponents/PostCard';
import "./Styles/Profile.css"
function Profile() {
    const {currentUser} = useAuth()
    const [user,setUser] = useState([])
    const [mypost,setMypost] = useState([])
    useEffect(() => {
        {currentUser 
            && 
            setUser(currentUser)
        }
    },[currentUser])

    useEffect(() => {
        firestore.collection("postsDatabase").where('uuid','==',`${user.uid}`).onSnapshot(snapshot => {
            setMypost(
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
                    uuid:doc.data().uuid
                }))
            )
        })

    },[])

    return (
        <div>
            <Navigation/>

            <div className="profile-part">
            {
                mypost.map(post => (
                    <PostCard post={post}/>
                ))
            }
            </div>
            
        </div>
    )
}

export default Profile
