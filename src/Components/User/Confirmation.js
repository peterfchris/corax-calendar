import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Confirmation.css'

// JUNE 12 CHECKLIST

// Add dynamic display of new calendar event

export class Confirmation extends Component {
    render() {
        return (
            <div>
                <div className='confirmation-page'>
                    <div className='confirmation-container'>
                        <h3 className='confirmation-header'>We look forward to meeting you!</h3>
                        {/* Add a dynamic display of the new event HERE */}
                        <button className='confirmation-btn'>Back to site</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirmation
