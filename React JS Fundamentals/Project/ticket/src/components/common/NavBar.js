import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

    const unauthorized = ([<Link key='register' className="dropdown-item" to="/user/register">Register</Link>,
    <Link key='login' className="dropdown-item" to="/user/login">Login</Link>]);

    const authorized = ([<Link key='history' className="dropdown-item" to="/user/purchases">Purchase history</Link>,
    <div key='dropdown' className="dropdown-divider"></div>,
    <Link key='subscriptions' className="dropdown-item" to="/user/subscribtions">Favourite genres</Link>,
    <Link key='logout' className="dropdown-item" to="/user/logout">Logout</Link>])

    const element = props.user ? authorized : unauthorized
    let admin = sessionStorage.getItem('roleid') === "c2262186-22e8-4f94-8833-643697d221cd" ? true : false

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src='http://www.npa.ie/wp-content/uploads/2017/07/31a22162091a506f-buy-tickets.png' width="30" height="30" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    {admin ? <li className="nav-item">
                        <Link className="nav-link" to="/admin/create">Create</Link>
                    </li> : null}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Profile
                            </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {element}
                        </div>
                    </li>
                   {props.user? <li className="nav-item">
                        <Link className="nav-link" to="/genres">Genres</Link>
                    </li>:null}
                </ul>
            </div>
        </nav>
    )
}


export default NavBar