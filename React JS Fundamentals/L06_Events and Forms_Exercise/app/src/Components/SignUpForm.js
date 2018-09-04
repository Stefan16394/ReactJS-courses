import React, { Component } from 'react'


class SignUpForm extends Component {

    constructor(){
        super()
        this.state={
            form:{
                email:'',
                name:'',
                password:''
            }
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
        fetch('http://localhost:5000/auth/signup', {
            method:'POST',
            body:JSON.stringify(this.state.form),
            headers:{
                'Content-type':'application/json'
            }
        }).then(data=>{
           return data.json()
        }).then(res=>{
            if(res.success){
                this.setState({
                    message:"Registation successfull,you may now login",
                    form:{
                        email:'',
                        password:'',
                        name:''
                    }
                })
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
        })
    }


    render() {
        return (
            <form>
                <h1>Register</h1>
                <h1>{this.state.message}</h1>
                <div className="form-group">
                    <label htmlFor="input-email">Email address</label>
                    <input data-name="email" value={this.state.form.email} onChange={this.handleChange} type="email" className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="input-username">Username</label>
                    <input data-name="name" value={this.state.form.name} onChange={this.handleChange} type="text" className="form-control" id="input-username" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="input-password">Password</label>
                    <input onChange={this.handleChange} value={this.state.form.password} data-name="password" type="password" className="form-control" id="input-password" placeholder="Password" />
                </div>
                <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default SignUpForm