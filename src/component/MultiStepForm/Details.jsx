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

import React from "react";
import { connect } from "react-redux";
import { setDetails } from "../../redux/actions/authActions";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm_password: "",
      error: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, confirm_password } = this.state;
    if (password !== confirm_password) {
      this.setState({ error: "Passwords do not match" });
    } else {
      this.props.setDetails({ email, password });
      this.props.nextStep();
    }
  };

  render() {
    const { email, password, confirm_password, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirm_password"
          value={confirm_password}
          onChange={this.handleChange}
          placeholder="Confirm Password"
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Next</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDetails: (details) => dispatch(setDetails(details)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

