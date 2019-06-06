import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Corax Calendar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod 
                   tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut 
                   aliquip ex ea commodo consequat.</p>
                <button><Link to='/lead-form'>Schedule a Free Consultation</Link></button>
            </div>
        )
    }
}

export default Home
