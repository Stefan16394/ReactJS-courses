import React,{Component} from 'react'
import requester from '../../infrastructure/requester';
import Purchase from './Purchase';
import { withUserAuthorization } from '../../hoc/WithAuthorization';

class PurchaseList extends Component{
      constructor(props){
          super(props)
          this.state={
             purchases:[]
          }
      }

      componentDidMount(){
          const id=sessionStorage.getItem('userid')
          requester.get('appdata',`purchases/?query={"userid":"${id}"}`,'kinvey').then(p=>{
              this.setState({
                  purchases:p
              })
          })
      }
  
      render(){
          if(this.state.purchases.length===0){
              return <h1>No recent purchases</h1>
          }
          return(
              this.state.purchases.map(p=><Purchase purchase={p} key={p._id}/>)
          )
      }
}

export default withUserAuthorization(PurchaseList)