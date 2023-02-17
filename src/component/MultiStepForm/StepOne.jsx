import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFormData } from '../actions/formActions';

class StepOne extends Component {
constructor(props) {
super(props);
this.state = {
email: '',
password: '',
confirmPassword: ''
};
}

_handleChange = event => {
const { name, value } = event.target;
this.setState({
[name]: value
});
};

_handleSubmit = event => {
event.preventDefault();
const { nextStep, setFormData } = this.props;
const { email, password, confirmPassword } = this.state;
const formData = {
email: email,
password: password,
confirmPassword: confirmPassword
};
setFormData(formData);
nextStep();
};

render() {
const { email, password, confirmPassword } = this.state;
return (
<div>
<h2>Step 1</h2>
<form onSubmit={this._handleSubmit}>
<div>
<label>Email Address</label>
<input
           type="text"
           name="email"
           value={email}
           onChange={this._handleChange}
         />
</div>
<div>
<label>Password</label>
<input
           type="password"
           name="password"
           value={password}
           onChange={this._handleChange}
         />
</div>
<div>
<label>Confirm Password</label>
<input
           type="password"
           name="confirmPassword"
           value={confirmPassword}
           onChange={this._handleChange}
         />
</div>
<button type="submit">Next</button>
</form>