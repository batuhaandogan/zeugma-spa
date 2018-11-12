import React, { Component } from 'react';
import '../App.css';




class Home extends Component {
    render() {
        return (
       <div>
           <head>
           <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
           </head>
                <div>
                {/* className="home-page" */}
                <slider>
                    <slide><p>Slide 1</p></slide>
                    <slide><p>Slide 2</p></slide>
                    <slide><p>Slide 3</p></slide>
                    <slide><p>Slide 3</p></slide>
                </slider>
                </div>
       </div>
        )
    }
}


export default Home;