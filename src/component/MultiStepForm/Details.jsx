import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';

class Details extends Component {
  handleInputChange = event => {
    const { name, value } = event.target;
    this.props.actions.setDetails(name, value);
  };

  handleContinue = event => {
    event.preventDefault();
    const errors = this.validateFields();
    if (Object.keys(errors).length === 0) {
      this.props.actions.nextStep();
    } else {
      this.props.actions.setErrors(errors);
    }
  };

  validateFields = () => {
    const errors = {};
    const { email, password, confirmPassword } = this.props;
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  render() {
    const { email, password, confirmPassword, firstName, lastName, errors } = this.props;
    return (
      <div>
        <h1>Registration Form</h1>
        <h2>Step 1: Enter Your Details</h2>
        <form>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleInputChange}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>
          <button onClick={this.handleContinue}>Continue</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.registration.email,
    password: state.registration.password,
    confirmPassword: state.registration.confirmPassword,
    firstName: state.registration.firstName,
    lastName: state.registration.lastName,
    errors: state.registration.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
