import React from "react";
import { CloseCircleFilled, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Space, theme } from "antd";

const onFinish = (values: any) => {
  console.log("Received values of form:", values);
};

const Address: React.FC = () => {
  const {
    token: { colorBorder, padding },
  } = theme.useToken();
  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
      style={{ maxWidth: 600 }}
    >
      <Form.List name="users">
        {(fields, { add, remove, ...restField }) => (
          <>
            {fields.map(({ key, name }) => (
              <Flex
                vertical
                key={key}
                align="center"
                style={{ border: `1px solid ${colorBorder}`, padding }}
              >
                <Form.Item
                  {...restField}
                  label="FullName"
                  name={[name, "FullName"]}
                  rules={[
                    { required: true, message: "Please input your Name!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  {...restField}
                  label="mobile Number"
                  name={[name, "mobile"]}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  {...restField}
                  label="pincode"
                  name={[name, "pincode"]}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  {...restField}
                  label="Flat, House no."
                  name={[name, "house"]}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  {...restField}
                  label="Area"
                  name={[name, "Area"]}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  {...restField}
                  label="landmark"
                  name={[name, "landmark"]}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  {...restField}
                  label="Town"
                  name={[name, "Town"]}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  {...restField}
                  label="State"
                  name={[name, "state"]}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <CloseCircleFilled
                    style={{ fontSize: 23 }}
                    onClick={() => remove(name)}
                  />
                </Form.Item>
              </Flex>
            ))}
            <Form.Item>
              <Button onClick={() => add()} block icon={<PlusOutlined />}>
                Add New Address
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Address;
