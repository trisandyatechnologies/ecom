"use client";

import React from "react";
import ItemCard from "@/components/ItemCard";
import { List } from "antd";
import { Item } from "@prisma/client";
const { Item } = List;

export default function ItemList({ data }: { data: Item[] }) {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
        xxl: 5,
      }}
      dataSource={data}
      renderItem={(item) => (
        <Item>
          <ItemCard {...item} />
        </Item>
      )}
    />
  );
}
