import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import { withAdminAuthorization } from '../../hoc/WithAuthorization';
import validations from '../../infrastructure/validations';
import notify from '../../infrastructure/notify';
import event from '../models/event'

class EventForm extends Component {
    constructor(props) {
        super(props)
        this.state =event.DEFAULT_STATE
    }

    handleChange = (event) => {
        const change = event.target.name
        const value = event.target.value
        this.setState({
            [change]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const hasError=validations.event(this.state)
        if(hasError){
            notify({status:'error',message:hasError})
            return
        }

        requester.post('appdata', 'events', 'kinvey', this.state).then(event => {
            notify({status:'success',message:'Event created'})
            this.props.history.push(`/details/${event._id}`)
        })
    }

    render() {
        const style = {
            padding: "20px",
            maxWidth: "400px",
            margin: "auto",
        }
        return (
            <form style={style} onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Band name</label>
                    <input name='band' type="text" className="form-control" value={this.state.band} onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter band" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Image</label>
                    <input name='imageUrl' type="text" className="form-control" value={this.state.imageUrl} onChange={this.handleChange} placeholder="Enter URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Youtube link</label>
                    <input name='youtube' type="text" className="form-control" value={this.state.youtube} onChange={this.handleChange} placeholder="Enter URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <textarea name='description' type="text" className="form-control" value={this.state.description} onChange={this.handleChange} placeholder="Description" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Date</label>
                    <input name='date' type="datetime-local" className="form-control" value={this.state.date} onChange={this.handleChange} placeholder="Enter venue date" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Tickets</label>
                    <input name='tickets' type="number" min="1" className="form-control" value={this.state.tickets} onChange={this.handleChange} placeholder="Enter number of tickets" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price</label>
                    <input name='price' type="number" min="1" className="form-control" value={this.state.price} onChange={this.handleChange} placeholder="Enter ticket price" />
                </div>
                <select name ='genre' onChange={this.handleChange} value={this.state.genre} className="form-control" id="sel1">
                    <option value='pop'>Pop</option>
                    <option value='rock'>Rock</option>
                    <option value='hip hop'>Hip Hop</option>
                    <option value='metal'>Metal</option>
                    <option value='classic'>Classic</option>
                    <option value='jazz'>Jazz</option>
                </select>
                <button style={{margin:'10px'}} type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default withAdminAuthorization(EventForm)