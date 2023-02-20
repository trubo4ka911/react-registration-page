import React, { useState } from "react";
import { connect } from "react-redux";
import { details, setDetails, nextStep } from "../../redux/actions";

const Details = ({ details, setDetails, nextStep }) => {
  const [name, setName] = useState(details.firstName || "");
  const [lastName, setLastName] = useState(details.lastName || "");
  const [email, setEmail] = useState(details.email || "");
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name) {
      errors.name = "First name is required";
    }
    if (!lastName) {
      errors.lastName = "Last name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setDetails({ firstName: name, lastName, email });
      nextStep();
    }
  };

  return (
    <div className={"details__wrapper"}>
      <form onSubmit={handleSubmit}>
        <div className={`form__item ${errors.name && "input__error"}`}>
          <label>First Name *</label>
          <input type={"text"} value={name} onChange={handleNameChange} />
          <p className={"error__feedback"}>{errors.name}</p>
        </div>
        <div className={`form__item ${errors.lastName && "input__error"}`}>
          <label>Last Name *</label>
          <input type={"text"} value={lastName} onChange={handleLastNameChange} />
          <p className={"error__feedback"}>{errors.lastName}</p>
        </div>
        <div className={`form__item ${errors.email && "input__error"}`}>
          <label>Email *</label>
          <input type={"email"} value={email} onChange={handleEmailChange} />
          <p className={"error__feedback"}>{errors.email}</p>
        </div>
        <div
          className={
            "form__item button__items d-flex justify-content-end"
          }
        >
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setDetails: (values) => dispatch(setDetails(values)),
  nextStep: () => dispatch(nextStep()),
});

const mapStateToProps = (state) => ({
  details: state.registration.details,
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
