import React, { useState } from "react";
import { connect } from "react-redux";
import { setAddress } from "../../redux/actions";

const Address = ({ address, setAddress, previousStep, onNext }) => {
  const [city, setCity] = useState(address.city || "");
  const [street, setStreet] = useState(address.street || "");
  const [house, setHouse] = useState(address.house || "");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleHouseChange = (e) => {
    setHouse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress({ city, street, house });
    onNext();
  };

  return (
    <div className={"details__wrapper"}>
      <form onSubmit={handleSubmit}>
        <div className={`form__item`}>
          <label>City *</label>
          <input type={"text"} value={city} onChange={handleCityChange} />
        </div>
        <div className={`form__item`}>
          <label>Street *</label>
          <input type={"text"} value={street} onChange={handleStreetChange} />
        </div>
        <div className={`form__item`}>
          <label>House number *</label>
          <input
            type="number"
            name="house"
            value={house}
            onChange={handleHouseChange}
          />
        </div>
        <div

          className={
            "form__item button__items d-flex justify-content-between"
          }
        >
          <button type={"button"} onClick={previousStep}>
            Back
          </button>
          <button type="submit" onClick={handleSubmit}>Next</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setAddress: (values) => dispatch(setAddress(values)),
});

const mapStateToProps = (state) => ({
  address: state.registration.address,
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
