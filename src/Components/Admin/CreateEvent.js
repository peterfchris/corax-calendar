import React, { Component } from 'react'
import axios from 'axios'
import "./CreateEvent.css";

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

    handleCreateEvent = event => {
        event.preventDefault()
        const {
            title,
            startTime,
            startDate,
            endTime,
            endDate
        } = this.state

        axios.post('/api/create-event', {
            title,
            start: `${startDate}T${startTime}:00`,
            end: `${endDate}T${endTime}:00`
        })
        this.props.history.push('/calendar')
    }

    handleCancel = (e) => {
        e.preventDefault()
        this.props.history.push('/calendar')
    }


    render() {
        return (
            <div>
              <div  className="new-event-container">
                <h1 className="create-event-header">Create Event</h1>
                <form onSubmit={e => {
                    this.handleCreateEvent(e);
                }}>
                <input
                    name="title"
                    type="text"
                    placeholder='Event Title'
                    className="title-input"
                    onChange={this.handleInputChange}
                />
                <div id="btn-container">
                  <button 
                  className="new-event-btn"
                  type='submit'>
                      Create Event
                  </button>
                  <button 
                  className="cancel-event-btn"
                  onClick={this.handleCancel}>
                    cancel
                  </button>
                </div>
                <div className="event-input-container">
                <p className="event-time-text">Start Time</p>
                <input
                    name="startTime"
                    type="time"
                    className="event-time-input"
                    onChange={this.handleInputChange}
                />
                <p className="event-time-text">Start Date</p>
                <input
                    name="startDate"
                    type="date"
                    className="event-date-input"
                    onChange={this.handleInputChange}
                />
                </div>
                <div className='input-container-2'>
                <p className="event-end-text">End Time</p>
                <input
                    name="endTime"
                    type="time"
                    className="event-time-input"
                    onChange={this.handleInputChange}
                />
                <p className="event-end-text">End Date</p>
                <input
                    name="endDate"
                    type="date"
                    className="event-date-input"
                    onChange={this.handleInputChange}
                />
                </div>
                </form>
              </div>
            </div>
        )
    }
}

export default CreateEvent
