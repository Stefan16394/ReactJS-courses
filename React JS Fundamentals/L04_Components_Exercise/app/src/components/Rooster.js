import React, { Component } from 'react'
import Character from './Character'

class Rooster extends Component {
 
    constructor(){
        super()
        this.state={
            characters:[]
        }
    }
     
    componentDidMount(){
        fetch('http://localhost:8000/roster').then(data=>{
            return data.json()
        }).then(parsedData=>{
            this.setState({
                characters:parsedData
            })
        })
    }

    renderCharactersHtml(){
         let html=[]
         for(let character of this.state.characters){
             html.push(<Character key={character.id} char={character}/>)
         }
         return html
    }

    render() {
        return (
            <div>
                {this.renderCharactersHtml()}
            </div>
        )
    }
}

export default Rooster