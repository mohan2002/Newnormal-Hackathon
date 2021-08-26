import React, { useEffect , useRef, useState} from 'react'
import Navigation from '../MainNavigation/Navigation'
import { firestore } from './Context/firebase/firebase'
import "./Pages Styles/Querypage.css"
import firebase from "./Context/firebase/firebase"
import { auth } from './Context/firebase/firebase'
import { useAuth } from './Context/AuthContext'
import Querycomponent from './QueryComponent/Querycomponent'
import FadeLoader from "react-spinners/FadeLoader";


function Queypage() {
    const inputref = useRef()
    const [values,setValues] = useState([])
    const {currentUser} = useAuth()
    const [user,setUser] = useState([])
    const [queries,setQueries] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        },2000)
    },[])

    useEffect(() => {
        {currentUser 
            && 
            setUser(currentUser)
        }
    },[currentUser])

    async function sb(){
        const id = firebase.firestore().collection('query-part').doc().id
        await firestore.collection("query-part").doc(id).set({
            id:id,
            query:inputref.current.value,
            Name:user.displayName,
            Photo:user.photoURL,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
            email:user.email,
        })
        await firestore.collection("query-part").doc(id).collection("replies").add({})
        
    }

    
    useEffect(() => {
        firestore.collection("query-part").orderBy('timeStamp',"desc").onSnapshot(snapshot => {
            setQueries(
                snapshot.docs.map(doc => ({
                    id:doc.id,
                    Name:doc.data().Name,
                    Email:doc.data().email,
                    photo:doc.data().Photo,
                    Query:doc.data().query,
                }))
            )
            
        })
    },[])
    

    return (
        <div className={loading && "header"}>
             {
                loading ?  <FadeLoader color={"black"} loading={loading} size={20}  />

                :
            <div className="query-container">
            <Navigation/>

                <div className="query-content">
                    <textarea type="query-txt" ref={inputref} placeholder="Enter your problem to get answer"/>
                    <button onClick={sb} className="query-btn">POST</button>
                </div>

                <div className="query-display">

                    {
                        queries.map(query => (
                            <Querycomponent query={query}/>
                        ))
                    }
                    
                </div>
            </div>
            }
           
        </div>
    )
}

export default Queypage
