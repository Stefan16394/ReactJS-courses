import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import SignUpForm from './Components/SignUpForm'
import LoginForm from './Components/LoginForm'
import Home from './Components/loggedIn/Home'

class App extends Component {
  constructor(){
    super()
    let route = ''
    if(localStorage.getItem('authtoken')){
       route='loggedIn'
    }
    this.state={
        route:route
    }
    this.showCorrectForm=this.showCorrectForm.bind(this)
    this.changeRoute=this.changeRoute.bind(this)
    this.setLoggedIn=this.setLoggedIn.bind(this)
  }

  showCorrectForm(){
     if(this.state.route==='login'){
       return <LoginForm setLoggedIn={this.setLoggedIn}/>
     }
     else if(this.state.route==='loggedIn'){
        return <Home/>
     }
     return <SignUpForm/>
  }

  setLoggedIn(){
    this.setState({route:'loggedIn'})
  }

  changeRoute(){
     const route=this.state.route==='login'?'register':'login'
     this.setState({route})
     return route
  }

  render() {
    return (
      <div className="App wrapper">
        <button onClick={this.changeRoute} className="btn btn-link">Change form</button>
          {this.showCorrectForm()}
      </div>
    );
  }
}

export default App;
