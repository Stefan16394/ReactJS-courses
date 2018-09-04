import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import Observer from '../../infrastructure/Observer';
import Navigation from '../common/Navigation';

class Create extends Component {

    constructor(props){
        super(props)
        this.state={
            author:sessionStorage.getItem('username'),
            url:'',
            title:'',
            imageUrl:'',
            description:''
        }
    }

    handleChange=(event)=>{
        const changed=event.target.name
        const value=event.target.value
        this.setState({
            [changed]:value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const{url,title}=this.state
        if(url.trim()==='' || title.trim()===''){
            Observer.trigger(Observer.events.notifications,{message:'Please fill all required fields.',type:'error'})
            return
        }
        requester.post('appdata','posts','kinvey',this.state).then(res=>{
             this.props.history.push('/catalog')
             Observer.trigger(Observer.events.notifications,{message:'Post created.',type:'success'})
        })
    }

    render() {
        return (
            <div>
                <Navigation/>
            <section id="viewSubmit">
                <div className="submitArea">
                    <h1>Submit Link</h1>
                    <p>Please, fill out the form. A thumbnail image is not required.</p>
                </div>
                <div className="submitArea formContainer">
                    <form id="submitForm" className="submitForm" onSubmit={this.handleSubmit}>
                        <label>Link URL:</label>
                        <input onChange={this.handleChange} name="url"  type="text" />
                        <label>Link Title:</label>
                        <input  onChange={this.handleChange}name="title"  type="text" />
                        <label>Link Thumbnail Image (optional):</label>
                        <input onChange={this.handleChange}name="imageUrl" type="text" />
                        <label>Description (optional):</label>
                        <textarea onChange={this.handleChange} name="description"></textarea>
                        <input id="btnSubmitPost" value="Submit" type="submit" />
                    </form>
                </div>
            </section>
            </div>
        )
    }
}

export default Create