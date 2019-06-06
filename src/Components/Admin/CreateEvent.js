import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// JUNE 7 CHECKLIST

// back to calendar button
// create event button pushes new event info to calendar
// create event button pushes new event to db
// input fields have date and time pickers
    // start time
    // start date
    // end time
    // end date
// when mto - client is in event title, due dates are auto populated
// when mto - opp is in event title, due dates are auto populated with reversal of roles

// JUNE 17 CHECKLIST

// Style component

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
