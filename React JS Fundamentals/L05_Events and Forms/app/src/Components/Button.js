import React, {Component} from 'react'

class Button extends Component{
    onClickButton(){
        alert("clicked")
    }
    render(){
        return(
            <button onClick={this.onClickButton}>Click me</button>
        )
    }
}

export default Button