import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import Event from './Event';

class EventList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.search !== this.props.location.search) {
            this.fetchData()
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        let query = ''

        if (this.props.location.search) {
            const genre = this.props.location.search.split('=').pop()
            query = `?query={"genre":"${genre}"}`
        }
        requester.get('appdata', `events/${query}`, 'master').then(events => {
            this.setState({
                events
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.events.map(e => <Event key={e._id} event={e} />)}
            </div>
        )
    }
}

export default EventList