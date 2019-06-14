import React, { Component } from "react";
import './Verify.css';

export class Verify extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            startDate: '',
            startTime: ''
        };
    }

    componentDidMount = () => {
      this.handleDateFormat()
      this.handleTimeFormat()
    }
    
    handleDateFormat = () => {
      var year = 0
      var month = 0
      var day = 0
      var splitDate = this.props.state.startDate.split('-')
      year = +splitDate[0]
      month = +splitDate[1]
      day = +splitDate[2]
      splitDate = new Date(year, month, day)
      this.setState({
        startDate: splitDate.toDateString()
      })
    }

    handleTimeFormat = () => {
      console.log('this.props.state.startTime', this.props.state.startTime)
      var startTimeArray = this.props.state.startTime.split(':')
      var HH = parseInt(startTimeArray[0])
      var min = startTimeArray[1]
      var AMPM = HH >= 12 ? "PM" : "AM";
      var hours;
      if(HH == 0){
        hours = HH + 12;
      } else if (HH > 12) {
        hours = HH - 12;
      } else {
        hours = HH;
      }
      var newFormatTime = hours + ":" + min + " " + AMPM;
      this.setState({
        startTime: newFormatTime
      })
    }

  render() {
    return (
      <div>
        <div className="modal-container">
          <div className="modal">
            <form onSubmit={this.props.handleCreateEvent}>
              <h3 className='verify-header'>Is this correct?</h3>
              <div className='verify-display'>
                <p>{this.state.startDate}</p>
                <p>{this.state.startTime}</p>
                <div id='btn-container'>
                  <button className='verify-btn'>Yes</button>
                  <button className='verify-btn' onClick={this.props.toggleModal}>No</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Verify;
