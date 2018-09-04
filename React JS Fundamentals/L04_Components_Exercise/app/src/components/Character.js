import React, { Component } from 'react'
import Observer from '../utils/Observer'

class Character extends Component {

    render() {
        return (
            <div onClick={() => Observer.execute('change', Number(this.props.char.id))} className='Character'>
                <img className='Character-img' src={this.props.char.url} alt={this.props.char.name} />
            </div>
        )
    }
}

export default Character