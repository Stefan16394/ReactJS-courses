import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import requester from '../../infrastructure/requester';
import Navigation from '../common/Navigation';
import CommentForm from '../comment/Form';
import CommentList from '../comment/CommentList';

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: ''
        }
    }

    calcTime = () => {
        if (this.state.post) {
            let dateIsoFormat = this.state.post._kmd.ect
            let diff = new Date() - (new Date(dateIsoFormat));
            diff = Math.floor(diff / 60000);
            if (diff < 1) return 'less than a minute';
            if (diff < 60) return diff + ' minute' + pluralize(diff);
            diff = Math.floor(diff / 60);
            if (diff < 24) return diff + ' hour' + pluralize(diff);
            diff = Math.floor(diff / 24);
            if (diff < 30) return diff + ' day' + pluralize(diff);
            diff = Math.floor(diff / 30);
            if (diff < 12) return diff + ' month' + pluralize(diff);
            diff = Math.floor(diff / 12);
            return diff + ' year' + pluralize(diff);

            function pluralize(value) {
                if (value !== 1) return 's';
                else return '';
            }
        }
    }

    isAuthor = () => {
        if (this.state.post) {
            return this.state.post._acl.creator === sessionStorage.getItem('userid')
        }
        return false
    }


    componentDidMount() {
        const id = this.props.match.params.id
        requester.get('appdata', `posts/${id}`, 'kinvey').then(post => {
            this.setState({
                post
            })
        })
    }

    render() {
        const creator = <ul>
            <li className="action"><Link className="editLink" to={'/edit/' + this.state.post._id}>edit</Link></li>
            <li className="action"><Link className="deleteLink" to={'/delete/' + this.state.post._id}>delete</Link></li>
        </ul>

        return (
            <div>
                <Navigation />
                <section id="viewComments">
                    <div className="post">
                        <div className="col thumbnail">
                            <a href={this.state.post.url}>
                                <img src={this.state.post.imageUrl} />
                            </a>
                        </div>
                        <div className="post-content">
                            <div className="title">
                                <a href={this.state.post.url}>
                                    {this.state.post.title}
                                </a>
                            </div>
                            <div className="details">
                                <p>{this.state.post.description}</p>
                                <div className="info">
                                    submitted {this.calcTime()} ago by {this.state.post.author}
                                </div>
                                <div className="controls">
                                    {this.isAuthor() ? creator : null}
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <CommentForm id={this.props.match.params.id} />
                    <CommentList id={this.props.match.params.id} />
                </section>
            </div>
        )
    }
}

export default Details