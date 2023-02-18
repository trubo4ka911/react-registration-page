import { combineReducers } from "redux";
import formReducer from "../component/redux/formReducer";

const rootReducer = combineReducers({
  formData: formReducer,
});

export default rootReducer;
