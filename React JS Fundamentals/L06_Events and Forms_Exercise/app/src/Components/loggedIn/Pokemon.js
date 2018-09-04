import React, { Component } from 'react'

class Pokemon extends Component {

    render() {
        const style = {
            display: 'inline-block',
            padding:'10px',
            maxHeight:'400px',
            maxWidth:'400px',
            overflow:'hidden',
        }
        const image={
            maxHeight:'150px'
        }
        return (
            <div>
                {this.props.pokemons.map(x => {
                   return (
                        <div key={Math.random()} style={style} >
                            <h1>{x.pokemonName}</h1>
                            <img style={image} src={x.pokemonImage} alt={x.pokemonImage}/>
                            <p>{x.pokemonInfo}</p>
                        </div>)
                })}
            </div>
        )
    }
}

export default Pokemon