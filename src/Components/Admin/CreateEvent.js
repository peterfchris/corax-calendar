import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './CreateEvent.css'

export class CreateEvent extends Component {
    render() {
        return (
            <div>
                <div className='new-event-container'>
                    <h1 className='create-event-header'>Create Event</h1>
                    <form>
                        <input
                        className='title-input'
                        placeholder='Event Title' />
                        <div id='btn-container'>
                            <button className='new-event-btn'>Create Event</button>
                            <button className='cancel-event-btn'>Cancel</button>
                        </div>
                        <br />
                        <div className='all-day-container'>
                            <input
                            className='day-input'
                            type='checkbox' />
                            <p className='all-day'>All Day</p>
                        </div>
                        <div className='input-container'>
                            <p className='time-text'>Start Time</p>
                            <input
                            className='time-input'
                            type='time' />
                            <p className='time-text'>Start Date</p>
                            <input
                            className='date-input'
                            type='date' />
                        </div>
                        <div className='input-container-2'>
                            <p className='end-text'>End Time</p>
                            <input
                            className='time-input'
                            type='time' />
                            <p className='end-text'>End Date</p>
                            <input
                            className='date-input'
                            type='date' />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateEvent
