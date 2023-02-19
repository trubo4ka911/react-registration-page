import React, { useEffect } from "react";
import { connect } from "react-redux";
import Details from "./Details";
import Address from "./Address";
import PasswordForm from "./PasswordForm";
import AvatarUpload from "./AvatarUpload";
import Review from "./Review";
import { nextStep, previousStep } from "../../redux/actions";

const MultiStepForm = ({ step, nextStep, previousStep }) => {
  useEffect(() => {
    console.log("step value in MultiStepForm: ", step);
  }, [step]);

  const renderSwitch = (step) => {
    switch (step) {
      case 1:
        return <Details />;
      case 2:
        return <Address />;
      case 3:
        return <PasswordForm />;
      case 4:
        return <AvatarUpload />;
      case 5:
        return <Review />;
      default:
        return <Details />;
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
  details: state.registration.details,
  address: state.registration.address,
  avatar: state.registration.avatar,
  password: state.registration.password,
  errors: state.registration.errors,
});

export default connect(mapStateToProps, mapDispatchToProps)(MultiStepForm);
