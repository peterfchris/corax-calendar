import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateAdmin} from '../../redux/adminReducer'

export class Login extends Component {
    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleLogin = (e) => {
        e.preventDefault()
        axios
        .post('/auth/login', {admin_email: this.state.email, password: this.state.password})
        .then(res => this.props.updateAdmin(res.data))
    }

    handleLoginUpdate = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

    render() {
        return (
            <div>
                <h1>Login</h1>
				<form onSubmit={this.handleLogin}>
					<input
						type='text'
						placeholder='email'
						name='email'
						onChange={this.handleLoginUpdate}
					/>
					<input
						type='password'
						placeholder='password'
						name='password'
						onChange={this.handleLoginUpdate}
					/>
					<button onClick={this.handleLogin}>Login</button>
				</form>
            </div>
        )
    }
}

export default  withRouter(connect(null, {updateAdmin})(Login))
