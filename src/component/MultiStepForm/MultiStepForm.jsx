// MultiStepForm.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFirstName, updateLastName, updateEmail, updatePassword } from '../actions';

class MultiStepForm extends Component {
  handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        this.props.updateFirstName(value);
        break;
      case 'lastName':
        this.props.updateLastName(value);
        break;
      case 'email':
        this.props.updateEmail(value);
        break;
      case 'password':
        this.props.updatePassword(value);
        break;
      default:
        break;
    }
  };

  render() {
    const { firstName, lastName, email, password } = this.props;
    return (
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" value={firstName} onChange={this.handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={lastName} onChange={this.handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={this.handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  firstName: state.firstName,
  lastName: state.lastName,
  email: state.email,
  password: state.password,
});

const mapDispatchToProps = {
  updateFirstName,
  updateLastName,
  updateEmail,
  updatePassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiStepForm);
