import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

let date=new Date().toLocaleTimeString();

function getTime(){
  date=new Date().toLocaleTimeString();
  ReactDOM.render(App() , document.getElementById('root'));
}
setInterval(getTime,1000)

const App =()=>{
  return  (
      <div className="App">
        <header className="App-header">
            {date}
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
export default App;
