import React, { Component } from 'react'
import '../../styles/menu.css'
import {NavLink} from 'react-router-dom'

class Navigation extends Component {

    render() {
        return (
            <div id="menu">
                <div className="title">Navigation</div>
                <NavLink to='/' className='nav'>Catalog</NavLink>
                <NavLink to='/create' className='nav'>Create Post</NavLink>
                <NavLink to='/myposts' className='nav'>My Posts</NavLink>
            </div>
        )
    }
}

export default Navigation