import React, { Component } from 'react'
import PostList from '../post/PostsList'
import Navigation from '../common/Navigation';

class Catalog extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <section id="viewCatalog">
                    <PostList />
                </section>
            </div>
        )
    }
}

export default Catalog