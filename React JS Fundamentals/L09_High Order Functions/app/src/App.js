import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Second from './components/Second';
import Form from './components/Form';
import Form2 from './components/Form2';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Home/>
          <Second/> 
          <Form2/>
      </div>
    );
  }
}

export default App;
