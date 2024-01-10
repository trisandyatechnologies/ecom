"use client";
import React, { useState } from "react";
import { Button, Flex, Form, Input, InputNumber, Select, Row, Col } from "antd";
import { addItem } from "@/lib/api";
import ImageUpload from "@/components/ImageUpload";
import { categoryItems } from "@/utils/util";

const onFinish = (values: any) => {
  console.log(values);
  addItem(values);
};

const NewItem: React.FC = () => (
  <Flex>
    <Form name="nest-messages" onFinish={onFinish} style={{ width: "100%" }}>
      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item name="images">
            <ImageUpload />
          </Form.Item>
        </Col>
        <Col xs={12} lg={8}>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <InputNumber placeholder="Enter Price" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={12} lg={8}>
          <Form.Item name="mrp" label="MRP" rules={[{ required: true }]}>
            <InputNumber
              style={{ width: "100%" }}
              placeholder="Max Retail Price"
            />
          </Form.Item>
        </Col>
        <Col xs={12} lg={8}>
          <Form.Item label="Quantity" name="quantity">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Category" name="category">
        <Select>
          {categoryItems.map(({ key, label }) => (
            <Select.Option key={key} value={key}>
              {label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>
      <Form.Item label="Brand" name="brand">
        <Input />
      </Form.Item>

      <Form.Item label="Sold By" name={["details", "soldBy"]}>
        <Input />
      </Form.Item>
      <Form.Item label="Size" name={["details", "size"]}>
        <Input />
      </Form.Item>
      <Form.Item label="Type" name={["details", "type"]}>
        <Input />
      </Form.Item>
      <Form.Item label="Capacity" name={["details", "capacity"]}>
        <Input />
      </Form.Item>
      <Form.Item label="Origin" name={["details", "origin"]}>
        <Input />
      </Form.Item>
      <Form.Item label="Weight" name={["details", "weight"]}>
        <Input />
      </Form.Item>
      <Form.Item label="Pattern" name={["details", "pattern"]}>
        <Input />
      </Form.Item>
      <Form.Item label="Units" name={["details", "units"]}>
        <Input />
      </Form.Item>
      <Form.Item label="Flavour" name={["details", "flavour"]}>
        <Input />
      </Form.Item>
      <Form.Item label="Style" name={["details", "style"]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Flex>
);

export default NewItem;
