import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createRoot } from "react-dom";
import rootReducer from "./redux/reducers";
import MultiStepForm from "./component/MultiStepForm";

const store = createStore(rootReducer);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MultiStepForm />
  </Provider>
);
