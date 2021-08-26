import Navigation from '../MainNavigation/Navigation'
import $ from 'jquery'
import './Pages Styles/about.css'
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             toggle:false,
        }
    }
    
    animatecard1=()=>{
        $('.card1').animate({
            marginTop:"5%",
            width:'800px',
            height:'400px',
            // opacity:0.5,
        },1000,)
        $('.image2').hide()
        $('.cbutton1').show(1000)
        $('.card2').hide(); 
        $('.card3').hide();
        $('.card4').hide()
        $('.card-text').show();
        $('.abt1').hide();
        $('.image1').show().animate({
            width:'850px',
            height:'550px',
            // objectFit:'cover',
            marginTop:'0%',
            opacity:0.8,
        },1000,)
    }

    animatecard2=()=>{
        $('.card2').animate({
            marginTop:"5%",
            width:'800px',
            height:'400px',
            // opacity:0.5,
        },1000,) 
        $('.image2').hide()  
        $('.cbutton2').show(1000)
        $('.card1').hide(); 
        $('.card3').hide();
        $('.card4').hide()
        $('.abt2').hide();
        $('.card-text').show();
        $('.image1').show().animate({
            width:'850px',
            height:'550px',
            // objectFit:'cover',
            marginTop:'0%',
            opacity:0.8,
        },1000,)
    }

    animatecard3=()=>{
        $('.card3').animate({
            marginTop:"5%",
            width:'800px',
            height:'400px',
            // opacity:0.5,
        },1000,)   
        $('.image2').hide()  
        $('.cbutton3').show(1000)
        $('.card1').hide(); 
        $('.card2').hide();
        $('.card4').hide();
        $('.abt3').hide();
        $('.card-text').show();
        $('.image1').show().animate({
            width:'850px',
            height:'550px',
            // objectFit:'cover',
            marginTop:'0%',
            opacity:0.8,
        },1000,)
    }

    animatecard4=()=>{
        $('.card4').animate({
            marginTop:"5%",
            width:'800px',
            height:'400px',
            // opacity:0.5,
        },1000,) 
        $('.image2').hide()
        $('.cbutton4').show(1000)  
        $('.card1').hide(); 
        $('.card2').hide();
        $('.card3').hide()
        $('.abt4').hide();
        $('.card-text').show();
        $('.image1').show().animate({
            width:'850px',
            height:'550px',
            // objectFit:'cover',
            marginTop:'0%',
            opacity:0.8,
        },1000,)
    }
    refreshPage=()=> {
        window.location.reload(false);
      }
    render(){
        return (
            <>
                <Navigation/>   
                <h1><center>About</center></h1>
                <div className="body">
                    <div className="cards1">
                        <div className="card1" onClick={this.animatecard1}>
                            <img className="image2" src="https://t3.ftcdn.net/jpg/03/64/89/04/360_F_364890441_7shzRuvH4jxbEUhpv4yHoXntHrMCbYxY.jpg"/>
                            <h2 className="abt1">How it Helps</h2>
                            <img className="image1" src="https://media3.giphy.com/media/iJ0uMmH42ghycmSRRV/giphy.gif" alt="Snow"/>
                            <button className="cbutton1" onClick={this.refreshPage}>Back</button>
                            <div className="card-text"><b>One of the many problems in recent days is to find a common place to find the different opportunities to gain knowloedge,
                            we are not here to give u knowledge or to teach any course but we here are a part of it.
                            We help you guys find different opportunities in forms of events </b></div>
                        </div>
                        <div className="card2" onClick={this.animatecard2}>
                            <img className="image2" src="https://t3.ftcdn.net/jpg/03/64/89/04/360_F_364890441_7shzRuvH4jxbEUhpv4yHoXntHrMCbYxY.jpg"/>
                            <h2 className="abt2">How it Helps</h2>
                            <img className="image1" src="https://media3.giphy.com/media/iJ0uMmH42ghycmSRRV/giphy.gif" alt="Snow"/>
                            <button className="cbutton2" onClick={this.refreshPage}>Back</button>
                            <div className="card-text">One of the many problems in recent days is to find a common place to find the different opportunities to gain knowloedge,
                            we are not here to give u knowledge or to teach any course but we here are a part of it.
                            We help you guys find different opportunities in forms of events </div>
                        </div>
                    </div>
                    <div className="cards2">
                        <div className="card3" onClick={this.animatecard3}>
                            <img className="image2" src="https://t3.ftcdn.net/jpg/03/64/89/04/360_F_364890441_7shzRuvH4jxbEUhpv4yHoXntHrMCbYxY.jpg"/>
                            <h2 className="abt3">How it Helps</h2>
                            <img className="image1" src="https://media3.giphy.com/media/iJ0uMmH42ghycmSRRV/giphy.gif" alt="Snow"/>
                            <button className="cbutton3" onClick={this.refreshPage}>Back</button>
                            <div className="card-text">One of the many problems in recent days is to find a common place to find the different opportunities to gain knowloedge,
                            we are not here to give u knowledge or to teach any course but we here are a part of it.
                            We help you guys find different opportunities in forms of events </div>
                        </div>
                        <div className="card4" onClick={this.animatecard4}>
                            <img className="image2" src="https://t3.ftcdn.net/jpg/03/64/89/04/360_F_364890441_7shzRuvH4jxbEUhpv4yHoXntHrMCbYxY.jpg"/>
                            <h2 className="abt4">How it Helps</h2>
                            <img className="image1" src="https://media3.giphy.com/media/iJ0uMmH42ghycmSRRV/giphy.gif" alt="Snow"/>
                            <button className="cbutton4" onClick={this.refreshPage}>Back</button>
                            <div className="card-text">One of the many problems in recent days is to find a common place to find the different opportunities to gain knowloedge,
                            we are not here to give u knowledge or to teach any course but we here are a part of it.
                            We help you guys find different opportunities in forms of events </div>
                        </div>
                    </div>
                    
                </div>
                
            </>
        )
    } 
}

export default About