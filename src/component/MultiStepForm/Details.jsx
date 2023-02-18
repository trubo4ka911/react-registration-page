import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';

class Details extends Component {
  handleInputChange = event => {
    const { name, value } = event.target;
    if(name==='email'){
        this.props.actions.setEmail(value);
    }
    if(name==='name'){
        this.props.actions.setFirstName(value);
    }
    if(name==='lastName'){
        this.props.actions.setLastName(value);
    }
  };

  handleContinue = event => {
    event.preventDefault();
    const errors = this.validateFields();
    if (Object.keys(errors).length === 0) {
      this.props.actions.onNextStep();
    } else {
      this.props.actions.setErrors(errors);
    }
  };

  validateFields = () => {
    const errors = {};
    const { name, lastName, email } = this.props;
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }
    return errors;
  };

  render() {
    const { name, lastName, email, errors } = this.props;
    return (
      <div>
        <h1>Registration Form</h1>
        <h2>Step 1: Enter Your Details</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
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
          <button onClick={this.handleContinue}>Continue</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.registration.name,
    lastName: state.registration.lastName,
    email: state.registration.email,
    errors: state.registration.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
