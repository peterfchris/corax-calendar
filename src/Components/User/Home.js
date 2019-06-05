import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1><Link to='/lead-form'>Home</Link></h1>
            </div>
        )
    }
}

export default Home
