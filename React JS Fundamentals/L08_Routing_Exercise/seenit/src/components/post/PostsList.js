import React,{Component} from 'react'
import Post from './Post'
import requester from '../../infrastructure/requester'
import Observer from '../../infrastructure/Observer';

class PostList extends Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        this.getPosts()
    }

    getPosts=()=>{
        Observer.trigger(Observer.events.notifications,{message:"loading",type:'loading'})
         requester.get('appdata','posts','kinvey').then(posts=>{
              this.setState({
                  posts
              })
              Observer.trigger(Observer.events.notifications,{message:"Posts loaded",type:'success'})
         })
    }

    render(){
        return(
            <div className="posts">
                    {this.state.posts.map((post,index)=><Post key={post._id} rank={index} post={post}/>)}
             </div>
        )
    }
}

export default PostList