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

  componentDidMount() {
    const { formData } = this.props;
    if (formData) {
      const { email, password, confirmPassword } = formData;
      this.setState({
        email: email,
        password: password,
        confirmPassword: confirmPassword
      });
    }
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
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this._handleChange}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this._handleChange}
              required
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this._handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    formData: state.formData,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setFormData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
