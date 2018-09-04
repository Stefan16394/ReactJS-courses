import React, { Component } from 'react'
import requester from '../../infrastructure/requester';

class DeleteComment extends Component {
  
    deleteComment = () => {
        requester.remove('appdata', `comments/${this.props.match.params.id}`, 'kinvey')
    }
    goBack = (props) => {
        this.props.history.goBack();
      }
    render() {
        return (
            <div>
                {this.deleteComment()}
                 <a style={{color:'blue',cursor: "pointer"}} className='deleteLink' onClick={this.goBack}>Back</a>
                <h1>Comment deleted</h1>
            </div>
        )
    }
}

 export default DeleteComment