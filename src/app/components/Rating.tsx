'use client';
import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider, Space, Typography } from 'antd';
import { StarOutlined } from '@ant-design/icons';


const IntegerStep: React.FC = () => {
  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue: number) => {
    setInputValue(newValue);
  };

  return (
    <Row style={{marginTop:'20%'}}>
     
      <Col span={8}>
       
    <Typography style={{color:"green",fontSize:'50px'}}>3.5 <StarOutlined /></Typography>
    <Typography style={{border:'none'}}>5464 Ratings</Typography>
    <Typography>243534 Reviews</Typography>
        
      </Col>
      <Col span={6}>
        
        <Slider
    
    
        
          defaultValue={30}
        />
      
      
        <Slider
          min={3}
          
      defaultValue={40}
        />
          <Slider
    
    
        
    defaultValue={30}
  />


  <Slider
  style={{color:'red'}}
    min={3}
    
    
defaultValue={40}

  />
      </Col>
    
    </Row>
  );
};


   
  

const Rating: React.FC = () => (
  <Space style={{ width: '100%' }} direction="vertical">
    <IntegerStep />
    {/* <DecimalStep /> */}
  </Space>
);

export default Rating;