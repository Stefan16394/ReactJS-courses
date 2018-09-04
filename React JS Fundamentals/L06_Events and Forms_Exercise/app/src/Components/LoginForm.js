import React, { Component } from 'react'

class LoginForm extends Component {

    constructor(){
        super()
        this.state={
            form:{}
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e){
        const form=this.state.form
        form[e.target.dataset.name]=e.target.value
        this.setState({form})
    }

    handleSubmit(e){
        fetch('http://localhost:5000/auth/login', {
            method:'POST',
            body:JSON.stringify(this.state.form),
            headers:{
                'Content-type':'application/json'
            }
        }).then(data=>{
           return data.json()
        }).then(res=>{
            if(res.success && res.token){
                localStorage.setItem('authtoken',res.token)
                this.props.setLoggedIn()
            }
            else{      
                    let message=''
                    if(!res.errors){
                        message=res.message
                    }
                    else{
                        const keys=Object.keys(res.errors)
                        message=res.errors[keys.shift()]
                    }            
                    this.setState({
                        message
                    })
                }    
                console.log(res)  
        }).catch(err=>console.log(err))
    }

    render() {
        return (
            <form>
                <h1>Login</h1>
                <h1>{this.state.message}</h1>
                <div className="form-group">
                    <label htmlFor="input-email">Email address</label>
                    <input data-name="email" onChange={this.handleChange} type="email" className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="input-password">Password</label>
                    <input onChange={this.handleChange} data-name="password" type="password" className="form-control" id="input-password" placeholder="Password" />
                </div>
                <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default LoginForm