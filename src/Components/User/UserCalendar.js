import React, { Component } from "react";
import './UserCalendar.css'
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";

export class UserCalendar extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      showModal: false,
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      potentialName: ''
    };
  }

  handleCreateEvent = () => {

  }

  handleEmail = (e) => {

  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    return (
      <div>
        <h1>Pick a date and time</h1>
        <form onSubmit={this.toggleModal}>
          <input 
            name='startDate'
            type='date'
            onChange={this.handleInputChange} 
            />
          <input 
            name='startTime'
            type='time'
            onChange={this.handleInputChange} 
            />
          <input 
            name='endDate'
            type='date'
            onChange={this.handleInputChange} 
            />
          <input 
            name='endTime'
            type='time'
            onChange={this.handleInputChange}
            />
          <input 
            name='email'
            type='checkbox' 
            onChange={this.handleEmail}
            />
          <p>I would like an email notification</p>
          <button>Submit</button>
        </form>
        {this.state.showModal ?(
          <div className='modal-container'>
            <div className='modal'>
              <h3>Is this correct?</h3>
              {this.state.startDate}
              {this.state.startTime}
              {this.state.endDate}
              {this.state.endTime}
              <button onClick={this.handleCreateEvent}>
                Yes
              </button>
              <button onClick={this.toggleModal}>
                No
              </button>
            </div>
          </div>
        ): null}
      </div>
    );
  }
}

export default UserCalendar;
