import React from 'react'
import Observer from './Observer';

const response = {
    success: 'alert alert-success',
    error: 'alert alert-danger'
}

class Notification extends React.Component {

    constructor() {
        super()
        this.state = {
            info: '',
            message: ''
        }
        Observer.subscribe('notify', this.notify)
        Observer.subscribe('notifyOff', this.toggleOff)
    }

    notify = ({ status, message }) => {
        this.setState({
            info: status,
            message
        })
    }

    toggleOff = () => {
        this.setState({
            info: '',
            message: ''
        })
    }

    render() {
        return (
            <div className={response[this.state.info]} role="alert">
                {this.state.message}
            </div>
        )
    }
}

export default Notification
