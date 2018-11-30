import React, { Component } from 'react';
import '../App.css';
import Zeugma from '../images/zeugmaandbabor.jpg';
import Naples from '../images/5thavenue.jpg';
import JC from '../images/salonbyjc.jpg';
import tas from '../images/tas.jpg';
import beauty from '../images/beauty.jpg';
import amazing from '../images/amazing.jpg';
import bath from '../images/bath.jpg';
import yellow from '../images/yellow.jpg';
import one from '../images/one.png';
import two from '../images/two.png';
import tree from '../images/tree.png';
import four from '../images/four.png';
import fivestar from '../images/fivestar.png';

class Main extends Component {
    render() {
        return (
            
            <div className="main-class-for">
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


                <div>
                        <img id="comment-one" src={one} /><br/>
                        <img id="comment-two" src={two} />
                        <img id="comment-tree" src={tree} /><br/>
                        <img id="comment-four" src={four} />
                        <img id="comment-star" src={fivestar} />
                </div>


                </div>



                <div className="flex-this">
                {/* <div className="row"> */}




                <div className="first-box">

<img id="images-id" src={bath} />
<div className="massage-box">
    <h1>Massage</h1>
    <p>Over time stress builds in our body and can 
        leave us feeling run down. A relaxing massage
         can help elevate this feeling of tension 
         and promote an overall sense of well being.</p>
</div>

</div>




                    

                     <div className="first-box">

<img id="images-id" src={beauty} />
<div className="massage-box">
    <h1>Beauty</h1>
    <p>Spa beauty treatments are not only about relaxation.
     An elaborate spa therapy session is also about
      a holistic experience that  promotes healthy living.
         </p>
</div>

</div>





 <div className="first-box">

<img id="images-id" src={amazing} />
<div className="massage-box">
    <h1>Relaxation</h1>
    <p>With the busy lives we lead it’s no
     wonder we can sometimes find
      ourselves feeling stressed. This is
       why it’s essential to find a little
        ‘me time’ in daily life to keep ourselves feeling good.
         </p>
</div>

</div>


                </div>


                    <div className="scroll-to-treatments">


                     <div className="border-make">
                    <h1>To see our Services</h1>
                    <p>For more detailed information/location<br/> please click at the button below.</p>
                         <p>
                                <a className="the-a-tag" href="home">Click Here</a>
                                </p>
                    </div>


                    </div>


                        <div className="yellow-image">
                        <img  src={yellow} />
                        </div>



                          <div className="zeugma">

<div className="hours-working">
    <p id="the-hours">
        HOURS
    </p>
    <p>
       <strong>Monday-Friday</strong><br/> 10am - 5pm
    </p>
    <p>
        <strong>Saturday</strong><br/>10am - 5pm
        </p>
        <p>
       <strong>Sunday</strong><br/> Open
    </p>
</div>

<div className="contact-info">
       <p id="the-hours">CONTACT</p>

       <p>
       <a href="tel:1-562-867-5309">1-562-867-5309</a>
       </p>

       <p>galinakb@hotmail.com</p>
</div>

   <div className="location-info">
       <p id="the-hours">LOCATION</p>

       <p>5th Avenue</p>

       <p>800 5th Avenue South Unit 201#2, Naples, FL 34102</p>
   </div>
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.6553873008684!2d-81.79686567803728!3d26.142724671783515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dae10060afe8af%3A0xdbae2dee2f1a00a5!2sZeugma+Spa!5e0!3m2!1sen!2sus!4v1542152311596"></iframe> */}
</div>   

            </div>
        )
    }
}

export default Main;