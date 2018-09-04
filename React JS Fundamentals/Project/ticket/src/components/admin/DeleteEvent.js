import React from 'react'
import requester from '../../infrastructure/requester';
import { withAdminAuthorization } from '../../hoc/WithAuthorization';

const Delete=(props)=>{
     const id=props.match.params.id
     requester.remove('appdata',`events/${id}`,'master').then(()=>{
           props.history.push('/')
     })
     return <h1>Processing request...</h1>
}

export default withAdminAuthorization(Delete)