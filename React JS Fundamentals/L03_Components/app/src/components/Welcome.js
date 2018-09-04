import React, {Component} from 'react'
import './welcome.css'

class Welcome extends Component{
      
    render(){
        let name=this.props.name || 'anonymous'
        let message=this.props.message || 'welcome back!'
       return (
           <div className="Welcome">
               <h1 className="Welcome-name">{name}</h1>
               <h2 className="Welcome-message">{message}</h2>
           </div>
       )
    }   
}

export default Welcome;