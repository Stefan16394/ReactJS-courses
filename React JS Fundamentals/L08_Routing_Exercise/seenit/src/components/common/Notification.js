import React, { Component } from 'react'
import Observer from '../../infrastructure/Observer'
import '../../styles/notifications.css'

const DEFAULT_STATE = {
    message: null,
    success: null,
    error: null,
    loading: null
}

class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = DEFAULT_STATE
        Observer.subscribe(Observer.events.notifications, this.showNotification)
    }

    showNotification = data => {
        let message = data.message
        let type = data.type
        this.setState({
            [type]: true,
            message
        })
    }

    hideNotification = event => {
        this.setState(DEFAULT_STATE)
    }

    render() {
        let notificationId;
        if (this.state.success) {
            notificationId = 'successBox'
        } else if (this.state.error) {
            notificationId = 'errorBox'
        }
        else if (this.state.loading) {
            notificationId = 'loadingBox'
        }

       if(this.state.message){
        return (
            <div onClick={this.hideNotification} id={notificationId} className="notification">
                <span>{this.state.message}</span>
            </div>
        )
       }
       return null;
    }
}

export default Notification;