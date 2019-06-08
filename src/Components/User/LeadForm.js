import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './LeadForm.css'

export class LeadForm extends Component {
    render() {
        return (
            <div>
                <div className='lead-page'>
                    <div className='lead-container'>
                        <form>
                            <h1 className='lead-header'>Request a Consultation</h1>
                            <input
                            className='lead-input'
                            placeholder='first name'
                            />
                            <input
                            className='lead-input'
                            placeholder='last name' />
                            <input
                            className='lead-input'
                            placeholder='email' />
                            <input
                            className='lead-input'
                            placeholder='phone number' />
                            <button className='lead-button'>Schedule Consultation</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeadForm
