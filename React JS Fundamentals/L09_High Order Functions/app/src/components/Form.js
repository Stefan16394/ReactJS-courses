import React,{Component} from 'react'
import withForm from '../helpers/withForm';

class Form extends Component{

     render(){
         return(
             <div>
                 <input name='username' type='text'/>
                 <input name='password' type='text'/>
            </div>
         )
     }
}

export default Form;