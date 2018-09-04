const pokemons = [
    {pokemonName:"Squirtle",pokemonImage:"https://vignette.wikia.nocookie.net/pokemontowerdefensethree/images/f/f3/Squirtle.jpg/revision/latest?cb=20160806214440",pokemonBio:'Cool water pokemon'}
]

module.exports = {
    addPokem:(data)=>{
        pokemons.push(data)
    },
    retrivePokemons:()=>{
        console.log('hello from database')
        return pokemons
    }
}