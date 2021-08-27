import React,{useEffect,useState} from 'react'
import "./Styles/ReplyDisplay.css"
import BarLoader from "react-spinners/FadeLoader";


function RepyDisplay({reply}) {

    const demo = reply.name === undefined ? false : true;
    console.log(demo);

    return (
        <div>
            {
                demo &&
                <div className="display-hero-reply">
                    <div className="by-left">
                        <div className="by-left-top">
                            <div className="by-replied">
                                <h1>REPLIED BY</h1>
                            </div>
                            <div className="by-bio">
                                <img src={reply.Photo} className="by-image"/>
                                <div>
                                    <h1 className="by-name">{reply.name}</h1>
                                    <p className="by-email">{reply.email}</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="by-left-bottom">
                            <p>{reply.reply}</p>
                        </div>
                    </div>
                    <div className="by-right">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-2 13.17L18.83 16H4V4h16v13.17zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z"/></svg>
                    </div>
                </div>
}        
        </div>
    )
}

export default RepyDisplay
