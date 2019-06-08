import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <div>
                <div className='home-page'>
                    <div className='home-container'>
                        <h1 className='home-header'>Corax Calendar</h1>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.</p>
                        <p className='text'>Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat.</p>
                        <button className='schedule-btn' >Schedule a Free Consultation</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
