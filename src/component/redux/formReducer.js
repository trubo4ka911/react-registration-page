const initialState = {
  currentStep: 1,
  formData: {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: action.payload,
      };
    case "PREV_STEP":
      return {
        ...state,
        currentStep: action.payload,
      };
    case "SET_FORM_DATA":
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
