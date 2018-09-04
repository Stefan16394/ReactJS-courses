import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            user:{
                username:'',
                password:''
            }
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
         let inputName=event.target.name
         let inputValue=event.target.value

         let user=this.state.user

         user[inputName]=inputValue
        
         this.setState({user})
    }

    handleSubmit(event){
        console.log(this.state.user)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Username:
                <input onChange={this.handleChange} type='text' name='username' /><br/>
                Password:
                <input onChange={this.handleChange} type='password' name='password'/><br/>
                <select className='select' onChange={this.handleChange} multiple={true} >
                   <option name='A' value='A'>A</option>
                   <option name='B' value='B'>B</option>
                   <option name='C' value='C'>C</option>
                </select>
                
                <input type='submit' value='submit'/>
            </form>
        )
    }
}

export default Form