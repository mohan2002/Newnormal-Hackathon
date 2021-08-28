import React,{useEffect,useState} from 'react'
import Navigation from '../../MainNavigation/Navigation'
import { useAuth } from '../Context/AuthContext'
import { firestore } from '../Context/firebase/firebase'
import DisplaySaved from './DisplaySaved'
import "./styles/Savedposts.css"
import {useParams} from "react-router-dom"

function Savedposts() {
    
    const [saveddata,setSaveddata] = useState([])
    let params = useParams()

    useEffect(() => {
        async function fetchmydaata(){
            await firestore.collection(params.email).onSnapshot(snapshot => {
                setSaveddata(
                    snapshot.docs.map(doc => ({
                        document_id:doc.id,
                        id:doc.data().id,
                        email:params.email,
                    }))
                )
            })
        }
        fetchmydaata()
        
    },[])

    
    return (
        <div>
            <Navigation/>
            
            <div className="displaysaved">
                {
                    saveddata.map(saved => (
                            <DisplaySaved saved={saved}/>
                    ))
                }
                 
            </div>
            
        </div>
    )
}

export default Savedposts
