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
                    <slide><p>Scroll down for more information</p></slide>
                </slider>
                </div>

                <div className="absolute-class">
                    <hr/>
                    <h2>Our Areas of Expertise</h2>
                    <h1>Skin, Face, Nails, Permanent Makeup, Lash Extensions, Body,<br/> Hair Removal, and Hair Restoration</h1>
                    <hr id="other-hr" />

                    <div className="facial-treatments">
                        <h1>Facial Beauty Treatments</h1>

                        <div>
                            <h3>European Signature Facial $95/$115</h3>
                            <p>Deep pore, cleansing, restoring and relaxing facials.<br/>
                            Including our top rated Skin Care provider brand of Germany by Babor.
                            </p>
                        </div>

                        <div>
                            <h3>Redness Treatment Facial $110</h3>
                            <p>An absolute must if you’re breakout-prone, have clogged pores or <br/>
                                blackheads. You’ll receive a personal skin assessment followed by <br/>
                                deep pore cleansing, exfoliation, desincrustation and a medicated<br/>
                                 Amino Mask that contains enzymes, antioxidants, antiseptic and anti-inflammatory ingredients,<br/>
                                  high-frequency current is used for germicidal effects. Make this <br/>
                                  effective treatment a part of your continuing fight against acne.<br/>
                                   A series of weekly treatments are recommended for best result</p>
                        </div>
                    </div>
                </div>

       </div>
        )
    }
}


export default Home;