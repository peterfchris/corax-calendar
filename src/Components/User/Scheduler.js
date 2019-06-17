import React, { Component } from "react";
import Verify from './Verify'
import axios from 'axios'
import './Scheduler.css'
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import {connect} from 'react-redux'
import {addConsultation} from '../../redux/userReducer'

export class UserCalendar extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      showModal: false,
      startDate: '',
      startTime: ''
    };
  }

  handleCreateEvent = event => {
    event.preventDefault()
    const {
        startTime,
        startDate
    } = this.state

    axios.post('/api/create-consultation', {
        potential_first: this.props.user.potential_first,
        potential_last: this.props.user.potential_last,
        start: `${startDate}T${startTime}:00`,
        potential_id: this.props.user.id 
    })
    this.props.history.push('/confirmation')
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      console.log(e.target, this.state)
      this.props.addConsultation({ 
        startDate: this.state.startDate,
        startTime: this.state.startTime
      })
    })
  }

  toggleModal = (e) => {
    e.preventDefault()
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    return (
      <div>
        <div className='verify-container'>
          <div className='verify'>
            <h1 className='scheduler-header'>When would you like to come in?</h1>
            <form onSubmit={this.toggleModal} >
              <div className='input-container'>
                <input 
                  className='date-input'
                  name='startDate'
                  type='date'
                  onChange={this.handleInputChange} 
                  />
                <input 
                  className='time-input'
                  name='startTime'
                  type='time'
                  onChange={this.handleInputChange} 
                  />
                <button className='submit-btn'>Submit</button>
              </div>
            </form>
            {this.state.showModal ? (
              <Verify
                state={this.state}
                handleCreateEvent={this.handleCreateEvent}
                toggleModal={this.toggleModal}
              />
            ): null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapStateToProps, {addConsultation})(UserCalendar);
