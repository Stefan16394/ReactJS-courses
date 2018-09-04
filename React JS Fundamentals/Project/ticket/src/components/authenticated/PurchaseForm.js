import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import notify from '../../infrastructure/notify';

class PurchaseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets: 1,
            total: ''
        }
    }

    handleChange = (event) => {
        const change = event.target.name
        const value = event.target.value
        this.setState({
            [change]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (sessionStorage.getItem('authtoken') === null) {
            this.props.history.push('/user/login')
            return
        }

        let event = this.props.event
        const id = sessionStorage.getItem('userid')
        const data = {
            eventId: event._id,
            tickets: this.state.tickets,
            total: this.state.tickets * event.price,
            userid: id,
            band: event.band
        }

        event.ticketsSold = Number(event.ticketsSold) + Number(this.state.tickets)
        requester.post('appdata', 'purchases', 'kinvey', data).then(p => {
            requester.update('appdata', `events/${event._id}`, 'kinvey', event).then(() => {
                notify({ status: 'success', message: `You bought ${this.state.tickets} tickets!` })
                this.props.history.push('/user/purchases')
            })
        }).catch(err => {
            notify({ status: 'error', message: 'Operation unsuccesfull' })
        })
    }
    render() {
        const freeTickets = this.props.event.tickets - this.props.event.ticketsSold
        const maxTickets = freeTickets < 8 ? freeTickets : 8
        const value = `Total: ${this.state.tickets * this.props.event.price}$`
        return (<form className="purchaseForm" onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} name='tickets' type="number" min="1" value={this.state.tickets} max={maxTickets} />
            <input className='total' type='text' disabled value={value} />
            {freeTickets < 1 ? <button type="submit" disabled className="btn btn-warning">Sold Out</button> :
                <button type="submit" className="btn btn-warning">Buy Tickets</button>}
        </form>)
    }
}

export default PurchaseForm