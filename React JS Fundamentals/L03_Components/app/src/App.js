import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Button from './components/Button'
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
           <Welcome name="stefko" message="how are you?"/>
           <Welcome name="ivanco" message="please GTFO of here!"/>
           <Button/>
           <Timer/>
        </p>
      </div>
    );
  }
}

export default App;
