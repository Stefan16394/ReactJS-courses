import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import requester from '../../infrastructure/requester';
import Observer from '../../infrastructure/Observer'

class Logout extends Component{
    logout=()=>{
        requester.post('user','_logout','kinvey').then(res=>{
            sessionStorage.clear()
            Observer.trigger(Observer.events.logoutUser)
        }).then(()=>{
            Observer.trigger(Observer.events.notifications,{message:"Logged out!",type:'success'})
        })
    }

    render(){
        this.logout()
        return <Redirect to='/' />
    }
}

export default Logout