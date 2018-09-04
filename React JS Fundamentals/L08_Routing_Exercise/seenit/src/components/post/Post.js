import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/post.css'

class Post extends Component {
    calcTime = () => {
        let dateIsoFormat = this.props._kmd.ect
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

    isAuthor = () => {
         return this.props._acl.creator === sessionStorage.getItem('userid')
    }

    render() {
        this.props = this.props.post
        const isCreator =
            [<li key='edit' className="action"><Link className="editLink" to={'/edit/'+this.props._id}>edit</Link></li>,
            <li key='delete' className="action"><Link className="deleteLink" to={'/delete/'+this.props._id}>delete</Link></li>]
        
        return (
            <article className="post">
                <div className="col rank">
                    <span>{this.props.rank}</span>
                </div>
                <div className="col thumbnail">
                    <a href={this.props.url}>
                        <img alt={this.props.imageUrl} src={this.props.imageUrl} />
                    </a>
                </div>
                <div className="post-content">
                    <div className="title">
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                    </div>
                    <div className="details">
                        <div className="info">
                            submitted {this.calcTime()} ago by {this.props.author}
                        </div>
                        <div className="controls">
                            <ul>
                                <li key='comments' className="action">
                                    <Link className="commentsLink" to={'/details/'+this.props._id}>comments</Link>
                                </li>
                                {this.isAuthor()?isCreator:null}
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

export default Post