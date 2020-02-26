import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Restaurants</h1>
      <Home/>
       
      </div>
    );



  }
}

export default App;