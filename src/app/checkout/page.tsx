"use client";
import React, { useState } from 'react';
import { Button, message, Steps, Collapse, Typography, theme } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';

const { Step } = Steps;
const { Panel } = Collapse;

const steps = [
  {
    title: "Address",
    status: "process",
    icon: <UserOutlined />,
    content: (
      <Typography style={{ paddingLeft: 24, textAlign: 'left' }}>
        <Typography>Delivery address</Typography>
        <Typography>Yaswanth</Typography>
        <Typography>9/9b, pedakallepalli</Typography>
        <Typography>pedakallepalli</Typography>
        <Typography>Challapalli, ANDHRA PRADESH 500009 </Typography>
        <Button
          style={{
            width: '180px',
            backgroundColor: 'rgb(120, 129, 165)',
          }}
        >
          Edit
        </Button>
      </Typography>
    ),
  },
  {
    title: "Payment",
    status: "process",
    icon: <SolutionOutlined />,
    content: (
      <Typography style={{ paddingLeft: 24, textAlign: 'left' }}>
        <Typography>Cash on delivery</Typography>
        <Typography>Other Method will be available soon</Typography>
      </Typography>
    ),
  },
  {
    title: "Delivery",
    status: "process",
    icon: <LoadingOutlined />,
    content: (
      <Typography style={{ paddingLeft: 24, textAlign: 'left', fontSize: '15px' }}>
        Items and delivery
      </Typography>
    ),
  },
  {
    title: "Done",
    status: "wait",
    icon: <SmileOutlined />,
    content: <Typography>Order placed sucessfully</Typography>,
  },
];

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={steps.map((item) => ({ key: item.title, title: item.title }))}>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} icon={step.icon} />
        ))}
      </Steps>
      <Collapse activeKey={current.toString()}>
        {steps.map((step, index) => (
          <Panel header={step.title} key={index} forceRender>
            {step.content}
          </Panel>
        ))}
      </Collapse>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
      </div>
    </>
  );
};

export default App;

















































































































