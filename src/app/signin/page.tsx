'use client';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';


const signin: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{padding:'100px 400px'}}
    >
      <h1 style={{color:'blue',margin:'10px'}}>signin</h1>
      
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email! or phone number' }]}
      >
        <Input type='emial ' typeof='number' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
       <Button type="primary" htmlType="submit" className="login-form-button">
       <Link href='/cart' > signin </Link>
        </Button>
       <Link style={{margin:'5px'}} href="/signup">  Or  signup</Link>
      </Form.Item>
    </Form>
  );
};

export default signin;