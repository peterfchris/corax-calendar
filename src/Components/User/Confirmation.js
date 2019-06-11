import React, { Component } from 'react'
import './Confirmation.css'


export class Confirmation extends Component {
    constructor(){
        super()
    }

    handleClick = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className='confirmation-page'>
                    <div className='confirmation-container'>
                        <h3 className='confirmation-header'>We look forward to meeting you!</h3>
                        <p className='p'>You are scheduled for:</p>
                        {/* Add a dynamic display of the new event HERE */}
                        <button className='confirmation-btn' onClick={this.handleClick} >Back to site</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirmation
