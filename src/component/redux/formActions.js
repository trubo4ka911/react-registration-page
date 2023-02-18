import { NEXT_STEP, PREV_STEP, SET_FORM_DATA } from "./actionTypes";

export const nextStep = (currentStep) => {
  return {
    type: NEXT_STEP,
    currentStep: currentStep,
  };
};

export const prevStep = (currentStep) => {
  return {
    type: PREV_STEP,
    currentStep: currentStep,
  };
};

export const setFormData = (formData) => {
  return {
    type: SET_FORM_DATA,
    formData: formData,
  };
};
