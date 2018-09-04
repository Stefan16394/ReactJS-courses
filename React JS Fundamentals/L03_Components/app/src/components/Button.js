import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props)
        this._click = this._click.bind(this)
        this.state = {
            counter: 0
        }
    }
    _click() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }
    render() {
        return (
            <button  onClick={this._click}>Clicked {this.state.counter} times</button>
        )
    }
}

export default Button;