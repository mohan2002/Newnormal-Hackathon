import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import { useAuth } from './Context/AuthContext'
import "./Pages Styles/StarterPage.css"


function StarterPage() {
    const history = useHistory()
    const {googleMethod,githubMethod} = useAuth()
    async function GoogleLogin(){
        try{
            await googleMethod()
            history.push("/homepage")
        }
        catch{
            alert("Hey You need to Sign in first")
        }
    }
    async function gitlogin(){
        try{
            await githubMethod()
            history.push("/homepage")
        }
        catch{
            alert("SORRY" )
        }
    }
    return (
      <div class="row">
          <div class="col1">
                 
                  <div class="imgbx">
                      
                  </div>
                  <div class="content">
                      <p>
                      ʏᴏᴜ ᴄᴀɴ ᴄʀᴇᴀᴛᴇ ᴀɴᴅ ᴘᴏsᴛ ʏᴏᴜʀ ғᴇᴀᴛᴜʀɪɴɢ ᴀɴᴅ ᴜᴘᴄᴏᴍɪɴɢ ᴇᴠᴇɴᴛs ᴍᴇɴᴛɪᴏɴɪɴɢ ᴛʜᴇ ᴅᴀᴛᴇ ᴀɴᴅ ᴛɪᴍᴇ,ᴡʜɪᴄʜ ᴡɪʟʟ ɢᴇᴛ ᴘᴏsᴛᴇᴅ ɪɴ ᴛʜᴇ ᴘᴏsᴛ ᴘᴀɢᴇ ᴏғ ᴏᴜʀ ᴡᴇʙsɪᴛᴇ
                      </p>
                   
                  </div>

                 
              
          </div>
           <div class="col2">
               <div class="bgw">
            
               </div>
               <div class="contentw">
                     <div class="h">
                         Event Hub
                     </div>
                     <div class="wel">
                     
                         Welcome to Eventhub
                     </div>
                     <div class="lo">
                     <button class="ad1" onClick={GoogleLogin}></button>
                     <button class="dd" onClick={GoogleLogin}> LOGIN WITH GOOGLE</button>
                    
                     </div>
                    
                     <div class="lo">
                     <button class="ad"  onClick={gitlogin}></button>
                     <button class="dd" onClick={gitlogin}>LOGIN WITH GITHUB</button>
                    
                     </div>
                     
                    <div class="end">
                        ENRICH YOUR SKILLSET
                    </div>
                     
               </div>
           </div>
      </div>
        
       
    )
}

export default StarterPage