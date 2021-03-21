import React from "react";
import { Form, Input } from "antd";

import { UserOutlined } from '@ant-design/icons';

import { Button, Block } from "../../../components";

const LoginForm = props => {
  const {
    values,
    isSubmitting
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Log in</h2>
        <p>Please, log into your account</p>
      </div>
      <Block>
        <Form className="login-form">
          <Form.Item>
            <Input
              id="email"
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              placeholder="E-Mail"
            />
          </Form.Item>
          <Form.Item
          >
            <Input
              id="password"
              size="large"
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              size="large"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;