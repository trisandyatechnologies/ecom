"use client";

import React from "react";
import { Flex, Space, Typography, theme } from "antd";
import { Avatar, Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import { Item } from "@prisma/client";
import { getImage, getThumbnail } from "@/utils/util";
import Image from "next/image";
import AddToCart from "./AddToCart";

export default function Itemcard(props: Item) {
  const { images, name, brand, price, mrp } = props;
  const {
    token: { padding },
  } = theme.useToken();
  return (
    <Card
      style={{
        minWidth: 240,
      }}
      cover={
        <Image
          src={getThumbnail(images[0])}
          width={400}
          height={400}
          alt={name}
          style={{ height: "100%", padding: padding / 4 }}
        />
      }
      bodyStyle={{ padding: padding }}
    >
      <Typography.Title level={4}>{brand}</Typography.Title>
      <Typography.Text strong style={{ fontSize: padding }}>
        {name}
      </Typography.Text>
      <Flex gap={padding / 2} align="center" style={{ width: "100%" }}>
        <Typography style={{ fontSize: 24 }}>
          <sup style={{ fontSize: padding }}>₹</sup>
          {price}
        </Typography>
        <Typography.Text type="secondary">M.R.P: ₹{mrp}</Typography.Text>
        <Typography.Text type="success">
          ({Math.ceil(((mrp - price) / mrp) * 100)}% off)
        </Typography.Text>
      </Flex>
      <Typography>Free Delivery, on orders above ₹ 500/-</Typography>
      <Typography.Text type="secondary">
        Same day delivery if ordered before 12 PM
      </Typography.Text>

      <AddToCart item={props} />
    </Card>
  );
}
