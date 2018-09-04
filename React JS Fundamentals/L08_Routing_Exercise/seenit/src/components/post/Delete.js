import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import requester from '../../infrastructure/requester';
import Observer from '../../infrastructure/Observer';

class Delete extends Component {

    deletePost = () => {
        requester.remove('appdata', `posts/${this.props.match.params.id}`, 'kinvey').then(() => {
            Observer.trigger(Observer.events.notifications, { message: "Success", 'type': 'success' })
        })
    }

    render() {
        this.deletePost()
        return (
            <div>
                <Link to='/catalog'>Go back</Link>
                <h1>Post deleted</h1>
            </div>
        )
    }
}


export default Delete