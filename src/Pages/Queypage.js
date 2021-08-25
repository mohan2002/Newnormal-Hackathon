import React, { useEffect , useRef, useState} from 'react'
import Navigation from '../MainNavigation/Navigation'
import { firestore } from './Context/firebase/firebase'
import "./Pages Styles/Querypage.css"
import firebase from "./Context/firebase/firebase"
function Queypage() {
    const inputref = useRef()
    const [values,setValues] = useState([])
    
    async function sb(){
        const id = firebase.firestore().collection('query-part').doc().id
        await firestore.collection("query-part").doc(id).set({
            name:inputref.current.value,
        })
        
    }

    useEffect(() => {
        firestore.collection("query-part").onSnapshot(snapshot => {
            setValues(
                snapshot.docs.map(doc => ({
                    id:doc.id,
                    name:doc.data().name,
                }))
            )
        })
    },[])

    console.log(values);

    return (
        <div className="query-container">
            <Navigation/>
            <h1>HELLLLLLLLLLLLLLLLLLLOOOOOOOOOOOOOO</h1>
            <input type="text" ref={inputref}/>
            <button onClick={sb}>submit</button>

            {
                values.map(val => (
                    
                    <li>{val.name}</li>
                ))
            }
        </div>
    )
}

export default Queypage
