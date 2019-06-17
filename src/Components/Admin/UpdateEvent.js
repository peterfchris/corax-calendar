import React, { Component } from "react";
import './UpdateEvent.css'

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
           <h3 className='update-header'>{this.props.state.event.title}</h3>
            <div className='update-container'>
              <p className='update-text'>Select a new Title:</p>
              <input className='update-input' name="title" type="text" onChange={this.props.handleChange} />
              <p className='update-text'>Select a Start Date:</p>
              <input className='update-input' name="startDate" type="date" onChange={this.props.handleChange} />
              <p className='update-text'>Select a Start Time:</p>
              <input className='update-input' name="start" type="time" onChange={this.props.handleChange} />
              <p className='update-text'>Select a End Date:</p>
              <input className='update-input' name="endDate" type="date" onChange={this.props.handleChange} />
              <p className='update-text'>Select an End Time:</p>
              <input className='update-input' name="end" type="time" onChange={this.props.handleChange} />
            </div>
            <div className="update-btn-container">
              <button className="update-edit-btn" onClick={this.props.handleSaveEdit}>
                save
              </button>
              <button className="update-edit-btn" onClick={this.props.handleDelete}>
                delete
              </button>
              <button className="update-exit-btn" onClick={this.props.toggleModal}>
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
