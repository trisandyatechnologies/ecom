import React from "react";
import { CloseCircleFilled, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, theme } from "antd";

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
    >
      <Form.List name="users">
        {(fields, { add, remove, ...restField }) => (
          <>
            {fields.map(({ key, name }) => (
              <Flex
                vertical
                key={key}
                style={{
                  border: `1px solid ${colorBorder}`,
                  padding: padding * 2,
                }}
              >
                <Form.Item
                  {...restField}
                  label="Full Name"
                  name={[name, "name"]}
                  rules={[
                    { required: true, message: "Please input your Name!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  {...restField}
                  label="Mobile Number"
                  name={[name, "mobile"]}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  {...restField}
                  label="Pincode"
                  name={[name, "pincode"]}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  {...restField}
                  label="Flat, House no."
                  name={[name, "address"]}
                  rules={[{ required: true }]}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                  {...restField}
                  label="Map Location"
                  name={[name, "map"]}
                  rules={[{ required: false }]}
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
