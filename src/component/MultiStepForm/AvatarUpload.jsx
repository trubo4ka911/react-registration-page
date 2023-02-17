import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { css } from "@emotion/css";
import MultiStepFormContext from "./MultiStepFormContext";
import AvatarSelect, { AVATARS } from "./AvatarSelect";

const AvatarUpload = () => {
  const { avatarUpload, setAvatarUpload, next, prev } = useContext(
    MultiStepFormContext
  );

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setAvatarUpload({ ...avatarUpload, avatar: reader.result });
      };
    }
  };

  const handleAvatarSelect = (selectedAvatar) => {
    setAvatarUpload({ ...avatarUpload, avatar: selectedAvatar.url });
  };

  return (
    <Formik
      initialValues={avatarUpload}
      onSubmit={(values) => {
        setAvatarUpload(values);
        next();
      }}
    >
      {({ handleSubmit }) => {
        return (
          <div className={"details__wrapper"}>
            <AvatarSelect
              selectedAvatar={AVATARS.find((avatar) => avatar.url === avatarUpload.avatar)}
              onAvatarSelect={handleAvatarSelect}
            />
            <div className={css`
              margin-top: 20px;
            `}>
              <label>Upload your own avatar:</label>
              <input
  id="avatar-upload"
  type="file"
  accept="image/*"
  onChange={handleUpload}
  className={css`
    display: none;
  `} // hide the input element
/>
<label
  htmlFor="avatar-upload"
  className={css`
    display: inline-block;
    width: fit-content;
    margin: 20px 0;
    padding: 8px 16px;
    background-color: #1890ff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  `}
>
  Select Avatar
</label>
              {avatarUpload.avatar && (
                <img
                  src={avatarUpload.avatar}
                  alt="Avatar"
                  style={{ maxWidth: "200px", marginTop: "10px", borderRadius: "50%" }}
                />
              )}
            </div>
            <div className={"form__item button__items d-flex justify-content-between"}>
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

export default AvatarUpload;


