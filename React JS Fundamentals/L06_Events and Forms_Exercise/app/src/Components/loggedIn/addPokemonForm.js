import React, { Component } from 'react'


class AddPokemon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                pokemonName: '',
                pokemonImage: '',
                pokemonInfo: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const form = this.state.form
        form[e.target.dataset.name] = e.target.value
        this.setState({ form })
    }

    handleSubmit(e) {
        const { pokemonName, pokemonImage, pokemonInfo } = this.state.form
        
        if (pokemonName.trim() === '' || pokemonImage.trim() === '' || pokemonInfo.trim() === '') {
            this.setState({
                message: "Please fill all fields."
            })
            return
        }
        else {
            fetch('http://localhost:5000/pokedex/create', {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(data => {
                this.props.update(this.state.form)
                this.setState({
                     message:'',
                     form: {
                        pokemonName: '',
                        pokemonImage: '',
                        pokemonInfo: ''
                    }
                })         
            })
        }
    }

    render() {
        return (
            <form>
                <h1>Add pokemon</h1>
                <h1>{this.state.message}</h1>
                <div className="form-group">
                    <label htmlFor="input-name">Name</label>
                    <input data-name="pokemonName" value={this.state.form.pokemonName} onChange={this.handleChange} type="text" className="form-control" id="input-name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="input-image">Image</label>
                    <input onChange={this.handleChange} value={this.state.form.pokemonImage} data-name="pokemonImage" type="text" className="form-control" id="input-image" placeholder="Image" />
                </div>
                <div className="form-group">
                    <label htmlFor="input-info">Info</label>
                    <input onChange={this.handleChange} value={this.state.form.pokemonInfo} data-name="pokemonInfo" type="text" className="form-control" id="input-info" placeholder="Info" />
                </div>
                <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default AddPokemon