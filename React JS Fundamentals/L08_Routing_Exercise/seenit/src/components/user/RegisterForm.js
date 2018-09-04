import React, { Component } from 'react';
import requester from '../../infrastructure/requester';
import Observer from '../../infrastructure/Observer';
import auth from '../../infrastructure/auth';

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            repeatPass:''
        }
    }

    handleOnChange = (event) => {
        let changed = event.target.name
        let state = this.state
        state[changed] = event.target.value
        this.setState(state)
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        if(data.username.trim()==='' || data.password.trim()===''){
            Observer.trigger(Observer.events.notifications,{message:'Fields should not be empty.',type:'error'})
             return
        }
        if(data.password!==data.repeatPass){
            Observer.trigger(Observer.events.notifications,{message:'Passwords dont match',type:'error'})
            return
        }
        requester.post('user', '', 'basic', data).then((res) => {
            auth.login(res,"Register sucessfully.")
        }).catch(err=>{
            const message=err.responseJSON.description
            Observer.trigger(Observer.events.notifications,{message,type:'error'})
        })
        this.setState({
            username:'',
            password:'',
            repeatPass:''
        })
    }

    render() {
        return (
            <form id="registerForm" onSubmit={this.handleOnSubmit}>
                <h2>Register</h2>
                <label>Username:</label>
                <input onChange={this.handleOnChange} name="username" type="text"/>
                <label>Password:</label>
                <input onChange={this.handleOnChange}  name="password" type="password"/>
                <label>Repeat Password:</label>
                <input onChange={this.handleOnChange} name="repeatPass" type="password"/>
                <input id="btnRegister" value="Sign Up" type="submit"/>
            </form>)        
    }
}
                    
export default RegisterForm