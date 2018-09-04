import React from 'react'
import '../../styles/header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    const loggedInSection =
        <div id="profile">
            <span>Hello, {sessionStorage.getItem('username')}! </span>|<Link to='/logout'>logout</Link>
        </div>

    return (
        <header>
            <span className="logo">☃</span><span className="header">SeenIt</span>
            {sessionStorage.getItem('username') ? loggedInSection : null}
        </header>
    )
}

export default Header