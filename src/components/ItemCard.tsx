"use client";

import React from "react";
import { Flex, Space, Tag, Typography, theme } from "antd";
import { Avatar, Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import { Item } from "@prisma/client";
import { getImage, getThumbnail } from "@/utils/util";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { RUPEE } from "@/utils/config";

export default function Itemcard(props: Item) {
  const {
    images,
    name,
    brand,
    price,
    mrp,
    details: { weight, capacity, units },
  } = props;
  const {
    token: { padding },
  } = theme.useToken();
  return (
    <Card
      style={{
        maxWidth: 240,
      }}
      cover={
        <Image
          src={getThumbnail(images[0])}
          width={200}
          height={200}
          alt={name}
          style={{ height: "50%", padding }}
        />
      }
      bodyStyle={{ padding: padding, paddingTop: 0 }}
    >
      <Typography.Paragraph
        style={{ fontSize: 12, marginBottom: 0 }}
        ellipsis={{ rows: 2, tooltip: name }}
      >
        {name}
      </Typography.Paragraph>
      <Typography.Text type="secondary" style={{ fontSize: 12 }}>
        {weight ?? capacity} {units}
      </Typography.Text>
      <Space
        split=""
        align="center"
        style={{
          width: "100%",
          fontSize: padding,
        }}
      >
        <Typography.Text strong>
          {RUPEE}
          {price}
        </Typography.Text>
        <Typography.Text type="secondary" delete>
          {RUPEE}
          {mrp}
        </Typography.Text>
      </Space>

      <Tag style={{ marginBottom: padding / 2 }} color="purple">
        {Math.ceil(((mrp - price) / mrp) * 100)}% off
      </Tag>

      <AddToCart item={props} />
    </Card>
  );
}
