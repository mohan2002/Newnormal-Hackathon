import React, { useEffect, useState } from 'react'
import Navigation from '../../MainNavigation/Navigation'
import {useParams} from "react-router-dom"
import { firestore } from '../Context/firebase/firebase';
import { doc, getDoc } from "firebase/firestore"
import {Link} from "react-router-dom"
import "./Styles/ReplyFromQuery.css"
import RepyDisplay from './RepyDisplay';
import FadeLoader from "react-spinners/FadeLoader";



function ReplyfromQuery() {
    const [query,setQueries] = useState([])
    const [replies,setReplies] = useState([])
    let  params  = useParams()
    // console.log(params.id);
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        },2000)
    },[])

    useEffect(() => {
        firestore.collection('query-part').doc(params.id).get().then(snapshot => setQueries(snapshot.data()))
    },[])
    // console.log(query);

    useEffect(() =>{
        firestore.collection('query-part').doc(params.id).collection("replies").onSnapshot(snapshot => {
            setReplies(
                snapshot.docs.map(doc =>({
                    email:doc.data().Email,
                    name:doc.data().Name,
                    Photo:doc.data().Photo,
                    reply:doc.data().reply
                }))
            )
        })
    },[])
    console.log(replies);
    return (
        <div className={loading && "header"}>
             {
                loading ?  <FadeLoader color={"black"} loading={loading} size={20}  />

                :
                <div>
                        <Navigation/>
                        <div className="back-btn">
                            <Link to="/query" className="bck-rply">BACK</Link>
                        </div>
                        <div className="reply-hero">
                            
                            <div className="reply-frst">
                                <img src={query.Photo}/>
                            </div>
                            <div className="reply-middle">
                                <h1 className="reply-name">{query.Name}</h1>
                                <p className="reply-email">{query.email}</p>
                            </div>
                            <div className="reply-end">
                                <h1>Question:</h1>
                                <p className="reply-desc">{query.query}</p>
                            </div>
                        </div>

                        <div className="reply-from">

                            {
                                replies.map(reply => (
                                    <RepyDisplay reply={reply}/>
                                ))
                            }
                        </div>
            </div>
        }            
        </div>
    )
}

export default ReplyfromQuery
