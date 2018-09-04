import React, { Component } from 'react'
import '../../styles/comments.css'
import Observer from '../../infrastructure/Observer';
import requester from '../../infrastructure/requester';

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            author: sessionStorage.getItem('username'),
            postId: this.props.id
        }
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.content.trim() === '') {
            Observer.trigger(Observer.events.notifications, { message: 'Comment cant be empty', type: 'error' })
            return
        }

        requester.post('appdata', 'comments', 'kinvey', this.state).then((res) => {
            Observer.trigger(Observer.events.update)
        })
    }

    render() {
        return (
            <div className="post post-content">
                <form id="commentForm" onSubmit={this.handleSubmit}>
                    <label>Comment</label>
                    <textarea onChange={this.handleChange} value={this.state.content} name="content" type="text"></textarea>
                    <input type="submit" value="Add comment" id="btnPostComment" />
                </form>
            </div>
        )
    }
}

export default CommentForm