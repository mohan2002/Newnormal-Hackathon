import React, { useState ,useRef} from 'react'
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

function RightPost() {
    
    const [selectedDate,handleDateChange] = useState(new Date())
    const Nameref = useRef();
    const emailref = useRef();
    const categoryref = useRef()
    const eventref = useRef()
    const descref = useRef()


    return (
        <div>
          <form className="form">
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
                      <input type="text" ref={emailref} required/>
                </label>
            </div>
           
                

            <div className="center">
                <p>or</p>
                <input type="file"/>
                <button className="btn1">Upload</button>   
            </div>

            <div>
                <label>Category:</label>
            <Combobox ref={categoryref}>
                <ComboboxInput aria-labelledby="demo" />
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
