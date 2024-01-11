"use client";

import React, { useEffect, useState } from "react";
import { Avatar, Button, Drawer, List, Skeleton, Space, Typography } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { getThumbnail } from "@/utils/util";
import Link from "antd/es/typography/Link";

const items = [
  {
    name: "salt",
    image: "123.png",
    price: 25,
    quantity: 1,
  },
  {
    name: "sugar",
    image: "123.png",
    price: 50,
    quantity: 1,
  },
  {
    name: "wheat",
    image: "123.png",
    price: 60,
    quantity: 1,
  },
  {
    name: "tajmahal",
    image: "123.png",
    price: 250,
    quantity: 1,
  },
];

const OrderedItemList: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FileTextOutlined type="primary" onClick={showDrawer} />

      <Drawer
        title="Ordered Items"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {items.map((item) => (
          <List className="demo-loadmore-list" itemLayout="horizontal">
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src={getThumbnail(item.image)} style={{ borderRadius: "0%" }} />
                }
                title={<Link href="" target="_blank">{item.name}</Link>}
              />
              <Space>
              <Typography>{item.price}/-</Typography>
              <Typography>{item.quantity}</Typography>
              </Space>
            </List.Item>
          </List>
        ))}
      </Drawer>
    </>
  );
};

export default OrderedItemList;
