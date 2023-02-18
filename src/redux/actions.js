export const SET_DETAILS = "SET_DETAILS";
export const SET_ERRORS = "SET_ERRORS";
export const SET_STEP = "SET_STEP";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const SET_ADDRESS = "SET_ADDRESS";

export const setDetails = (field, value) => ({
  type: SET_DETAILS,
  payload: {
    field,
    value,
  },
});

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  payload: {
    errors,
  },
});

export const nextStep = () => ({
  type: SET_STEP,
  payload: {
    step: 2,
  },
});

export const prevStep = () => ({
  type: SET_STEP,
  payload: {
    step: 1,
  },
});

export const submitForm = () => ({
  type: SUBMIT_FORM,
});

export const setAddress = (field, value) => ({
  type: SET_ADDRESS,
  payload: {
    field,
    value,
  },
});
