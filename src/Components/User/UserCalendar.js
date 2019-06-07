import React, { Component } from "react";
import FullCalendar from "fullcalendar-reactwrapper";
import { Link } from "react-router-dom";
import './UserCalendar.css'
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";

export class UserCalendar extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    return (
      <div>
        <FullCalendar
          id="user-calendar"
          header={{
            left: "prev,next today",
            center: "title",
            right: "month,basicWeek,basicDay"
          }}
          navLinks={true}
          editable={true}
          events={this.state.events}
        />
        {this.state.showModal ? (
          <div className="verify-container">
            <div className="verify">
              <h1>Is this correct?</h1>
              <h3>Appointment Info</h3>
              <button><Link to='/confirmation'>Yes</Link></button>
              <button onClick={this.toggleModal}>No</button>
              <br/>
              <input
              type='checkbox' />
              <p>I would like my consultation to be over the phone (we will call you!)</p>
              <input
              type='checkbox' />
              <p>I would like you to email me a reminder</p>
              <input
              type='checkbox' />
              <p>I would like you to text me a reminder</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default UserCalendar;
