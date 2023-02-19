import React, { useState } from "react";
import { connect } from "react-redux";
import { setAvatar, nextStep, previousStep } from "../../redux/actions";

const AvatarUpload = ({ avatar, setAvatar, nextStep, previousStep }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const beforeUpload = (file) => {
    const isJpgOrPng =
      file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      alert("You can only upload JPG/PNG file!");
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      alert("Image must smaller than 2MB!");
      return false;
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setLoading(true);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageUrl(reader.result);
        setAvatar(event.target.files[0]);
        setLoading(false);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleRemove = () => {
    setAvatar(null);
    setImageUrl("");
  };

  const uploadButton = (
    <div>
      {loading ? "Loading" : "Upload"}
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleChange}
        style={{ opacity: "0", position: "absolute", zIndex: "-1" }}
      />
    </div>
  );

  return (
    <div className={"details__wrapper"}>
      <div className={"form__item"}>
        <label>Avatar *</label>
        <div className="avatar-uploader">
          {imageUrl || avatar ? (
            <img
              src={imageUrl ? imageUrl : URL.createObjectURL(avatar)}
              alt="avatar"
              style={{ width: "100%" }}
            />
          ) : (
            uploadButton
          )}
          {imageUrl || avatar ? (
            <button onClick={handleRemove}>Remove</button>
          ) : null}
        </div>
      </div>
      <div
        className={
          "form__item button__items d-flex justify-content-between"
        }
      >
        <button type={"button"} onClick={previousStep}>
          Back
        </button>
        <button type={"submit"} onClick={() => nextStep()}>
          Submit
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  avatar: state.registration.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  setAvatar: (avatar) => dispatch(setAvatar(avatar)),
  nextStep: () => dispatch(nextStep()),
  previousStep: () => dispatch(previousStep()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarUpload);
