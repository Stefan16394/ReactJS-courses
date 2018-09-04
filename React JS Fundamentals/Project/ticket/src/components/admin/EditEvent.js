import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import { withAdminAuthorization } from '../../hoc/WithAuthorization';
import event from '../models/event'
import notify from '../../infrastructure/notify';

class EditEvent extends Component {
    constructor(props) {
        super(props)
        this.state = event.DEFAULT_STATE
    }

    componentDidMount() {
        const id = this.props.match.params.id
        requester.get('appdata', `events/${id}`, 'kinvey').then(e => {
            this.setState({
                band: e.band,
                date: e.date,
                imageUrl: e.imageUrl,
                youtube: e.youtube,
                tickets: e.tickets,
                ticketsSold: e.ticketsSold,
                description: e.description,
                price: e.price,
                genre: e.genre
            })
        })
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
        const id = this.props.match.params.id

        requester.update('appdata', `events/${id}`, 'kinvey', this.state).then(event => {
            this.props.history.push(`/details/${id}`)
            notify({ status: 'success', message: 'Event edited' })
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
                    <input name='band' type="text" className="form-control" value={this.state.band} onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter username" />
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
                <select name='genre' onChange={this.handleChange} value={this.state.genre} className="form-control" id="sel1">
                    <option value='pop'>Pop</option>
                    <option value='rock'>Rock</option>
                    <option value='hip hop'>Hip Hop</option>
                    <option value='metal'>Metal</option>
                    <option value='classic'>Classic</option>
                    <option value='jazz'>Jazz</option>
                </select>
                <button style={{ margin: '10px' }} type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default withAdminAuthorization(EditEvent)