import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import MultiStepForm from "./component/MultiStepForm";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <MultiStepForm />
  </Provider>,
  document.getElementById("root")
);
