import { Button, Col, Row } from "antd";
import React, { useContext } from "react";
import MultiStepFormContext from "./MultiStepFormContext";

const Review = () => {
  const {avatarUpload, details, address, next, prev } = useContext(MultiStepFormContext);
  return (
    <div className={"details__wrapper"}>
      <Row>
        <Col span={24}>
          <h1>Details</h1>
          <img src={avatarUpload.avatar?.url} alt="Selected Avatar" />
          <p>Name: {details.name}</p>
          <p>Last Name: {details.lastName}</p>
          <p>Email: {details.email}</p>
        </Col>
        <Col span={24}>
          <h1>Address</h1>
          <p>City: {address.city}</p>
          <p>Street: {address.street}</p>
          <p>House: {address.house}</p>
          <div
            className={
              "form__item button__items d-flex justify-content-between"
            }
          >
            <Button type={"default"} onClick={prev}>
              Back
            </Button>
            <Button type={"primary"} onClick={next}>
              Confirm
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Review;
