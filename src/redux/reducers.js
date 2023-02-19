import {
  SET_DETAILS,
  SET_STEP,
  SET_ERRORS,
  SUBMIT_FORM,
  SET_ADDRESS,
  SET_EMAIL,
  SET_NAME,
  SET_LAST_NAME,
  SET_AVATAR,
} from "./actions";

const initialState = {
  step: 1,
  details: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  address: {
    city: "",
    street: "",
    house: "",
  },
  avatar: null,
  password: "",
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
      console.log("set step:", action.payload);
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
    case SET_ADDRESS:
      return {
        ...state,
        ...action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case SET_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;
