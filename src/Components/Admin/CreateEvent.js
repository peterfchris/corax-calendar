import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class CreateEvent extends Component {
    render() {
        return (
            <div>
                <input
                placeholder='Event Title' />
                <button><Link to='/calendar'>Create Event</Link></button>
                <input
                type='checkbox' />
                <p>All Day</p>
                <input
                type='checkbox' />
                <p>Start Time</p>
                <input
                type='checkbox' />
                <p>Start Date</p>
                <input
                type='checkbox' />
                <p>End Time</p>
                <input
                type='checkbox' />
                <p>End Date</p>
            </div>
        )
    }
}

export default CreateEvent
