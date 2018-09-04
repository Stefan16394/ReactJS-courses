import React from 'react';
import './App.css';
import rerender from './index'
import ReactDOM from 'react-dom';

let counter=0;

const incrementCounter=()=>{
  counter++
  ReactDOM.render(App(),document.getElementById('root'))
}

const App=()=>
  (
      <div className="App">
        <header className="App-header">
          {counter}
        </header>
        <p className="App-intro">
           <button onClick={incrementCounter}>Click</button>
        </p>
      </div>
    );

export default App;
