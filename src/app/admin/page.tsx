"use client";
import React, { useState } from 'react';
import { Button, Dropdown, Flex, Form, Input, InputNumber, MenuProps, Select, Space } from 'antd';
import { addItem } from '@/lib/api';
import ImageUpload from '@/components/ImageUpload';
import { DownOutlined } from '@ant-design/icons';
import { Category } from '@prisma/client';

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
    <Form.Item name='name' label="Item Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name='images'>
    <ImageUpload/>
    </Form.Item>
    <Form.Item name='price' label="Item Price" rules={[{ required: true }]} >
        <InputNumber placeholder="Enter Price" type='number' />
      </Form.Item>
      <Form.Item name='mrp' label="Item MRP" rules={[{ required: true }]} >
        <InputNumber />
      </Form.Item>
      <Form.Item label="Discount" name='discount'>
        <InputNumber  />
      </Form.Item>
      <Form.Item label="Category" name='category'>
        <Select>
          {
            Object.keys(Category).map(cat => <Select.Option value={cat}>{cat.replaceAll('_', ' ')}</Select.Option>)
          }
        </Select>
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
      <Form.Item label="Sold By"name={['details', 'soldBy']}>
        <Input  />
      </Form.Item>
      <Form.Item label="Size" name={['details', 'size']}>
        <Input />
      </Form.Item>
      <Form.Item label="Type" name={['details', 'type']}>
        <Input  />
      </Form.Item>
      <Form.Item label="Capacity" name={['details', 'capacity']}>
        <Input  />
      </Form.Item>
      <Form.Item label="Origin" name={['details', 'origin']}>
        <Input  />
      </Form.Item>
      <Form.Item label="Weight" name={['details', 'weight']}>
        <Input  />
      </Form.Item>
      <Form.Item label="Pattern" name={['details', 'pattern']}>
        <Input  />
      </Form.Item>
      <Form.Item label="Units" name={['details', 'units']}>
        <Input  />
      </Form.Item>
      <Form.Item label="Flavour" name={['details', 'flavour']}>
        <Input  />
      </Form.Item>
      <Form.Item label="Style" name={['details', 'style']}>
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