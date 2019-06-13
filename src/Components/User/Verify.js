import React, { Component } from "react";

export class Verify extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            // showModal: false,
            startDate: '',
            startTime: '',
            endDate: '',
            endTime: '',
            potentialName: ''
        };
    }
  render() {
    return (
      <div>
        <div className="modal-container">
          <div className="modal">
            <form onSubmit={this.props.handleCreateEvent}>
              <h3>Is this correct?</h3>
              {this.props.state.startDate}
              {this.props.state.startTime}
              {this.props.state.endDate}
              {this.props.state.endTime}
              <button>Yes</button>
              <button onClick={this.props.toggleModal}>No</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Verify;
