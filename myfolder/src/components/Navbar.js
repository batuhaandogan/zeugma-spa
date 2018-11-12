import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';





class Navbar extends Component {
  render() {
    return (
      <div>
 
<div className="the-navbar">
<ul className="main-ul">
 
  <li className="the-li">
  <Link id="the-link" to="/">Home</Link>
  </li>
  <li className="the-li" >

    <Link id="the-link" to="/About">About</Link>
  </li>
  <li className="the-li" >
    <Link id="the-link" to="/">Contact</Link>
  </li>
</ul>
</div>



      </div>
    );
  }
}

export default Navbar;