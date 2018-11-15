import React, { Component } from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Main from "./components/Main"


class App extends Component {
  render() {
    return (
      <div>
<Navbar />
        
 <Switch>
   <Route exact path='/' component={Main} />
   <Route exact path='/Home' component={Home} />
 </Switch>


      </div>
    );
  }
}

export default App;
