import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class CalendarView extends Component {
    render() {
        return (
            <div>
                <h1>Calendar View</h1>
                <button><Link to='/new-event'>Create Event</Link></button>
            </div>
        )
    }
}

export default CalendarView
