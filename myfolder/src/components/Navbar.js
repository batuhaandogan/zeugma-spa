import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';





class Navbar extends Component {
  render() {
    return (
      <div>
 
<navbar className="the-navbar">
<ul>
 
  <li >
  <Link to="/">Home</Link>
  </li>
  <li >

    <Link to="/About">About</Link>
  </li>
  <li >
    <Link to="/">Contact</Link>
  </li>
</ul>
</navbar>



      </div>
    );
  }
}

export default Navbar;