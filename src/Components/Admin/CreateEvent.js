import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class CreateEvent extends Component {
    render() {
        return (
            <div>
                <h1>Create Event</h1>
                <button><Link to='/calendar'>Create Event</Link></button>
            </div>
        )
    }
}

export default CreateEvent
