import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Details = () => {
  const { details, setDetails, next } = useContext(MultiStepFormContext);

  return (
    <Formik
      initialValues={details}
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "Name is required";
        if (!values.lastName) errors.lastName = "Last name is required";
        if (!values.email) {
          errors.email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => (
        <div className={"details__wrapper"}>
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Name *</label>
            <Input name={"name"} />
            <p className={"error__feedback"}>{errors.name}</p>
          </div>
          <div className={`form__item ${errors.lastName && "input__error"}`}>
            <label>Last name *</label>
            <Input name={"lastName"} />
            <p className={"error__feedback"}>{errors.lastName}</p>
          </div>
          <div className={`form__item ${errors.email && "input__error"}`}>
            <label>Email *</label>
            <Input name={"email"} />
            <p className={"error__feedback"}>{errors.email}</p>
          </div>
          <div className={"form__item button__items d-flex justify-content-end"}>
            <Button type={"primary"} onClick={() => handleSubmit()}>
              Next
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Details;


