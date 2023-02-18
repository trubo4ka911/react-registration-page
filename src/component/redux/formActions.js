export const nextStep = (step) => {
  return {
    type: "NEXT_STEP",
    payload: step,
  };
};

export const prevStep = (step) => {
  return {
    type: "PREV_STEP",
    payload: step,
  };
};

export const setFormData = (data) => {
  return {
    type: "SET_FORM_DATA",
    payload: data,
  };
};
