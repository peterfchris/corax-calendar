import React, { Component } from 'react'
import './CreateEvent.css'
import Axios from 'axios';


export class CreateEvent extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            startTime: '',
            startDate: '',
            endTime: '',
            endDate: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleCreateEvent = () => {
        const {title, startTime, startDate, endTime, endDate} = this.state
        Axios.post('/api/create-event', {
            title,
            start: `${startDate}T${startTime}:00`,
            end: `${endDate}T${endTime}:00`
        })
        this.props.history.push('/calendar')
    }

    handleCancel = () => {
        this.props.history.push('/calendar')
    }
    
    render() {
        return (
            <div>
                <div className='new-event-container'>
                    <h1 className='create-event-header'>Create Event</h1>
                    <form>
                        <input
                        name='title'
                        onChange={this.handleInputChange}
                        className='title-input'
                        placeholder='Event Title' />
                        <div id='btn-container'>
                            <button 
                            onClick={this.handleCreateEvent}
                            className='new-event-btn'>Create Event</button>
                            <button
                            onClick={this.handleCancel} 
                            className='cancel-event-btn'>Cancel</button>
                        </div>
                        <br />
                        <div className='input-container'>
                            <p className='time-text'>Start Time</p>
                            <input
                            name='startTime'
                            onChange={this.handleInputChange}
                            className='time-input'
                            type='time' />
                            <p className='time-text'>Start Date</p>
                            <input
                            name='startDate'
                            onChange={this.handleInputChange}
                            className='date-input'
                            type='date' />
                        </div>
                        <div className='input-container-2'>
                            <p className='end-text'>End Time</p>
                            <input
                            name='endTime'
                            onChange={this.handleInputChange}
                            className='time-input'
                            type='time' />
                            <p className='end-text'>End Date</p>
                            <input
                            name='endDate'
                            onChange={this.handleInputChange}
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
