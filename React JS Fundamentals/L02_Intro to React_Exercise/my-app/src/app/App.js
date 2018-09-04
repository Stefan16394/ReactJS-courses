import React from 'react';
import './style/app.css';
import Contacts from './contacts.json';
import ReactDOM from 'react-dom'

let currentIndex=0;

const contactHtml = (data,index) => {
    return <div className="contact" key={data.email} data-id="id" onClick={()=>changeCurrentIndex(index)}>
        <span className="avatar small">&#9787;</span>
        <span className="title">{data.firstName} {data.lastName}</span>
    </div>
}

const renderList = () => {
    const list = []
    for (let contact of Contacts) {
        list.push(contactHtml(contact,list.length))
    }
    return list
}

const changeCurrentIndex=(index)=>{
     currentIndex=index
     ReactDOM.render(App() , document.getElementById('root'));
}

const contactDetails = (data) => {
    return (<div className="content">
        <div className="info">
            <div className="col">
                <span className="avatar">&#9787;</span>
            </div>
            <div className="col">
                <span className="name">{data.firstName}</span>
                <span className="name">{data.lastName}</span>
            </div>
        </div>
        <div className="info">
            <span className="info-line">&phone; {data.phone}</span>
            <span className="info-line">&#9993; {data.email}</span>
        </div>
    </div>)
}

const App =()=>
    (
        <div className="container">
            <header>&#9993; Contact Book</header>
            <div id="book">
                <div id="list">
                    <h1>Contacts</h1>
                    <div className="content">
                        {renderList()}
                    </div>
                </div>
                <div id="details">
                    <h1>Details</h1>
                     {contactDetails(Contacts[currentIndex])}
                </div>
            </div>
            <footer>Contact Book SPA &copy; 2017</footer>
        </div>
    );

export default App;
