import { SET_DETAILS, SET_STEP, SET_ERRORS, SUBMIT_FORM } from "./actions";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  city: "",
  street: "",
  house: "",
  avatar: null,
  step: 1,
  errors: {},
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case SET_STEP:
      return { ...state, step: action.payload };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case SUBMIT_FORM:
      return {
        ...state,
        step: 1,
        name: "",
        lastName: "",
        email: "",
        city: "",
        street: "",
        house: "",
        avatar: null,
        errors: {},
      };
    default:
      return state;
  }
};

export default registrationReducer;
