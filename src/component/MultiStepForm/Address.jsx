// import React, { useContext } from "react";
// import { Formik } from "formik";
// import { Button } from "antd";
// import { Input, InputNumber } from "formik-antd";
// import MultiStepFormContext from "./MultiStepFormContext";
// const Address = () => {
//   const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
//   return (
//     <Formik
//       initialValues={address}
//       onSubmit={(values) => {
//         setAddress(values);
//         next();
//       }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.city) errors.city = "Address is required";
//         if (!values.street) errors.street = "Address is required";
//         if (!values.house) errors.house = "Address is required";
//         return errors;
//       }}
//     >
//       {({ handleSubmit, errors }) => {
//         return (
//           <div className={"details__wrapper"}>
//             <div className={`form__item ${errors.city && "input__error"}`}>
//               <label>City *</label>
//               <Input name={"city"} />
//               <p className={"error__feedback"}>{errors.city}</p>
//             </div>
//             <div className={`form__item ${errors.street && "input__error"}`}>
//               <label>Street *</label>
//               <Input name={"street"} />
//               <p className={"error__feedback"}>{errors.street}</p>
//             </div>
//             <div className={`form__item ${errors.house && "input__error"}`}>
//               <label>House number *</label>
//               <InputNumber name={"house"} min={1} />
//               <p className={"error__feedback"}>{errors.house}</p>
//             </div>
//             <div
//               className={
//                 "form__item button__items d-flex justify-content-between"
//               }
//             >
//               <Button type={"default"} onClick={prev}>
//                 Back
//               </Button>
//               <Button type={"primary"} onClick={handleSubmit}>
//                 Next
//               </Button>
//             </div>
//           </div>
//         );
//       }}
//     </Formik>
//   );
// };
// export default Address;

import React, { useContext } from "react";
import { connect } from 'react-redux';
import { Formik } from "formik";
import { Button } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import { setAddress } from '../../redux/actions';

const Address = ({ address, setAddress }) => {
  const { next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.city) errors.city = "Address is required";
        if (!values.street) errors.street = "Address is required";
        if (!values.house) errors.house = "Address is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.city && "input__error"}`}>
              <label>City *</label>
              <Input name={"city"} />
              <p className={"error__feedback"}>{errors.city}</p>
            </div>
            <div className={`form__item ${errors.street && "input__error"}`}>
              <label>Street *</label>
              <Input name={"street"} />
              <p className={"error__feedback"}>{errors.street}</p>
            </div>
            <div className={`form__item ${errors.house && "input__error"}`}>
              <label>House number *</label>
              <InputNumber name={"house"} min={1} />
              <p className={"error__feedback"}>{errors.house}</p>
            </div>
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
              <Button type={"default"} onClick={prev}>
                Back
              </Button>
              <Button type={"primary"} onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

const mapStateToProps = state => ({
  address: state.address
});

const mapDispatchToProps = dispatch => ({
  setAddress: values => dispatch(setAddress(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
