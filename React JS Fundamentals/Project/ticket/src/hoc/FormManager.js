import React, { Component } from 'react'
import notify from '../infrastructure/notify';
import validations from '../infrastructure/validations'

export default function (Form, data) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = data.DEFAULT_STATE
        }

        handleChange = (event) => {
            const change = event.target.name
            const value = event.target.value
            this.setState({
                [change]: value
            })
        }

        handleSubmit = (event) => {
            event.preventDefault()
            const hasError=validations.user(this.state)
            if(hasError){
                notify({status:'error',message:hasError})
                return
            }
            data.send(this.state).then(user => {
                 this.props.logIn(user)
                 this.props.history.push('/')
                 notify({status:'success',message:'Logged In!'})
            }).catch(err => {
                const message=err.responseJSON.description
                notify({status:'error',message})
            })
        }

        render() {
            return <Form {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        }
    }
}