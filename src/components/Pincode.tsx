"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  List,
  Space,
  Typography,
} from "antd";
import { addPincode, deletePincodes } from "@/lib/api";
import { usePincodeStore } from "@/lib/pincodeStore";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const Pincode: React.FC = () => {

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };

  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };
  
  const getPincode = usePincodeStore((s) => s.pincodes);
  const setPincodes = usePincodeStore((s) => s.setPinCodes);

  const onClickDeleteHandler = async (pincodeId: number) => {
    const deleted = await deletePincodes(pincodeId);
    if (deleted) {
      setPincodes();
    }
  };

  const onFinish = async (values: any) => {
    try {
      await addPincode(values);
    } catch (error) {
      console.error("Error", error);
    }
   setPincodes();
  };

  useEffect(() => {
      setPincodes();
  }, []);

  

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Id(Pincode)"
          name="id"
          rules={[{ required: true, message: "Please input your pincode!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.List
          name="areas"
          
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                
                  {...(index === 0
                    ? formItemLayout
                    : formItemLayoutWithOutLabel)}
                  label={index === 0 ? "Areas" : "" }
                  required={false}
                  key={field.key}
                  style={{marginLeft:120}}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message:
                          "Please input area's name",
                      },
                    ]}
                  
                  >
                    <Input placeholder="area name" style={{ width: "60%" }} />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%",marginLeft:200 }}
                  icon={<PlusOutlined />}
                >
                  Add area
                </Button>

                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Flex vertical>
        <List>
        {getPincode.map((pincode) => (
          <Flex>
            <List.Item >
              <List.Item.Meta  title={pincode.id} description={pincode.name}
/>
              <Flex gap={10}>
              <Typography>{pincode.id}</Typography>
              <Typography>{pincode.name}</Typography>
              <Space split="|">
                {pincode.areas.map(area => <Typography id={area}>{area}</Typography>)}
              </Space>
              <DeleteOutlined onClick={() => onClickDeleteHandler(pincode.id)}/>
              </Flex>
            </List.Item>
          </Flex>
        ))}
        </List>
      </Flex>
    </main>
  );
};

export default Pincode;
