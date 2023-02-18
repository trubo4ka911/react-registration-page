import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import registrationReducer from "./reducers";

const rootReducer = combineReducers({
  registration: registrationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
