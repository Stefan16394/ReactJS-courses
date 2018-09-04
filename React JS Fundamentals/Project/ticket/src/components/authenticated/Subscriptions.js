import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import Event from '../events/Event';
import { withUserAuthorization } from '../../hoc/WithAuthorization';

class SubscriptionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            user: ''
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        const id = sessionStorage.getItem('userid')
        requester.get('user', id, 'kinvey').then(user => {
            requester.get('appdata', `events`, 'kinvey').then(events => {
                events = events.filter(x => user.subs.indexOf(x.genre) !== -1)
                this.setState({
                    events,
                    user
                })
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.events.map(e => <Event key={e._id} event={e} isAdmin={true} />)}
            </div>
        )
    }
}

export default withUserAuthorization(SubscriptionList)