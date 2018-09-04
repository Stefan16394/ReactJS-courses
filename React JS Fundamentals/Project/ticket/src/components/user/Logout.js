import requester from "../../infrastructure/requester";
import React from 'react'
import {Redirect} from 'react-router-dom'

const Logout=(props)=>{
   requester.post('user','_logout','kinvey','').then(()=>{
           props.logOut()
     })
     return <Redirect to='/'/>
}

export default Logout;