import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Details from './components/details';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Adminpage from './components/adminhomepage';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        
      <Router>
      <div className="App">
      <h1>Restaurants</h1>
        <switch>
      <Route path="/" exact component={Home}/>
      <Route path ="/details" component={Details}/>
      <Route path ="/signup" component={Signup}/>
      <Route path ="/login" component={Login}/>
      <Route path ="/admin" component={Adminpage}/>
      </switch>
      </div>
      </Router>
      </div>
 
    );
  }
}

export default App;