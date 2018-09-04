import React,{Component} from 'react'
import withLogging from '../helpers/withLogging';

 class Second extends Component{
    render(){
        return(
            <div>
                Second
            </div>
        )
    }
}

Second=withLogging(Second)

export default Second;

