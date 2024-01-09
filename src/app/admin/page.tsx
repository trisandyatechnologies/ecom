"use client";
import React, { useState } from 'react';
import { Button, Flex, Form, Input, InputNumber } from 'antd';
import { addItem } from '@/lib/api';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};



const onFinish = (values: any) => {
  console.log(values);
 addItem(values);
  
};

const Admin: React.FC = () => (
  <Flex >
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600}}
    validateMessages={validateMessages}
    
  >
    <Form.Item name='item' label="Item Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name='price' label="Item Price" rules={[{ required: true }]} >
        <Input placeholder="Enter Price" />
      </Form.Item>
      <Form.Item name='mrp' label="Item MRP" rules={[{ required: true }]} >
        <Input  />
      </Form.Item>
      <Form.Item label="Discount" name='discount'>
        <Input  />
      </Form.Item>
      
      <Form.Item label="Description" name='description'>
        <Input  />
      </Form.Item>
      <Form.Item label="Brand" name='brand'>
        <Input  />
      </Form.Item>
      <Form.Item label="Quantity" name='quantity'>
        <Input  />
      </Form.Item>
      <Form.Item label="Sold By" name='sold_by'>
        <Input  />
      </Form.Item>
      <Form.Item label="Size" name='size'>
        <Input />
      </Form.Item>
      <Form.Item label="Type" name='type'>
        <Input  />
      </Form.Item>
      <Form.Item label="Capacity" name='capacity'>
        <Input  />
      </Form.Item>
      <Form.Item label="Origin" name='origin'>
        <Input  />
      </Form.Item>
      <Form.Item label="Weight" name='weight'>
        <Input  />
      </Form.Item>
      <Form.Item label="Pattern" name='pattern'>
        <Input  />
      </Form.Item>
      <Form.Item label="Units" name='units'>
        <Input  />
      </Form.Item>
      <Form.Item label="Flavour" name='flavour'>
        <Input  />
      </Form.Item>
      <Form.Item label="Style" name='style'>
        <Input  />
      </Form.Item>
    
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </Flex>
);

export default Admin;