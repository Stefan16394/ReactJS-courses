import React, { Component } from 'react'

class BoundForm extends Component {
    constructor(props) {
        super(props)
        this.state = stateFromChildren(this.props.children)
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {React.Children.map(this.props.children, child => {
                    if (child.type === 'input' && child.props.name) {
                        return <input onChange={this.onChange} value={this.state[child.props.name]} {...child.props} />
                    }
                    return child
                })}
            </form>
        )
    }
}

function stateFromChildren(children) {
    const inputs = {}
    React.Children.forEach(children, child => {
        if (child.type === 'input' && child.props.name) {
            inputs[child.props.name] = ''
        }
    })

    return inputs
}

export default BoundForm