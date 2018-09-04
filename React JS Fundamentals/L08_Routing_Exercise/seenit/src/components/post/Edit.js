import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import Observer from '../../infrastructure/Observer';

class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
           url:'',
           imageUrl:'',
           title:'',
           description:''
        }
    }

    componentDidMount(){
       const id=this.props.match.params.id
       requester.get('appdata',`posts/${id}`,'kinvey').then(res=>{
            this.setState({
                url:res.url,
                imageUrl:res.imageUrl,
                title:res.title,
                description:res.description
            })
       })
    }

    handleChange=(event)=>{
        
          const change=event.target.name
          const value=event.target.value
          this.setState({
              [change]:value
          })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const id=this.props.match.params.id
        const{title,url}=this.state
        if(title.trim()==='' || url.trim()===''){
            Observer.trigger(Observer.events.notifications,{message:"Please fill all required fields",type:'error'})
            return
        }
        requester.update('appdata',`posts/${id}`,'kinvey',this.state).then(()=>{
            this.props.history.push('/catalog')
        })
    }

    render() {
        return (
            <section id="viewEdit">
                <div className="submitArea">
                    <h1>Edit Link</h1>
                    <p>Please, fill out the form. A thumbnail image/description is not required.</p>
                </div>
                <div className="submitArea formContainer">
                    <form id="editPostForm" className="submitForm" onSubmit={this.handleSubmit}>
                        <label>Link URL:</label>
                        <input onChange={this.handleChange} name="url" type="text"
                            value={this.state.url} />
                        <label>Link Title:</label>
                        <input onChange={this.handleChange} name="title" type="text" value={this.state.title} />
                        <label>Link Thumbnail Image (optional):</label>
                        <input onChange={this.handleChange}  name="imageUrl" type="text"
                            value={this.state.imageUrl} />
                        <label>Comment (optional):</label>
                        <textarea onChange={this.handleChange} name="description" value={this.state.description}/>
                        <input id="btnEditPost" type="submit" value="Edit Post" />
                    </form>
                </div>
            </section>
        )
    }
}

export default EditForm;