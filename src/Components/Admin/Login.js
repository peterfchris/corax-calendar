import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateAdmin} from '../../redux/adminReducer'
import {Link} from 'react-router-dom'

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
					<button onClick={this.handleLogin}><Link to='/calendar'>Login</Link></button>
				</form>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
	return reduxState
}

export default  withRouter(connect(mapStateToProps, {updateAdmin})(Login))
