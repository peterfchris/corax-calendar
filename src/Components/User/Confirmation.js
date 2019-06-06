import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// JUNE 12 CHECKLIST

// Add dynamic display of new calendar event

export class Confirmation extends Component {
    render() {
        return (
            <div>
                <h3>We look forward to meeting you</h3>
                {/* Add a dynamic display of the new event HERE */}
                <button><Link to='/'>Back to site</Link></button>
            </div>
        )
    }
}

export default Confirmation
