import { combineReducers } from "redux";
import formReducer from "./formReducer";

const rootReducer = combineReducers({
  formData: formReducer,
});

export default rootReducer;
