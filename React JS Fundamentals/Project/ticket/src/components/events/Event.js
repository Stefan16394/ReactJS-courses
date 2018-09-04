import React from 'react'
import { Link } from 'react-router-dom'
import './Event.css'

const Event = (props) => {
    const event = props.event
    const admin = sessionStorage.getItem('roleid') === "c2262186-22e8-4f94-8833-643697d221cd" ? true : false

    function calculateProgress() {
        const progress = (event.ticketsSold * 100) / event.tickets
        return Math.round(progress)
    }

    const progress = calculateProgress()
    return (
        <div className="card" >
            <a href={`/details/${event._id}`}>
                <img className="card-img-top" src={event.imageUrl} alt={event.imageUrl} />
            </a>
            <div className="card-body">
                <h5 className="card-title">{event.band}</h5>
                Genre:
              <a href={`/?query=` + event.genre} className="card-link">{event.genre}</a>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${progress}%`, backgroundColor: '#766CE8' }}>
                        <div className="progress-bar-title">{progress}% Sold Out!</div>
                    </div>
                </div>
                {admin ? [<Link to={'/admin/edit/' + event._id} type="button" className="btn btn-primary edit" key='editLink'>Edit</Link>,
                <Link to={'/admin/delete/' + event._id} type="button" className="btn btn-primary delete" key='deleteLink'>Delete</Link>] : null}
            </div>
        </div>
    )
}

export default Event