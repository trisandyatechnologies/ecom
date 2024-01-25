"use client";
import {
  Avatar,
  Button,
  Col,
  Flex,
  Form,
  Image,
  Input,
  List,
  Row,
  Typography,
} from "antd";
import React from "react";
import { addCategory } from "@/lib/api";
import ImageUpload from "@/components/ImageUpload";
import { useCategoryStore } from "@/lib/categoryStore";
import { getThumbnail } from "@/utils/util";

const Categories: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await addCategory(values);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const getCategory = useCategoryStore((s) => s.categories);

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
              <Form.Item name="banner" label="Banner">
                <ImageUpload />
              </Form.Item>
            </Col>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ borderRadius: 5 }}
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
          <Col lg={24} xs={24} sm={24}>
            <Typography.Title level={4} style={{}}>
              Categories :
            </Typography.Title>
            <Form.Item>
              <List>
                <List.Item
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {getCategory.map((category: any) => (
                    <Flex style={{ fontSize: 18 }}>
                      <List.Item >
                        <List.Item.Meta
                          title={category.name}
                          description={category.description}
                          avatar={
                            <Avatar src={getThumbnail(category.banner[0])} />
                          }
                          style={{width:400}}
                        />
                      </List.Item>
                    </Flex>
                  ))}
                </List.Item>
              </List>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
};

export default Categories;
