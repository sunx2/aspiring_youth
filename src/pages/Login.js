import React from 'react';
import {withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMessage from '../components/ErrorMessage';
import Auth from '../util/auth';

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showLogin: true,
			errMsg: '',
			name: '',
			password: '',
			email: ''
		}
		//this.base = "http://localhost:8000"
	}

	login = async () => {
		console.log(`${this.state.email} : ${this.state.password}`)
		Auth.login({})
		this.props.history.push('/dashboard');
		/*
		const url = this.base + '/api/auth/authenticate'
		const data = {
			email: this.state.email,
			password: this.state.password	
		}
		const resp = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		const json = await resp.json()
		console.log(json)
		if(resp.status !== 200) {
			this.setState({errMsg:json.message})
		} else {
			Auth.login(json.data)
			this.props.history.push('/dashboard');
		}
		*/
	}

	register = async () => {
		console.log(`${this.state.email} : ${this.state.password}  : ${this.state.name}`)
		/*
		const url = this.base + '/api/auth/register'
		const data = {
			email: this.state.email,
			password: this.state.password,
			name:this.state.name,
			type:this.state.userType
		}
		const resp = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		const json = await resp.json()
		console.log(json)
		if(resp.status !== 200) {
			this.setState({errMsg:json.message})
		} else {
			this.login()
		}*/
	}

	showLogin = () => {
		this.setState({
			showLogin: true,
			name: '',
			password: '',
			email: ''
		})
	}

	showRegister = () => {
		this.setState({
			showLogin: false,
			name: '',
			password: '',
			email: ''
		})
	}

	handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		const loginForm = (
			<div>
				<div className="card-header">
					<h1>Login</h1>
				</div>
				<div className="card-body">
					<div className="form-group">
						<label>Email address:</label>
						<input name="email" type="email" className="form-control" value={this.state.email} onChange={this.handleInputChange}></input>
					</div>
					<div className="form-group">
						<label>Password:</label>
						<input name="password" type="password" className="form-control" value={this.state.password} onChange={this.handleInputChange}></input>
					</div>

					<div className="well">New to AspiringYouth?<button type="button" className="btn btn-link" onClick={this.showRegister}>Register Here</button></div>
				</div>
				<div className="card-footer">
					<button className="btn btn-success" onClick={this.login}>Login</button>
				</div>
			</div>
		);

		const signupForm = (
			<div>
				<div className="card-header">
					<h1>Register</h1>
				</div>
				<div className="card-body">
					<div className="form-group">
						<label>Name:</label>
						<input name="name" type="text" className="form-control" value={this.state.name} onChange={this.handleInputChange}></input>
					</div>
					<div className="form-group">
						<label>Email address:</label>
						<input name="email" type="email" className="form-control" value={this.state.email} onChange={this.handleInputChange}></input>
					</div>
					<div className="form-group">
						<label>Password:</label>
						<input name="password" type="password" className="form-control" value={this.state.password} onChange={this.handleInputChange}></input>
					</div>

					<div className="well">Already use AspiringYouth?<button type="button" className="btn btn-link" onClick={this.showLogin}>Login Here</button></div>
				</div>
				<div className="card-footer">
					<button className="btn btn-success" onClick={this.register}>Register</button>
				</div>
			</div>
		);
		return (
			<div className="container" style={{ marginTop: "10vh" }}>
				<ErrorMessage msg={this.state.errMsg}></ErrorMessage>
				<div className="card shadow-lg p-3 mb-5 bg-white rounded">
					{this.state.showLogin ? loginForm : signupForm}
				</div>
			</div>
		);
	}
}

export default withRouter(Login);	