"use client";
import React from "react";

import { Button, Col, Form, Input, Row, theme } from "antd";
import Address from "./AddressForm";
import { useSession } from "next-auth/react";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export default function Profile() {
  const {
    token: { padding },
  } = theme.useToken();
  const { data: session } = useSession();

  return (
    <Form
      name="basic"
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
      initialValues={session?.user}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Row gutter={padding * 2} style={{ padding }}>
        <Col xs={24} lg={12}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please Enter your Email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="phone No"
            name="phone"
            rules={[
              { required: true, message: "Please Enter your phone number" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Address />
        </Col>
      </Row>
    </Form>
  );
}
