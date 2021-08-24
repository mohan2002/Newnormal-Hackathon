import Navigation from '../MainNavigation/Navigation'
import $ from 'jquery'
import './Pages Styles/about.css'
import React, { Component } from 'react'

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
            opacity:0.5,
        },1000,)   
        $('.card2').hide(); 
        $('.card3').hide();
        $('.card4').hide()
        $('.cpara1').show();
    }

    animatecard2=()=>{
        $('.card2').animate({
            marginTop:"5%",
            width:'800px',
            height:'400px',
            opacity:0.5,
        },1000,)   
        $('.card1').hide(); 
        $('.card3').hide();
        $('.card4').hide()
        $('.cpara2').show();
    }

    animatecard3=()=>{
        $('.card3').animate({
            marginTop:"5%",
            width:'800px',
            height:'400px',
            opacity:0.5,
        },1000,)   
        $('.card1').hide(); 
        $('.card2').hide();
        $('.card4').hide()
        $('.cpara3').show();
    }

    animatecard4=()=>{
        $('.card4').animate({
            marginTop:"5%",
            width:'800px',
            height:'400px',
            opacity:0.5,
        },1000,)   
        $('.card1').hide(); 
        $('.card2').hide();
        $('.card3').hide()
        $('.cpara4').show();
    }
 
    render(){
        return (
            <>
                <Navigation/>   
                <h1><center>About</center></h1>
                <div className="body">
                    <div className="cards1">
                        <div className="card1" onClick={this.animatecard1}>
                            <div className="card-image"></div>
                            <div className="card-text">This is midhun here hi helo</div>
                            <p className="cpara1">We here are for u</p>
                        </div>
                        <div className="card2" onClick={this.animatecard2}>
                            <div className="card-image"></div>
                            <div className="card-text">This is midhun here hi helo</div>
                            <p className="cpara2">We here are for u</p>
                        </div>
                    </div>
                    <div className="cards2">
                        <div className="card3" onClick={this.animatecard3}>
                            <div className="card-image"></div>
                            <div className="card-text">This is midhun here hi helo</div>
                            <p className="cpara3">We here are for u</p>
                        </div>
                        <div className="card4" onClick={this.animatecard4}>
                            <div className="card-image"></div>
                            <div className="card-text">This is midhun here hi helo</div>
                            <div className="cpara4">
                                
                                <p>We here are for u</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </>
        )
    } 
}

export default About