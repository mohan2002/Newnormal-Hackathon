import React, { useRef ,useState,useEffect} from 'react'
import "./Styles/Querycomponent.css"
import me from "../Images/me.png"
import { firestore } from '../Context/firebase/firebase';
import { Link } from 'react-router-dom';
import { auth } from '../Context/firebase/firebase';
import { useAuth } from '../Context/AuthContext';
function Querycomponent({query}) {

    const replyref = useRef()
     const {currentUser} = useAuth()
     const [user,setUser] = useState([])
     useEffect(() => {
        {currentUser 
            && 
            setUser(currentUser)
        }
    },[currentUser])

    async function ReplyPost(){
        await firestore.collection("query-part").doc(query.id).collection("replies").add({
            reply: replyref.current.value,
            Email: user.email,
            Photo:user.photoURL,
            Name:user.displayName,
        })
    }
    return (
        <div className="query-hero">
            <div className="query-top">
                <div className="query-bio">
                    <div>
                        <img src={query.photo} className="query-img"/>
                    </div>
                    <div className="name_mail">
                        <h1 className="query-name">{query.Name}</h1>
                        <p>{query.Email}</p>
                    </div>
                </div>
                <div>
                    <Link className="query-btn2" to={`/replies/${query.id}`}>REPLIES</Link>
                </div>
            </div>


            <div className="query-middle">
                <div className="query-middle-content">
                     <p>{query.Query}</p>
                </div>
            </div>


            <form className="query-bottom">
                <textarea className="txt" placeholder="Write your Solutions here" ref={replyref}/>
                <button className="query-btn1" onClick={ReplyPost} type="reset">POST</button>
            </form>
        </div>
    )
}

export default Querycomponent
