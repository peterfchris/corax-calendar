import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {updateAdmin} from '../../redux/adminReducer'

import './Register.css'

// JUNE 17 CHECKLIST

// style component

class RegisterForm extends Component {
	constructor() {
		super()

		this.state = {
			username: '',
			password: '',
			firstname: '',
			lastname: '',
			email: ''
		}
	}

	handleRegister = async (e) => {
		e.preventDefault()
		const { firstname, lastname, email, username, password } = this.state
		await axios
			.post('/auth/register', { admin_first_name: firstname, admin_last_name: lastname, admin_email: email, username, password })
			.then((res) => {
				this.props.history.push('/login')
			})
			.catch((err) => {
				console.log(err)
			})
		this.setState({
			username: '',
			password: '',
			firstname: '',
			lastname: '',
			email: ''
		})
	}

	handleRegisterInfoUpdate = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	render() {
		return (
			<> 
				<div className='register-page'>
					<div className='register-container'>
						<h1 className='register-header'>Register</h1>
						<form onSubmit={this.handleRegister}>
							<input
								className='register-input'
								type='text'
								placeholder='first name'
								name='firstname'
								onChange={this.handleRegisterInfoUpdate}
							/>
							<input
								className='register-input'
								type='text'
								placeholder='last name'
								name='lastname'
								onChange={this.handleRegisterInfoUpdate}
							/>
							<input
								className='register-input'
								type='text'
								placeholder='email'
								name='email'
								onChange={this.handleRegisterInfoUpdate}
							/>
							<input
								className='register-input'
								type='text'
								placeholder='username'
								name='username'
								onChange={this.handleRegisterInfoUpdate}
							/>
							<input
								className='register-input'
								type='password'
								placeholder='password'
								name='password'
								onChange={this.handleRegisterInfoUpdate}
							/>
							<button 
								className='register-button'
								onClick={this.handleRegister}>
									Register
							</button>
						</form>
					</div>
				</div>
			</>
		)
	}
}

function mapStateToProps(reduxState){
	return reduxState
}

export default withRouter(connect(mapStateToProps, {updateAdmin})(RegisterForm))
