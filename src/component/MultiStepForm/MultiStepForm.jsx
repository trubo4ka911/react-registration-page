// import React, { useState } from "react";
// import { Steps } from "antd";
// import MultiStepFormContext from "./MultiStepFormContext";
// import { connect } from "react-redux";
// import Details from "./Details";
// import Address from "./Address";
// import AvatarUpload from "./AvatarUpload";
// import PasswordForm from "./PasswordForm";
// import Review from "./Review";

// const { Step } = Steps;

// const detailsInitialState = {
//   name: "",
//   lastName: "",
//   email: "",
// };

// const addressInitialState = {
//   city: "",
//   street: "",
//   house: "",
// };

// const avatarUploadInitialState = {
//   avatar: null,
// };

// const renderStep = (step) => {
//   switch (step) {
//     case 0:
//       return <Details />;
//     case 1:
//       return <Address />;
//     case 2:
//       return <AvatarUpload />;
//     case 3:
//       return <PasswordForm />;
//     case 4:
//       return <Review />;
//     default:
//       return null;
//   }
// };

// const MultiStepForm = () => {
//   const [details, setDetails] = useState(detailsInitialState);
//   const [address, setAddress] = useState(addressInitialState);
//   const [avatarUpload, setAvatarUpload] = useState(avatarUploadInitialState);
//   const [currentStep, setCurrentStep] = useState(0);

//   const next = () => {
//     if (currentStep === 4) {
//       // Save the form data
//       console.log("Form submitted:", { details, address, avatarUpload });
//       // Reset the form state
//       setCurrentStep(0);
//       setDetails(detailsInitialState);
//       setAddress(addressInitialState);
//       setAvatarUpload(avatarUploadInitialState);
//       return;
//     }
//     setCurrentStep(currentStep + 1);
//   };

//   const prev = () => setCurrentStep(currentStep - 1);

//   return (
//     <MultiStepFormContext.Provider
//       value={{
//         details,
//         setDetails,
//         address,
//         setAddress,
//         avatarUpload,
//         setAvatarUpload,
//         next,
//         prev,
//       }}
//     >
//       <Steps current={currentStep}>
//         <Step title="Fill in your details" />
//         <Step title="Address details" />
//         <Step title="Avatar" />
//         <Step title="Set Password" />
//         <Step title="Review and Save" />
//       </Steps>
//       <main>{renderStep(currentStep)}</main>
//     </MultiStepFormContext.Provider>
//   );
// };

// export default MultiStepForm;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import Details from './Details';
import Address from './Address';
import AvatarUpload from './AvatarUpload';
import PasswordForm from './PasswordForm';
import Review from './Review';

class MultiStepForm extends Component {
  handleNext = () => {
    const { step, actions } = this.props;
    switch (step) {
      case 1:
        actions.nextStep();
        break;
      case 2:
        actions.nextStep();
        break;
      case 3:
        actions.nextStep();
        break;
      case 4:
        actions.nextStep();
        break;
      default:
        break;
    }
  };

  handleBack = () => {
    const { step, actions } = this.props;
    switch (step) {
      case 2:
        actions.previousStep();
        break;
      case 3:
        actions.previousStep();
        break;
      case 4:
        actions.previousStep();
        break;
      default:
        break;
    }
  };

  handleSubmit = () => {
    console.log('Registration Form Submitted!');
  };

  render() {
    const { step } = this.props;
    switch (step) {
      case 1:
        return <Details handleNext={this.handleNext} />;
      case 2:
        return (
          <Address handleNext={this.handleNext} handleBack={this.handleBack} />
        );
      case 3:
        return (
          <AvatarUpload
            handleNext={this.handleNext}
            handleBack={this.handleBack}
          />
        );
      case 4:
        return (
          <PasswordForm
            handleNext={this.handleNext}
            handleBack={this.handleBack}
          />
        );
      case 5:
        return <Review handleSubmit={this.handleSubmit} handleBack={this.handleBack} />;
      default:
        return <Details handleNext={this.handleNext} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    step: state.registration.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiStepForm);
