import React, { useState } from "react";
import { connect } from "react-redux";
import { setName, setLastName, setEmail, nextStep } from "../../redux/actions";

const Details = ({ name, lastName, email, setName, setLastName, setEmail, nextStep }) => {
  const [errors, setErrors] = useState({});

  const handlenameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNext = () => {
    const errors = {};
    if (!name) {
      errors.name = "First name is required";
    }
    if (!lastName) {
      errors.lastName = "Last name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }
    if (Object.keys(errors).length === 0) {
      nextStep();
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className={"details__wrapper"}>
      <div className={`form__item ${errors.name && "input__error"}`}>
        <label>First Name *</label>
        <input type={"text"} value={name} onChange={handlenameChange} />
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
      <div className={"form__item button__items"}>
        <button type={"button"} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(setName(name)),
  setLastName: (lastName) => dispatch(setLastName(lastName)),
  setEmail: (email) => dispatch(setEmail(email)),
  nextStep: () => dispatch(nextStep()),
});

const mapStateToProps = (state) => ({
  name: state.registration.name,
  lastName: state.registration.lastName,
  email: state.registration.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
