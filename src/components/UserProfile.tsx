"use client";
import React from "react";

import { Button, Col, Form, Input, Row, theme } from "antd";
import Address from "./AddressForm";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  Email?: string;
  Name?: string;
  mobile?: string;
};

export default function Profile() {
  const {
    token: { padding },
  } = theme.useToken();

  return (
    <Row gutter={padding}>
      <Col xs={24} lg={12}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Name"
            name="Name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="Email"
            rules={[{ required: true, message: "Please Enter your Email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="phone No"
            name="mobile"
            rules={[
              { required: true, message: "Please Enter your phone number" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button style={{ marginLeft: 24 }} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col xs={24} lg={12}>
        <Address />
      </Col>
    </Row>
  );
}
