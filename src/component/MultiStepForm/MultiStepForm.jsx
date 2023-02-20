import React from "react";
import { connect } from "react-redux";
import Details from "./Details";
import Address from "./Address";
import PasswordForm from "./PasswordForm";
import AvatarUpload from "./AvatarUpload";
import Review from "./Review";
import { nextStep, previousStep } from "../../redux/actions";

const MultiStepForm = ({ step, nextStep, previousStep }) => {
  const renderSwitch = (step) => {
    switch (step) {
      case 1:
        return <Details step={step} />;
      case 2:
        return <Address step={step} />;
      case 3:
        return <PasswordForm step={step} />;
      case 4:
        return <AvatarUpload step={step} />;
      case 5:
        return <Review step={step} />;
      default:
        return <Details step={step} />;
    }
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className="registration__wrapper">
      {renderSwitch(step)}
      {step > 1 && (
        <div className={"form__item button__items d-flex justify-content-between"}>
          <button type={"button"} onClick={previousStep}>
            Back
          </button>
          {step < 5 && <button type={"button"} onClick={handleNext}>
            Next
          </button>}
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  nextStep: () => dispatch(nextStep()),
  previousStep: () => dispatch(previousStep()),
});

const mapStateToProps = (state) => ({
  step: state.registration.step,
});

export default connect(mapStateToProps, mapDispatchToProps)(MultiStepForm);
