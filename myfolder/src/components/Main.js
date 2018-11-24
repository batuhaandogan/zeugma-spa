import React, { Component } from 'react';
import '../App.css';
import Zeugma from '../images/zeugmaandbabor.jpg';
import Naples from '../images/5thavenue.jpg';
import JC from '../images/salonbyjc.jpg';
import tas from '../images/tas.jpg';
import beauty from '../images/beauty.jpg';
import amazing from '../images/amazing.jpg';
import bath from '../images/bath.jpg'



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
                </div>



{/* <div className="boxes-class">


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


                <div className="second-box">
                    <img  src={JC} />
                    <div className="massage-box-two">
                    <h1>Massage</h1>
                            <p>Over time stress builds in our body and <br/>can 
                                leave us feeling run down. A relaxing<br/> massage
                                 can help elevate this feeling of<br/> tension 
                                 and promote an overall sense of well being.</p>
                    </div>
                </div>


                </div> */}

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

                         <p>
                                <a className="the-a-tag" href="home">Click Here</a>
                                </p>
                    </div>


                    </div>


            </div>
        )
    }
}

export default Main;