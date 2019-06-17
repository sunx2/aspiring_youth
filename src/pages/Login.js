import React from 'react';
import { withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMessage from '../components/ErrorMessage';
import UserAuth from '../util/UserAuth';
import AuthApi from '../util/network';

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
	}

	login = async () => {
		const result = await AuthApi.login(this.state.email, this.state.password)
		console.log(result)
		if (result.success === 'true' || result.success === 'True' || result.success === true) {
			this.setState({ errMsg: '' })
			UserAuth.login({})
			this.props.history.push('/dashboard');
		} else {
			if (result.content && result.content.message) this.setState({ errMsg: result.content.message })
		}
	}

	register = async () => {
		const result = await AuthApi.register(this.state.name, this.state.email, this.state.password);
		console.log(result)
		if (result.success === 'true' || result.success === 'True' || result.success === true) {
			this.setState({ errMsg: '' })
			this.login()
		} else {
			if (result.content && result.content.message) this.setState({ errMsg: result.content.message })
		}
	}

	showLogin = () => {
		this.setState({
			showLogin: true,
			name: '',
			password: '',
			email: '',
			errMsg: ''
		})
	}

	showRegister = () => {
		this.setState({
			showLogin: false,
			name: '',
			password: '',
			email: '',
			errMsg: ''
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