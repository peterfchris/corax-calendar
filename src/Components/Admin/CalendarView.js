import React, { Component } from "react";
import FullCalendar from "fullcalendar-reactwrapper";
import { withRouter, Link } from "react-router-dom";
import { allEvents } from "../../redux/calendarReducer";
import { connect } from "react-redux";

import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import Axios from "axios";
import "./CalendarView.css";

export class CalendarView extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      event: {},
      showModal: false,
      title: "",
      start: "",
      end: "",
      startDate: "",
      endDate: ""
    };
  }

  componentDidMount() {
    this.handleEvents();
  }

  handleEvents = e => {
    Axios.get("/api/getEvents").then(res => {
      console.log(res.data);
      this.props.allEvents(res.data);
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSaveEdit = () => {
    const { title, start, end, startDate, endDate, event } = this.state;
    const body = {
      title,
      start,
      end,
      startDate,
      endDate
    };
    console.log("body", body);
    console.log("event", event);
    Axios.put(`/api/update-event/${event.id}`, body).then(res => {
      this.handleEvents();
      this.toggleModal();
    });
  };

  handleDelete = () => {
    const { event } = this.state;
    console.log("before req", event);
    event.hearing_id
      ? Axios.delete(`/api/delete-hearing/${event.hearing_id}`).then(res => {
          console.log("hit hearing deletion");
          this.toggleModal();
        })
      : Axios.delete(`/api/delete/${event.id}`).then(res => {
          console.log("hit event deletion");
          this.toggleModal();
        });
  };

  handleLogOut = () => {
    Axios.get("/auth/logout");
    this.props.history.push("/login");
  };

  eventClick = calEvent => {
    console.log(calEvent);
    this.toggleModal();
    this.setState({
      event: {
        title: calEvent.title,
        id: calEvent.id
      }
    });
  };

  render() {
    const { history } = this.props;
    const createEvent = {
      createEvent: {
        text: "Create Event",
        click: function() {
          history.push("/new-event");
        },
        style: "height: 300px"
      }
    };

    return (
      <div>
        <h1>Calendar</h1>
        <button onClick={this.handleLogOut} className="logout-btn">
          log out
        </button>
        <FullCalendar
          id="user-calendar"
          customButtons={createEvent}
          header={{
            left: "prev,next today createEvent",
            center: "title",
            right: "month,basicWeek,basicDay"
          }}
          navLinks={true}
          editable={true}
          events={this.props.calendar}
          selectable={true}
          remove={true}
          eventClick={calEvent => this.eventClick(calEvent)}
        />
        {this.state.showModal ? (
          <div className="modal-container">
            <div className="modal">
              {this.state.event.title}
              <p>Select a new Title:</p>
              <input name="title" type="text" onChange={this.handleChange} />
              <p>Select a Start Date:</p>
              <input
                name="startDate"
                type="date"
                onChange={this.handleChange}
              />
              <p>Select a Start Time:</p>
              <input name="start" type="time" onChange={this.handleChange} />
              <p>Select a End Date:</p>
              <input name="endDate" type="date" onChange={this.handleChange} />
              <p>Select an End Time:</p>
              <input name="end" type="time" onChange={this.handleChange} />
              <div className="btn-container">
                <button className="edit-btn" onClick={this.handleSaveEdit}>
                  save
                </button>
                <button className="edit-btn" onClick={this.handleDelete}>
                  delete
                </button>
                <button className="exit-btn" onClick={this.toggleModal}>
                  x
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

export default withRouter(
  connect(
    mapStateToProps,
    { allEvents }
  )(CalendarView)
);
