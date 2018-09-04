import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Comment extends Component {
    
    isAuhtor=()=>{
        return this.props._acl.creator===sessionStorage.getItem('userid')
    }

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

    render() {
        this.props=this.props.comment
        const isCreator=<Link to={'/comment/delete/'+this.props._id} className="deleteLink">delete</Link>
        return (
            <article className="post post-content">
                <p>{this.props.content}</p>
                <div className="info">
                    submitted {this.calcTime()} ago by {this.props.author}  {this.isAuhtor()?isCreator:null}
                </div>
            </article>
        )
    }
}

export default Comment