import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addUser, addConsultation} from '../../redux/userReducer'
import './Confirmation.css'


export class Confirmation extends Component {
    constructor(){
        super()

        this.state = {
            firstname: '',
            lastname: '',
            startDate: '',
            startTime: ''
        }
    }


    handleClick = () => {
        this.props.history.push('/')
    }

    render() {
        console.log('this.props', this.props)
        return (
            <div>
                <div className='confirmation-page'>
                    <div className='confirmation-container'>
                        <h3 className='confirmation-header'>We look forward to meeting you!</h3>
                        <p className='p'>You are scheduled for:</p>
                        <p>{this.props.user.potential_first} {this.props.user.potential_last}</p>
                        <p>{this.props.user.startDate}</p>
                        <p>at {this.props.user.startTime}</p>
                        <button className='confirmation-btn' onClick={this.handleClick} >Back to site</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default withRouter(connect(mapStateToProps, {addUser, addConsultation})(Confirmation))
