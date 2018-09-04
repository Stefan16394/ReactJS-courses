import React, { Component } from 'react'
import './details.css'
import requester from '../../infrastructure/requester';
import Timer from './Timer';
import PurchaseForm from '../authenticated/PurchaseForm'

class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            event: '',
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        requester.get('appdata', `events/${id}`, 'master').then(event => {
            this.setState({
                event
            })
        })
    }

    render() {
        if (this.state.event) {
            const link = this.state.event.youtube
            var youtubeEmbed = link.replace('watch?v=', 'embed/')
        }

        let date = new Date(this.state.event.date)
        date = date.toDateString() + " " + date.toLocaleTimeString()
        return (
            <div>
                <span className="border border-white">
                    <div className="formbuy">
                        <img className='image' src={this.state.event.imageUrl} alt={this.state.event.imageUrl} />
                        <span className="eventTitle">{this.state.event.band} - {date}</span>
                        <Timer time={this.state.event.date} />
                        <PurchaseForm event={this.state.event} history={this.props.history} />
                    </div>
                </span>
                <span className="border border-white">
                    <div className="formbuy" style={{ textAlign: 'center' }}>
                        <iframe title={this.state.event.band} width="320" height="215"
                            src={youtubeEmbed}>
                        </iframe>
                        <p>{this.state.event.description}</p>
                    </div>
                </span>
            </div>
        )
    }
}

export default Details