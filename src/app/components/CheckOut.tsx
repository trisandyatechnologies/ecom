import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps, Form, Input } from 'antd';

const CheckOut: React.FC = () => (
  <div>
    <Steps 
      items={[
        {
          title: 'Login',
          status: 'finish',
          icon: <UserOutlined />,
        },
        {
          title: 'Verification',
          status: 'finish',
          icon: <SolutionOutlined />,
        },
        {
          title: 'Pay',
          status: 'process',
          icon: <LoadingOutlined />,
        },
        {
          title: 'Done',
          status: 'wait',
          icon: <SmileOutlined />,
        },
      ]}
    />
    <Form>
      <Form.Item
        label="Full name"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
       <Input />
      </Form.Item>
      <Form.Item
        label="Mobile Number"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="PIN code"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Area, Street, Sector, Village"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Landmark"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  </div>
);

export default CheckOut;
