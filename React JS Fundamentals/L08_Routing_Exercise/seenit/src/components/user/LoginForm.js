import React, { Component } from 'react'
import requester from '../../infrastructure/requester'
import Observer from '../../infrastructure/Observer';
import auth from '../../infrastructure/auth'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',        
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
        requester.post('user', 'login', 'basic', data).then((res) => {
             auth.login(res,"Logged in succesfully!")    
        }).catch(err=>{
            const message=err.responseJSON.description
            Observer.trigger(Observer.events.notifications,{message,type:'error'})
        })
        this.setState({
            username:'',
            password:''
        })
    }

    render() {
        return (
            <form id="loginForm" onSubmit={this.handleOnSubmit}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input onChange={this.handleOnChange} name="username" type="text" value={this.state.username} />
                <label>Password:</label>
                <input onChange={this.handleOnChange} name="password" type="password" value={this.state.password} />
                <input id="btnLogin" value="Sign In" type="submit" />
            </form>
        )
    }
}

export default LoginForm