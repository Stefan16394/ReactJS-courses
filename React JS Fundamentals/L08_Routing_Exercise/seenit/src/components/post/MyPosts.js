import React, { Component } from 'react'
import Navigation from '../common/Navigation';
import requester from '../../infrastructure/requester';
import Post from './Post';

class MyPosts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            myPosts: []
        }
    }

    componentDidMount() {
        requester.get('appdata', 'posts', 'kinvey').then(posts => {
            let myPosts = posts.filter(x => x._acl.creator === sessionStorage.getItem('userid'))
            this.setState({
                myPosts
            })
        })
    }

    render() {
        const posts=this.state.myPosts.length===0?<h1>No posts.</h1>:
                this.state.myPosts.map(x => <Post key={x._id} post={x} />)
        return (
            <div>
                <Navigation />
                <section id="viewMyPosts">
                    <div className="post post-content">
                        <h1>Your Posts</h1>
                    </div>
                    <div className="posts">
                        {posts}
                    </div>
                </section>
            </div>
        )
    }
}

export default MyPosts