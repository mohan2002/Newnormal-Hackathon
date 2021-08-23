import React, { useState ,useRef} from 'react'
import "./Styles/Rightpost.css"
import DateMomentUtils from "@date-io/moment";
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function RightPost() {
    
    const [selectedDate,handleDateChange] = useState(new Date())
    const Nameref = useRef();
    const emailref = useRef();
    const categoryref = useRef()
    const eventref = useRef()
    const descref = useRef()


    return (
        <div>
<h1 className="h1">Create post</h1>
          <form className="form">
            <div>
                <label>Name:</label>  
                <input type="text" ref={Nameref} required/>
            </div>

            <div>
                <label>Event Name:</label>
                <input type="text" ref={eventref} required/>
            </div>
            

            <div className="date_time">
                <label>Date & Time:</label>
                <div>
                <MuiPickersUtilsProvider utils={DateMomentUtils}>
                    <DateTimePicker value={selectedDate} onChange={handleDateChange}/>
                    
                </MuiPickersUtilsProvider>

                </div>
                
            </div>
           
            <div>
                <label>Image url:</label>
                <input type="text" ref={emailref} required/>
            </div>
           
                <p>or</p>

            <div>
                <input type="file"/>
                <button className="btn1">Upload</button>   
            </div>

            <div>
                <label>Category:</label>
                <input type="text" ref={categoryref} required/>
            </div>
            
            <div className="text-area">
                <label>Description:</label>
                <textarea ref={descref} required/>
            </div>

           
            <button className="btn1">Post</button>
            </form>  

        </div>
    )
}

export default RightPost
