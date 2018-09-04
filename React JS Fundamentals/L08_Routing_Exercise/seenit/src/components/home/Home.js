import React from 'react'
import Unauthorized from './Unauthorized'
import Catalog from '../catalog/Catalog'

const Home = (props) => {

    const view = props.isLoggedIn ? <Catalog /> : <Unauthorized />

    return (
        <div className='content'>
            {view}
        </div>
    )
}


export default Home