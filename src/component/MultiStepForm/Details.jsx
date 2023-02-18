// import React, { useContext } from "react";
// import { Formik } from "formik";
// import { Button } from "antd";
// import { Input } from "formik-antd";
// import MultiStepFormContext from "./MultiStepFormContext";

// const Details = () => {
//   const { details, setDetails, next } = useContext(MultiStepFormContext);

//   return (
//     <Formik
//       initialValues={details}
//       onSubmit={(values) => {
//         setDetails(values);
//         next();
//       }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.name) errors.name = "Name is required";
//         if (!values.lastName) errors.lastName = "Last name is required";
//         if (!values.email) {
//           errors.email = "Email is required";
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//         ) {
//           errors.email = "Invalid email address";
//         }
//         return errors;
//       }}
//     >
//       {({ handleSubmit, errors }) => (
//         <div className={"details__wrapper"}>
//           <div className={`form__item ${errors.name && "input__error"}`}>
//             <label>Name *</label>
//             <Input name={"name"} />
//             <p className={"error__feedback"}>{errors.name}</p>
//           </div>
//           <div className={`form__item ${errors.lastName && "input__error"}`}>
//             <label>Last name *</label>
//             <Input name={"lastName"} />
//             <p className={"error__feedback"}>{errors.lastName}</p>
//           </div>
//           <div className={`form__item ${errors.email && "input__error"}`}>
//             <label>Email *</label>
//             <Input name={"email"} />
//             <p className={"error__feedback"}>{errors.email}</p>
//           </div>
//           <div className={"form__item button__items d-flex justify-content-end"}>
//             <Button type={"primary"} onClick={() => handleSubmit()}>
//               Next
//             </Button>
//           </div>
//         </div>
//       )}
//     </Formik>
//   );
// };

// export default Details;


// import React from "react";
// import { Formik } from "formik";
// import { Button } from "antd";
// import { Input } from "formik-antd";
// import { connect } from "react-redux";
// import { SET_DETAILS } from "../../redux/actions";

// const Details = ({ details, SET_DETAILS, next }) => {
//   return (
//     <Formik
//       initialValues={details}
//       onSubmit={(values) => {
//         SET_DETAILS(values);
//         next();
//       }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.name) errors.name = "Name is required";
//         if (!values.lastName) errors.lastName = "Last name is required";
//         if (!values.email) {
//           errors.email = "Email is required";
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//         ) {
//           errors.email = "Invalid email address";
//         }
//         return errors;
//       }}
//     >
//       {({ handleSubmit, errors }) => (
//         <div className={"details__wrapper"}>
//           <div className={`form__item ${errors.name && "input__error"}`}>
//             <label>Name *</label>
//             <Input name={"name"} />
//             <p className={"error__feedback"}>{errors.name}</p>
//           </div>
//           <div className={`form__item ${errors.lastName && "input__error"}`}>
//             <label>Last name *</label>
//             <Input name={"lastName"} />
//             <p className={"error__feedback"}>{errors.lastName}</p>
//           </div>
//           <div className={`form__item ${errors.email && "input__error"}`}>
//             <label>Email *</label>
//             <Input name={"email"} />
//             <p className={"error__feedback"}>{errors.email}</p>
//           </div>
//           <div className={"form__item button__items d-flex justify-content-end"}>
//             <Button type={"primary"} onClick={() => handleSubmit()}>
//               Next
//             </Button>
//           </div>
//         </div>
//       )}
//     </Formik>
//   );
// };

// const mapStateToProps = (state) => ({
//   details: state.details,
// });

// const mapDispatchToProps = {
//   SET_DETAILS,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Details);


import React from "react";
import { connect } from "react-redux";

const Details = ({ firstName, lastName, email, dispatch }) => {
  const handleFirstNameChange = (event) => {
    dispatch({
      type: "UPDATE_FIRST_NAME",
      payload: event.target.value,
    });
  };

  const handleLastNameChange = (event) => {
    dispatch({
      type: "UPDATE_LAST_NAME",
      payload: event.target.value,
    });
  };

  const handleEmailChange = (event) => {
    dispatch({
      type: "UPDATE_EMAIL",
      payload: event.target.value,
    });
  };

  return (
    <div className={"details__wrapper"}>
      <div className={"form__item"}>
        <label>First Name *</label>
        <input type={"text"} value={firstName} onChange={handleFirstNameChange} />
      </div>
      <div className={"form__item"}>
        <label>Last Name *</label>
        <input type={"text"} value={lastName} onChange={handleLastNameChange} />
      </div>
      <div className={"form__item"}>
        <label>Email *</label>
        <input type={"text"} value={email} onChange={handleEmailChange} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    firstName: state.details.firstName,
    lastName: state.details.lastName,
    email: state.details.email,
  };
};

export default connect(mapStateToProps)(Details);
