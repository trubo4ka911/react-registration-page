const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  gender: "",
  country: "",
  step: 1,
  errors: {},
  submitted: false,
};

export default function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DETAILS:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case SET_STEP:
      return {
        ...state,
        step: action.payload.step,
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload.errors,
      };
    case SUBMIT_FORM:
      return {
        ...state,
        submitted: true,
      };
    default:
      return state;
  }
}
