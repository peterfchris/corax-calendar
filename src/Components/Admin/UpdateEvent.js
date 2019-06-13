import React, { Component } from "react";

export class UpdateEvent extends Component {
    constructor(){
        super()

        this.state={
            events: [],
            event: {},
            showModal: false,
            title: "",
            start: "",
            end: "",
            startDate: "",
            endDate: ""
        }
    }

  render() {
    return (
      <div>
        <div className="modal-container">
          <div className="modal">
            {this.props.state.event.title}
            <p>Select a new Title:</p>
            <input name="title" type="text" onChange={this.props.handleChange} />
            <p>Select a Start Date:</p>
            <input name="startDate" type="date" onChange={this.props.handleChange} />
            <p>Select a Start Time:</p>
            <input name="start" type="time" onChange={this.props.handleChange} />
            <p>Select a End Date:</p>
            <input name="endDate" type="date" onChange={this.props.handleChange} />
            <p>Select an End Time:</p>
            <input name="end" type="time" onChange={this.props.handleChange} />
            <div className="btn-container">
              <button className="edit-btn" onClick={this.props.handleSaveEdit}>
                save
              </button>
              <button className="edit-btn" onClick={this.props.handleDelete}>
                delete
              </button>
              <button className="exit-btn" onClick={this.props.toggleModal}>
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEvent;
