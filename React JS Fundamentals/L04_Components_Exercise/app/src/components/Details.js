import React,{Component} from 'react'

class Details extends Component{

    constructor(props){
        super(props)
        this.state={
            character:''
        }
    }
   
    componentDidUpdate(prevProps){
        if(prevProps.charId!==this.props.charId){
            fetch('http://localhost:8000/character/'+this.props.charId).then(data=>{
                return data.json()
            }).then(parsedData=>{              
                this.setState({
                    character:parsedData
                })
            })
        }
    }

    componentDidMount(){
        fetch('http://localhost:8000/character/0').then(data=>{
            return data.json()
        }).then(parsedData=>{        
            this.setState({
                character:parsedData
            })
        })
    }

    render(){
        return(
            <div className='Details'>
                <img className='Character-img' src={this.state.character.url} alt='character' />
                <p className='Details-bio'>{this.state.character.bio}</p>
            </div>
        )
    }
}

export default Details