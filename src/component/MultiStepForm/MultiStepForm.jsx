// // MultiStepForm.js

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { updateFirstName, updateLastName, updateEmail, updatePassword } from '../actions';

// class MultiStepForm extends Component {
//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'firstName':
//         this.props.updateFirstName(value);
//         break;
//       case 'lastName':
//         this.props.updateLastName(value);
//         break;
//       case 'email':
//         this.props.updateEmail(value);
//         break;
//       case 'password':
//         this.props.updatePassword(value);
//         break;
//       default:
//         break;
//     }
//   };

//   render() {
//     const { firstName, lastName, email, password } = this.props;
//     return (
//       <form>
//         <label>
//           First Name:
//           <input type="text" name="firstName" value={firstName} onChange={this.handleInputChange} />
//         </label>
//         <label>
//           Last Name:
//           <input type="text" name="lastName" value={lastName} onChange={this.handleInputChange} />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={email} onChange={this.handleInputChange} />
//         </label>
//         <label>
//           Password:
//           <input type="password" name="password" value={password} onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   firstName: state.firstName,
//   lastName: state.lastName,
//   email: state.email,
//   password: state.password,
// });

// const mapDispatchToProps = {
//   updateFirstName,
//   updateLastName,
//   updateEmail,
//   updatePassword,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MultiStepForm);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextStep, prevStep, setFormData } from '../redux/formActions';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Success from './Success';

class MultiStepForm extends Component {
_next = () => {
const { nextStep } = this.props;
let currentStep = this.props.currentStep;
currentStep = currentStep >= 2 ? 3 : currentStep + 1;
nextStep(currentStep);
};

_prev = () => {
const { prevStep } = this.props;
let currentStep = this.props.currentStep;
currentStep = currentStep <= 1 ? 1 : currentStep - 1;
prevStep(currentStep);
};

render() {
const { currentStep } = this.props;

switch (currentStep) {
  case 1:
    return <StepOne nextStep={this._next} />;
  case 2:
    return (
      <StepTwo
        nextStep={this._next}
        prevStep={this._prev}
      />
    );
  case 3:
    return (
      <StepThree
        nextStep={this._next}
        prevStep={this._prev}
      />
    );
  case 4:
    return <Success />;
  default:
    return null;
}
}
}

const mapStateToProps = state => {
return {
currentStep: state.currentStep
};
};

const mapDispatchToProps = dispatch => {
return bindActionCreators(
{
nextStep,
prevStep,
setFormData
},
dispatch
);
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiStepForm);