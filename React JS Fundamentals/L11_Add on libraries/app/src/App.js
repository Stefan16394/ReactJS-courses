import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

const ADD_ITEM='ADD_ITEM'
const initialStore=[]

const reducer=(state,action)=>{
      if(action.type===ADD_ITEM){
         return state.concat(['new item'])
      }
      return state
}

const store=createStore(reducer,initialStore)

store.subscribe(()=>console.log(store.getState()))

const addItemAction=()=>{
  store.dispatch({
    type:ADD_ITEM
  })
}
addItemAction()


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
