export const SET_DETAILS = "SET_DETAILS";
export const SET_ERRORS = "SET_ERRORS";
export const SET_STEP = "SET_STEP";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_EMAIL = "SET_EMAIL";
export const SET_NAME = "SET_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";
export const SET_AVATAR = "SET_AVATAR";

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

export const nextStep = () => {
  console.log("nextStep called");
  return {
    type: SET_STEP,
    payload: 2,
  };
};

export const previousStep = () => ({
  type: SET_STEP,
  payload: 1,
});

export const submitForm = () => ({
  type: SUBMIT_FORM,
});

export const setAddress = (values) => ({
  type: SET_ADDRESS,
  payload: {
    ...values,
  },
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setLastName = (lastName) => ({
  type: SET_LAST_NAME,
  payload: lastName,
});

export const setAvatar = (file) => ({
  type: SET_AVATAR,
  payload: file,
});
