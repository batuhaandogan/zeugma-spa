import React, { Component } from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div>
<Navbar />
        
 <Switch>
   <Route exact path='/' component={Home} />
 </Switch>


      </div>
    );
  }
}

export default App;
