"use client";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Col,
  Drawer,
  Flex,
  Form,
  Input,
  InputNumber,
  List,
  Row,
  Select,
  Skeleton,
  Space,
  Typography,
  message,
} from "antd";
import { categoryItems, getThumbnail } from "@/utils/util";
import Link from "antd/es/typography/Link";
import { Item} from "@prisma/client";
import ImageUpload from "./ImageUpload";
import { editItem } from "@/lib/api";

export default function EditItem({
  data,
  onClose,
}: {
  data?: Item[];
  onClose: () => void;
}) {
    const [item, setItem] = useState<Item>();
    const [form] = Form.useForm();
    const onFinish = async (formValues: Partial<Item>) => {
        if (!item?.id) return;
        const updatedUser = await editItem(item.id, formValues);
        if (updatedUser) {
          setItem(updatedUser);
          message.success("Updated successfully.");
        } else {
          message.error("Update failed.");
        }
      };


  return (
    <Drawer
      title="Edit Items"
      placement="right"
      onClose={onClose}
      open={!!data}
    >
      <Flex>
      <Form
        name="nest-messages"
        onFinish={onFinish}
        style={{ width: "100%" }}
        layout="vertical"
        form={form}
      >
        <Row gutter={16}>
          <Col xs={12} lg={12}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={12} lg={12}>
            <Form.Item label="Category" name="category">
              <Select>
                {categoryItems.map(({ key, label }) => (
                  <Select.Option key={key} value={key}>
                    {label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={12} lg={8}>
            <Form.Item name="price" label="Price" rules={[{ required: true }]}>
              <InputNumber
                placeholder="Enter Price"
                style={{ width: "100%" }}
              />
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
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col xs={24} lg={12}>
            <Form.Item label="Description" name="description">
              <Input.TextArea />
            </Form.Item>
          </Col>

          <Col xs={24} lg={12}>
            <Form.Item name="images">
              <ImageUpload />
            </Form.Item>
          </Col>

          <Col xs={12} lg={12}>
            <Form.Item label="Brand" name="brand">
              <Input />
            </Form.Item>
          </Col>

          <Col xs={12} lg={12}>
            <Form.Item label="Sold By" name={["details", "soldBy"]}>
              <Input />
            </Form.Item>
          </Col>

          <Col xs={12} lg={8}>
            <Form.Item label="Type" name={["details", "type"]}>
              <Input />
            </Form.Item>
          </Col>

          <Col xs={12} lg={8}>
            <Form.Item label="Capacity" name={["details", "capacity"]}>
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={12} lg={8}>
            <Form.Item label="Origin" name={["details", "origin"]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={12} lg={8}>
            <Form.Item label="Weight" name={["details", "weight"]}>
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item label="Units" name={["details", "units"]}>
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={12} lg={8}>
            <Form.Item label="Size" name={["details", "size"]}>
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col xs={24} lg={12}>
            <Form.Item label="Pattern" name={["details", "pattern"]}>
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} lg={12}>
            <Form.Item label="Flavour" name={["details", "flavour"]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item label="Style" name={["details", "style"]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
    </Drawer>
  );
}
