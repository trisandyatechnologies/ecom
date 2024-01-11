"use client"


import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Button, Flex, Skeleton, Space, Typography } from 'antd';
import { List } from "antd";
import { Item } from "@prisma/client";
import { getThumbnail } from '@/utils/util';
import { StrikethroughOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Item } = List;

export default function ItemsList({ data }: { data: Item[] }) {
 
  return (
    <List
      className="demo-loadmore-list"
      
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
            
            <List.Item.Meta
              avatar={<Avatar src={getThumbnail(item.images[0])} style={{borderRadius:"0%"}} />}
              title={<Link href={`/products/${item.id}`} target="_blank">{item.name}</Link>}
            />
            <Flex gap={50}>
            <Typography style={{textDecoration:"line-through"}}>{item.mrp}/-</Typography>
            <Typography>{item.price}/-</Typography>
            <Typography>{item.quantity}</Typography>
            
            </Flex>
        </List.Item>
      )}
    />
  );
};

