import requester from "../../infrastructure/requester";
import React from 'react'
import { withUserAuthorization } from "../../hoc/WithAuthorization";

const Refund=(props)=>{
      const id=props.match.params.id
      requester.remove('appdata',`purchases/${id}`,'kinvey')
      .then(p=>{
          props.history.push('/user/purchases')
      })
      
      return <h1>Processing...</h1>

}

export default withUserAuthorization(Refund)