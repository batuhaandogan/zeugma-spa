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
                <div className="the-main-slides">

                <figure>
                    <img src={Zeugma} />
                    <img src={Naples} />
                    <img src={JC} />
                    <img src={tas} />
                </figure>

                </div>
            </div>
        )
    }
}

export default Main;