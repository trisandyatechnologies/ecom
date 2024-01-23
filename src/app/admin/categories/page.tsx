"use client";
import { Button, Col, Flex, Form, Input, Row } from "antd";
import React from "react";
import { catagoriesItems } from "@/lib/api";
import ImageUpload from "@/components/ImageUpload";

const Categories: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await catagoriesItems(values);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Flex>
      <Form name="nest-messages" onFinish={onFinish} form={form}>
        <Row gutter={16}>
          <Col xs={24} lg={12}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item label="Description" name="description">
              <Input.TextArea />
            </Form.Item>
            <Col xs={24} lg={24}>
              {" "}
              <Form.Item name="banner" label="Banner">
                <ImageUpload />
              </Form.Item>
            </Col>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
};

export default Categories;
