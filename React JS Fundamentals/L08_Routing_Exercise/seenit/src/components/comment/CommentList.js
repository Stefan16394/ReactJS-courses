import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import Comment from '../comment/Comment'
import Observer from '../../infrastructure/Observer';

class CommentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasUpdated:false,
            comments: []
        }
        Observer.subscribe(Observer.events.update,this.addComment)
    }

    addComment = (comment) => {
        const state=this.state.hasUpdated
        this.setState({
            hasUpdated:!state
        });
    }

    componentDidMount() {
        const id=this.props.id
        requester.get('appdata', 'comments', 'kinvey').then(comments => {
            comments=comments.filter(x=>x.postId===id)
            this.setState({
                comments
            })
        }) 
    }

    componentDidUpdate(prevprops,prevstate) {
        if(prevstate.hasUpdated!==this.state.hasUpdated){
            const id=this.props.id
            requester.get('appdata', 'comments', 'kinvey').then(comments => {
                comments=comments.filter(x=>x.postId===id)
                this.setState({
                    comments
                })
            }) 
        }
    }

    render() {
        const noComments = <h1>No comments yet.</h1>
        return (
            <div>
                {this.state.comments.lenght === 0 ? noComments :
                    this.state.comments.map(x => <Comment key={x._id} comment={x} />)}
            </div>
        )
    }
}

export default CommentList