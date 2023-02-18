// import React from "react";
// import "./styles.css";
// import MultiStepForm from "./component/MultiStepForm";

// function App() {
//   return <MultiStepForm />;
// }

// export default App;
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./actions/userActions";
import MultiStepForm from "./component/MultiStepForm/MultiStepForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Registration Page</h1>
      <MultiStepForm />
    </div>
  );
}

export default App;
