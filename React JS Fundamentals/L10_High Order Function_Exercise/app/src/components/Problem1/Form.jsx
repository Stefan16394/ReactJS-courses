import React, { Component } from 'react'

import './warning.css'
import Observer from '../Observer';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false,
            username: '',
            password: '',
            repeatPassword: '',
            email: ''
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { username, password, repeatPassword, email } = this.state
        if(username.trim()==='' ||password.trim()==='' ||repeatPassword.trim()==='' ||email.trim()==='' ){
           Observer.trigger('error')
        }
        else{
            Observer.trigger('success')
        }
    }

    render() {
        return (         
            <div className='input-form'>
                <header><span className="title">Register</span></header>
                <form onSubmit={this.onSubmit}>
                    Username:
                     <input name='username' onChange={this.onChange} type="text" /><br />
                    Email:
                    <input name='email' onChange={this.onChange} type="text" /><br />
                    Password:
                    <input name='password' onChange={this.onChange} type="password" /><br />
                    Repeat Password:
                    <input name='repeatPassword' onChange={this.onChange} type="password" /><br />
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Form