import React, { Component } from "react";
import FullCalendar from "fullcalendar-reactwrapper";
import UpdateEvent from './UpdateEvent'
import { withRouter } from "react-router-dom";
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

  handleHearing = () => {
    this.props.history.push('/new-hearing')
  }

  handleCreateEvent = () => {
    this.props.history.push('/new-event')
  }

  handleSaveEdit = async () => {
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
    await Axios.put(`/api/update-event/${event.id}`, body).then(res => {
      this.toggleModal();
    });
    this.handleEvents();
  };

  handleDelete = async () => {
    const { event } = this.state;
    console.log("before req", event);
    await Axios.delete(`/api/delete/${event.id}`).then(res => {
        console.log("hit event deletion");
        this.toggleModal();
      });
      this.handleEvents()
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
    return (
      <div>
        <div className='calendar-btn-container'>
          <button onClick={this.handleHearing} className='hearing-btn'>
            Schedule Hearing
          </button>
          <button onClick={this.handleCreateEvent} className='hearing-btn'>
            Create Event
          </button>
          <button onClick={this.handleLogOut} className="logout-btn">
            log out
          </button>
        </div>
        <FullCalendar
          id="user-calendar"
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
            <UpdateEvent
            handleSaveEdit={this.handleSaveEdit}
            handleDelete={this.handleDelete}
            handleChange={this.handleChange}
            toggleModal={this.toggleModal}
            state={this.state}
            handleEvents={this.handleEvents}
             />
          ) 
          : 
          null}
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
