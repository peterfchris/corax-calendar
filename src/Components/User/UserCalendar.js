import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class UserCalendar extends Component {
    render() {
        return (
            <div>
                <h1><Link to='/confirmation'>User Calendar</Link></h1>
            </div>
        )
    }
}

export default UserCalendar
