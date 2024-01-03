'use client';
import React, { useState } from 'react';
import { Col, Flex, Row, Space, Typography } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { Progress } from 'antd';


const IntegerStep: React.FC = () => {
 

  return (
    
    <Row >
     
      <Col span={6}>
       
    <Typography style={{color:"green",fontSize:'40px'}}>3.5 <StarOutlined style={{color:'green'}}/></Typography>
    <Typography style={{border:'none'}}>5464 Ratings</Typography>
    <Typography>243534 Reviews</Typography>
        
      </Col>
      <Col style={{width:'450px'}}>

         <>
         
     
    <Col span={18} style={{ display: "flex", flexDirection: "row", alignItems: "center", width:"370px", gap:"4px"}}>
      <Typography style={{ width: '70%', textAlign: 'center',padding:'5px 5px' }}>Excellent</Typography>
      <Progress percent={91} strokeColor="green" style={{width:"900px"}}/>
    </Col>
    <Col span={18} style={{ display: "flex", flexDirection: "row", alignItems: "center", width:"370px", gap:"4px"}}>
      <Typography style={{ width: '70%', textAlign: 'center',padding:'5px 5px' }}>Very good</Typography>
      <Progress percent={40} strokeColor="green" style={{width:"900px"}}/>
    </Col>
    <Col span={18} style={{ display: "flex", flexDirection: "row", alignItems: "center", width:"370px", gap:"4px"}}>
      <Typography style={{ width: '70%', textAlign: 'center',padding:'5px 5px' }}>Good</Typography>
      <Progress percent={45} strokeColor="yellow" style={{width:"900px"}}/>
    </Col>
    <Col span={18} style={{ display: "flex", flexDirection: "row", alignItems: "center", width:"370px", gap:"4px"}}>
      <Typography style={{ width: '70%', textAlign: 'center',padding:'5px 5px' }}>Average</Typography>
      <Progress percent={22} strokeColor="orange" style={{width:"900px"}}/>
    </Col>
    <Col span={18} style={{ display: "flex", flexDirection: "row", alignItems: "center", width:"370px", gap:"4px"}}>
      <Typography style={{ width: '70%', textAlign: 'center',padding:'5px 5px' }}>Poor</Typography>
      <Progress percent={31} strokeColor="red" style={{width:"900px"}}/>
    </Col>
  </>

  
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