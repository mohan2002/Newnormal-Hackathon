import React, { useState ,useRef,useEffect} from 'react'
import "./Styles/Rightpost.css"
import DateMomentUtils from "@date-io/moment";
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
  } from "@reach/combobox";
import "@reach/combobox/styles.css";
import firebase,{firestore} from '../Context/firebase/firebase'
import { useAuth } from '../Context/AuthContext';
import {useHistory} from "react-router-dom"
function RightPost() {
    
    const [ImageUrl,setImageUrl] = useState(null)
    const [selectedDate,handleDateChange] = useState(new Date())
    const {currentUser} = useAuth()
    const [user,setUser] = useState([])
    const history = useHistory()
    useEffect(() => {
        {currentUser 
            && 
            setUser(currentUser)
        }
    },[currentUser])


    const Nameref = useRef();
    const imageref = useRef();
    const categoryref = useRef()
    const eventref = useRef()
    const descref = useRef()

    async function post(e){
        e.preventDefault();
        const id = firebase.firestore().collection('postsDatabase').doc().id
       await firestore.collection("postsDatabase").doc(id).set({
           timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
           PostedbyName:Nameref.current.value,
           Email:user.email,
           PostedbyImage:user.photoURL,
           EventImage1:imageref.current.value,
           EventImage2:ImageUrl,
           EventName:eventref.current.value,
           Eventcategory:categoryref.current.value,
           Description:descref.current.value,
           EventDate:selectedDate,
       })
       history.push("/homepage")

    }

    const filechangehandler = async (e) => {
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
         setImageUrl(await fileRef.getDownloadURL())
         console.log(ImageUrl);
    }
    
    return (
        <div>
          <form className="form" onSubmit={post}>
            <div>
                <label>Name:
                <input type="text" ref={Nameref} required/>
                </label>  
            </div>

            <div>
                <label>Event Name:
                <input type="text" ref={eventref} required/>
                </label>
            </div>
            

            <div className="date_time">
                <label>Date & Time:
                <div>
                <MuiPickersUtilsProvider utils={DateMomentUtils}>
                    <DateTimePicker value={selectedDate} onChange={handleDateChange}/>
                    
                </MuiPickersUtilsProvider>
               
                </div>
                </label>
                
            </div>
           
            <div>
                <label>Image url:
                      <input type="text" ref={imageref} />
                </label>
            </div>
           
                

            <div className="center">
                <p>or</p>
                <input type="file" onChange={filechangehandler} className="custom-file-input"/>
            </div>

            <div>
                <label>Category:</label>
            <Combobox>
                <ComboboxInput aria-labelledby="demo" style={{ width: 300,display:'block',fontFamily:"font-family: 'Montserrat', sans-serif",fontSize:"1rem"}} ref={categoryref}/>
                <ComboboxPopover>
                <ComboboxList aria-labelledby="demo">
                    <ComboboxOption value="Python" />
                    <ComboboxOption value="Algorithms" />
                    <ComboboxOption value="Coding contest" />
                    <ComboboxOption value="Mechanical Engineering oriented" />
                    <ComboboxOption value="Datascience" />
                    <ComboboxOption value="AI/ML" />
                    <ComboboxOption value="UI/UX" />
                    <ComboboxOption value="Civil" />
                    <ComboboxOption value="EEE" />
                    <ComboboxOption value="ECE" />
                    <ComboboxOption value="Cloud" />
                    <ComboboxOption value="Web dev" />
                    <ComboboxOption value="App dev" />
                    <ComboboxOption value="HR" />
                </ComboboxList>
                </ComboboxPopover>
          </Combobox>
            </div>
            
            <div className="text-area">
                <label>Description:
                    <textarea ref={descref} required/>
                </label>
            </div>

           
            <button className="btn1">Post</button>
            </form>  

        </div>
    )
}

export default RightPost
