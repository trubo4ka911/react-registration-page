import React, { useState } from "react";
import { connect } from "react-redux";
import { setAddress, nextStep, previousStep } from "../../redux/actions";

const Address = ({ address, setAddress, nextStep, previousStep }) => {
  const [city, setCity] = useState(address.city || "");
  const [street, setStreet] = useState(address.street || "");
  const [house, setHouse] = useState(address.house || 1);
  const [errors, setErrors] = useState({});

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleHouseChange = (e) => {
    setHouse(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!city) {
      errors.city = "City is required";
    }
    if (!street) {
      errors.street = "Street is required";
    }
    if (!house) {
      errors.house = "House number is required";
    }

    if (Object.keys(errors).length === 0) {
      setAddress({ city, street, house });
      console.log("nextStep called from Address");
      nextStep();
    }
  };

  return (
    <div className={"details__wrapper"}>
      <form onSubmit={handleSubmit}>
        <div className={`form__item ${errors.city && "input__error"}`}>
          <label>City *</label>
          <input type={"text"} value={city} onChange={handleCityChange} />
          <p className={"error__feedback"}>{errors.city}</p>
        </div>
        <div className={`form__item ${errors.street && "input__error"}`}>
          <label>Street *</label>
          <input type={"text"} value={street} onChange={handleStreetChange} />
          <p className={"error__feedback"}>{errors.street}</p>
        </div>
        <div className={`form__item ${errors.house && "input__error"}`}>
          <label>House number *</label>
          <input
            type="number"
            name="house"
            value={house}
            onChange={handleHouseChange}
          />
          <p className={"error__feedback"}>{errors.house}</p>
        </div>
        <div
          className={
            "form__item button__items d-flex justify-content-between"
          }
        >
          <button type={"button"} onClick={previousStep}>
            Back
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setAddress: (values) => dispatch(setAddress(values)),
  nextStep: () => dispatch(nextStep()),
  previousStep: () => dispatch(previousStep()),
});

const mapStateToProps = (state) => ({
  address: state.registration.address,
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
