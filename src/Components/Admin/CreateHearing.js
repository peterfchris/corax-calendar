import React, { Component } from "react";
import Axios from "axios";

export class CreateHearing extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      startTime: "",
      startDate: "",
      endTime: "",
      endDate: "",
      hearingDueDate: "",
      hearingTitle: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCreateHearing = event => {
    event.preventDefault();
    const {
      title,
      startTime,
      startDate,
      endTime,
      endDate,
      hearingDueDate
    } = this.state;
    const copyHearingDate = new Date(startDate);
    const replyDate = new Date(copyHearingDate.setDate(copyHearingDate.getDate() - 7)).toISOString().slice(0, 10)
    const responseDate = new Date(copyHearingDate.setDate(copyHearingDate.getDate() - 7)).toISOString().slice(0, 10)
    const motionDate = new Date(copyHearingDate.setDate(copyHearingDate.getDate() - 14)).toISOString().slice(0, 10)
    Axios.post('/api/create-hearing', {
      title,
      start: `${startDate}T${startTime}:00`,
      end: `${endDate}T${endTime}:00`,
      hearingDueDate,
      replyDate,
      responseDate,
      motionDate
    })
    .then(() => {
      this.props.history.push("/calendar");
    })
  };

  handleCancel = event => {
    event.preventDefault();
    this.props.history.push("/calendar");
  };

  render() {
    console.log(`hearingTitle`, this.hearingTitle);
    return (
      <div>
          <div>
            <h1 className="create-event-header">Schedule Hearing</h1>
            <form onSubmit={this.handleCreateHearing}>
              <input
                name="title"
                onChange={this.handleInputChange}
                className="title-input"
                placeholder="Hearing Title"
              />
              <div id="btn-container">
                <button 
                type='submit'
                className='new-event-btn'
                >
                  Schedule Hearing
                </button>
                
                <button
                  onClick={this.handleCancel}
                  className="cancel-event-btn"
                  type='button'
                >
                  Cancel
                </button>
              </div>
              <br />
              <div className="event-input-container">
                <p className="event-time-text">Start Time</p>
                <input
                  name="startTime"
                  onChange={this.handleInputChange}
                  className="event-time-input"
                  type="time"
                />
                <p className="event-time-text">Start Date</p>
                <input
                  name="startDate"
                  onChange={this.handleInputChange}
                  className="event-date-input"
                  type="date"
                />
              </div>
              <div className="input-container-2">
                <p className="event-end-text">End Time</p>
                <input
                  name="endTime"
                  onChange={this.handleInputChange}
                  className="event-time-input"
                  type="time"
                />
                <p className="event-end-text">End Date</p>
                <input
                  name="endDate"
                  onChange={this.handleInputChange}
                  className="event-date-input"
                  type="date"
                />
              </div>
            </form>
          </div>
      </div>
    );
  }
}


export default CreateHearing;