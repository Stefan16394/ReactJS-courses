import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider'
import Rooster from './components/Rooster'
import Details from './components/Details'
import Observer from './utils/Observer'

class App extends Component {

  constructor(){
    super()
    this.state={
      currentChar:0
    }
  }

  componentDidMount(){
    Observer.addObserver('change',(id)=>{
       this.setState({
         currentChar:id
       })
    })
  }

  render() {
    return (
      <div className="App">
          <Slider/>
          <Rooster/>
          <Details charId={this.state.currentChar}/>
      </div>
    );
  }
}

export default App;
