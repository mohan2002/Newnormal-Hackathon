import React,{useState,useEffect} from 'react'
import { useAuth } from './Context/AuthContext'
import Navigation from '../MainNavigation/Navigation'
import LeftCard from './Components/LeftCard'
import "./Pages Styles/Homepage.css"
import RightCard from './HomepageComponents/RightCard'
import PropagateLoader from "react-spinners/PropagateLoader";

function Homepage() {
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        },2000)
    },[])
    return (
        
        <div className={loading && "header"}>
            {
                loading ?  <PropagateLoader color={"black"} loading={loading} size={20}  />

                :
            <div>
                <Navigation/>
                <div className="part">
                    <div className="left-card">
                        <LeftCard/>
                    </div>
                    <div className="right-card">
                        {/* <h1>Hello</h1> */}
                        <RightCard/>
                    </div>
                </div>
            </div>  
            }    
        </div>
    )
}

export default Homepage
