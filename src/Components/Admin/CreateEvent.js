import React, { Component } from "react";
import "./CreateEvent.css";
import Axios from "axios";

export class CreateEvent extends Component {
  constructor() {
    super();

    this.state = {
      step: false,
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

  handleCreateEvent = event => {
    event.preventDefault();

    const {
      title,
      startTime,
      startDate,
      endTime,
      endDate,
      hearingDueDate,
      hearingTitle
    } = this.state;

    // getting a date object that had the hearing date
    const copyHearingDate = new Date(hearingDueDate);

    Axios.post("/api/create-event", {
      title,
      start: `${startDate}T${startTime}:00`,
      end: `${endDate}T${endTime}:00`,
      hearingDueDate,
      hearingTitle,
      replyDate: new Date(copyHearingDate.setDate(copyHearingDate.getDate() - 7)),
      responseDate: new Date( copyHearingDate.setDate(copyHearingDate.getDate() - 7)),
      motionDate: new Date(copyHearingDate.setDate(copyHearingDate.getDate() - 14))
    });
    this.props.history.push("/calendar");
  };

  handleCancel = event => {
    event.preventDefault();
    this.props.history.push("/calendar");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.step ? (
          <div>
            <form onSubmit={this.handleCreateEvent}>
              <input
                name="hearingTitle"
                type="text"
                onChange={this.handleInputChange}
              />
              <input
                name="hearingDueDate"
                type="date"
                onChange={this.handleInputChange}
              />
              <button type="submit">Create Event</button>
            </form>
          </div>
        ) : (
          <div className="new-event-container">
            <h1 className="create-event-header">Create Event</h1>
            <form>
              <input
                name="title"
                onChange={this.handleInputChange}
                className="title-input"
                placeholder="Event Title"
              />
              <div id="btn-container">
                <button onClick={this.handleCreateEvent}>
                  Create Event
                </button>
                <button
                  onClick={event => {
                    event.preventDefault();
                    this.setState({
                      step: true
                    });
                  }}
                  className="new-event-btn"
                >
                  Schedule Hearing
                </button>
                <button
                  onClick={this.handleCancel}
                  className="cancel-event-btn"
                >
                  Cancel
                </button>
              </div>
              <br />
              <div className="input-container">
                <p className="time-text">Start Time</p>
                <input
                  name="startTime"
                  onChange={this.handleInputChange}
                  className="time-input"
                  type="time"
                />
                <p className="time-text">Start Date</p>
                <input
                  name="startDate"
                  onChange={this.handleInputChange}
                  className="date-input"
                  type="date"
                />
              </div>
              <div className="input-container-2">
                <p className="end-text">End Time</p>
                <input
                  name="endTime"
                  onChange={this.handleInputChange}
                  className="time-input"
                  type="time"
                />
                <p className="end-text">End Date</p>
                <input
                  name="endDate"
                  onChange={this.handleInputChange}
                  className="date-input"
                  type="date"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default CreateEvent;
