import React, { Component } from "react";
import Verify from './Verify'
import axios from 'axios'
import './Scheduler.css'
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import {connect} from 'react-redux'

export class UserCalendar extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      showModal: false,
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: ''
    };
  }

  handleCreateEvent = event => {
    event.preventDefault()
    const {
        startTime,
        startDate,
        endTime,
        endDate
    } = this.state

    axios.post('/api/create-consultation', {
        potential_first: this.props.user.potential_first,
        potential_last: this.props.user.potential_last,
        start: `${startDate}T${startTime}:00`,
        end: `${endDate}T${endTime}:00`,
        potential_id: this.props.user.id 
    })
    this.props.history.push('/confirmation')
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleModal = (e) => {
    e.preventDefault()
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    console.log(this.props.user)
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
          <button>Submit</button>
        </form>
        {this.state.showModal ? (
          <Verify
            state={this.state}
            handleCreateEvent={this.handleCreateEvent}
            toggleModal={this.toggleModal}
          />
        ): null}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapStateToProps)(UserCalendar);
