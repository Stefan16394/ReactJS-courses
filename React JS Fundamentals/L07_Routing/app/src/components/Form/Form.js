import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                Username:
               <input type='text' />
                Role:
               <input type='text' value={this.props.role} disabled="true"/>
            </div>
        )
    }
}

export default Form