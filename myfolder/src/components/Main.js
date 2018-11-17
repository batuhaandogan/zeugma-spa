import React, { Component } from 'react';
import '../App.css';
import Zeugma from '../images/zeugmaandbabor.jpg';
import Naples from '../images/5thavenue.jpg';
import JC from '../images/salonbyjc.jpg';
import tas from '../images/tas.jpg';



class Main extends Component {
    render() {
        return (
            
            <div>
                  <head>
                         <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
                    </head>

                <div className="the-main-slides">
                <figure>
                    <img src={Zeugma} />
                    <img src={Naples} />
                    <img src={JC} />
                    <img src={tas} />
                </figure>
                </div>

                <div className="second-main-class">
                <hr/>
                    <p>In a polite society, a well maintained skincare routine is one of life’s great successes. </p>
                <hr/>
                <iframe width="620" height="415"
                    src="https://www.youtube.com/embed/VnLwQYBmmXM">
                </iframe>
                </div>



<div className="boxes-class">


                <div className="first-box">

                        <img id="-second-jc" src={JC} />
                    <div className="massage-box">
                            <h1>Massage</h1>
                            <p>Over time stress builds in our body and <br/>can 
                                leave us feeling run down. A relaxing<br/> massage
                                 can help elevate this feeling of<br/> tension 
                                 and promote an overall sense of well being.</p>
                    </div>

                </div>


                


                </div>
            </div>
        )
    }
}

export default Main;