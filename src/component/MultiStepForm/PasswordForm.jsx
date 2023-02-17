import React, { useState, useContext } from "react";
import { Form, Input, Button } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";

const PasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { next } = useContext(MultiStepFormContext);

  const handleSubmit = (values) => {
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Save the password and proceed to the next step
    console.log("Password saved:", values.password);
    setPassword("");
    setConfirmPassword("");
    next();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={"details__wrapper"}>
    <Form onFinish={handleSubmit} onFinishFailed={onFinishFailed}>
      <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter a password" }]}>
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        rules={[{ required: true, message: "Please confirm your password" }]}
      >
        <Input.Password value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default PasswordForm; 
