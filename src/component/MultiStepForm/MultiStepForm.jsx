import React, { useState } from "react";
import { Steps } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";
import Details from "./Details";
import Address from "./Address";
import AvatarUpload from "./AvatarUpload";
import PasswordForm from "./PasswordForm";
import Review from "./Review";

const { Step } = Steps;

const detailsInitialState = {
  name: "",
  lastName: "",
  email: "",
};

const addressInitialState = {
  city: "",
  street: "",
  house: "",
};

const avatarUploadInitialState = {
  avatar: null,
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Details />;
    case 1:
      return <Address />;
    case 2:
      return <AvatarUpload />;
    case 3:
      return <PasswordForm />;
    case 4:
      return <Review />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [avatarUpload, setAvatarUpload] = useState(avatarUploadInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 4) {
      // Save the form data
      console.log("Form submitted:", { details, address, avatarUpload });
      // Reset the form state
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      setAvatarUpload(avatarUploadInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <MultiStepFormContext.Provider
      value={{
        details,
        setDetails,
        address,
        setAddress,
        avatarUpload,
        setAvatarUpload,
        next,
        prev,
      }}
    >
      <Steps current={currentStep}>
        <Step title="Fill in your details" />
        <Step title="Address details" />
        <Step title="Avatar" />
        <Step title="Set Password" />
        <Step title="Review and Save" />
      </Steps>
      <main>{renderStep(currentStep)}</main>
    </MultiStepFormContext.Provider>
  );
};

export default MultiStepForm;
