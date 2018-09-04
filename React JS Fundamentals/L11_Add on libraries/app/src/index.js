import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'

let generatorReducer = (store, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return 
        case 'DECREMENT':
            return 
        case 'CLEAR':
            return
        case 'ADD_COUNTER':
            return [...store, { index: store.length, value: 0 }]
        case 'REMOVE_COUNTER':            
            return store.splice(0,store.length-1)
        default:
            return store 
    }
}

let store = createStore(generatorReducer, [{ index: 0, value: 0 }])

let Counter = (props) => {
    return (
        <div>
            <h1>Value: {props.counter.value}</h1>
            <button onClick={()=>{
                 store.dispatch({
                     type:"INCREMENT",
                    payload:(index)=>{
                         
                    }
                 })
            }}>Increment</button>
            <button onClick={()=>{

            }}>Decrement</button>
            <button onClick={()=>{

            }}>Clear</button>
        </div>
    )
}

let CounterWrapper = () => {
    return (
        <div>
              {store.getState().map(counter=>{
                  return <Counter key={counter.index} counter={counter}/>
              })}
            <button onClick={()=>{
                store.dispatch({
                    type:"ADD_COUNTER"
                })
            }}>Add Counter</button>
            <button onClick={()=>{
                 store.dispatch({
                    type:"REMOVE_COUNTER"
                })
            }}>Remove Counter</button>
        </div>
    )
}

store.subscribe(() => {
    ReactDOM.render(<CounterWrapper />, document.getElementById('root'))
})
ReactDOM.render(<CounterWrapper />, document.getElementById('root'))

