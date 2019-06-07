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
      this.props.allEvents(res.data);
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleStartDateChange = event => {
    this.setState({
      startDate: event.target.value
    });
  };

  handleEndDateChange = event => {
    this.setState({
      endDate: event.target.value
    });
  };

  handleStartChange = event => {
    this.setState({
      start: event.target.value
    });
  };

  handleEndChange = event => {
    this.setState({
      end: event.target.value
    });
  };

  handleSaveEdit = () => {
    // destructure data from state
    const { title, start, end, startDate, endDate, event } = this.state;
    // create the body object to send to the server w/ info about the updated event
    const body = {
      title,
      start,
      end,
      startDate,
      endDate
    };
    // make an axios req to server to send information for the new date
    Axios.put(`/api/update-event/${event.id}`, body).then(res => {
      this.handleEvents();
      this.toggleModal();
    });
  };

  // function to be executed on event click
  eventClick = calEvent => {
    console.log(calEvent);
    // toggle the modal display
    this.toggleModal();
    // set the calender obj to state
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

    console.log(this.state.start);
    return (
      <div>
        <h1>Calendar</h1>
        <button>
          <Link to="/login">log out</Link>
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
              <input type="text" onChange={this.handleChangeTitle} />
              <p>Select a Start Date:</p>
              <input type="date" onChange={this.handleStartDateChange} />
              <p>Select a Start Time:</p>
              <input type="time" onChange={this.handleStartChange} />
              <p>Select a End Date:</p>
              <input type="date" onChange={this.handleEndDateChange} />
              <p>Select an End Time:</p>
              <input type="time" onChange={this.handleEndChange} />
              <div className="btn-container">
                <button className="edit-btn" onClick={this.handleSaveEdit}>
                  edit
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
