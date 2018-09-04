import React, { Component } from 'react'
import Pokemon from './Pokemon'
import AddPokemon from './addPokemonForm'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            pokemons: [],
        }
        this.updateAfterNewPokemon = this.updateAfterNewPokemon.bind(this)
    }
    
    updateAfterNewPokemon(newPokemon) {
        const pokemons=this.state.pokemons
        pokemons.push(newPokemon)
        this.setState({pokemons})
    }
   
    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(data => data.json())
            .then(parsedData => {
                this.setState({
                    pokemons: parsedData.pokemonColection
                })
            })
    }
    render() {
        return (
            <div>
                <AddPokemon update={this.updateAfterNewPokemon} />
                <Pokemon pokemons={this.state.pokemons} />
            </div>
        )
    }
}

export default Home