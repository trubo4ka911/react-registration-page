// import React, { useState, useContext } from "react";
// import { Form, Input, Button } from "antd";
// import MultiStepFormContext from "./MultiStepFormContext";

// const PasswordForm = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const { next } = useContext(MultiStepFormContext);

//   const handleSubmit = (values) => {
//     if (values.password !== values.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     // Save the password and proceed to the next step
//     console.log("Password saved:", values.password);
//     setPassword("");
//     setConfirmPassword("");
//     next();
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <div className={"details__wrapper"}>
//     <Form onFinish={handleSubmit} onFinishFailed={onFinishFailed}>
//       <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter a password" }]}>
//         <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
//       </Form.Item>
//       <Form.Item
//         label="Confirm Password"
//         name="confirmPassword"
//         rules={[{ required: true, message: "Please confirm your password" }]}
//       >
//         <Input.Password value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//     </div>
//   );
// };

// export default PasswordForm; 


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';

class PasswordForm extends Component {
  handleInputChange = event => {
    const { name, value } = event.target;
    this.props.actions.setDetails(name, value);
  };

  handleBack = event => {
    event.preventDefault();
    this.props.actions.previousStep();
  };

  handleContinue = event => {
    event.preventDefault();
    const errors = this.validateFields();
    if (Object.keys(errors).length === 0) {
      this.props.actions.registerUser();
    } else {
      this.props.actions.setErrors(errors);
    }
  };

  validateFields = () => {
    const errors = {};
    const { password, confirmPassword } = this.props;
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
    const { password, confirmPassword, errors } = this.props;
    return (
      <div>
        <h1>Registration Form</h1>
        <h2>Step 3: Create Password</h2>
        <form>
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
          <button onClick={this.handleBack}>Back</button>
          <button onClick={this.handleContinue}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    password: state.registration.password,
    confirmPassword: state.registration.confirmPassword,
    errors: state.registration.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForm);
