"use client";

import { addCartItem, getItems } from "@/lib/api";
import { Item } from "@prisma/client";
import { Card, List, Space, Typography, Image, Button, theme, App } from "antd";
import { Component, useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";



const userId = "6582d402c4e753141edcd9be";

export default function Home() {
  const {
    token: { padding },
  } = theme.useToken();
  const [items, setItems] = useState<Item[]>([]);

  const addToCart = (itemId: string) => {
    addCartItem(itemId).then((item) => {
      console.log({ item });
    });
  };

  useEffect(() => {
    getItems().then((items) => {
      setItems(items);
    });
  }, []);

  return (
    <main>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 5,
        }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
           <ItemCard {...item}/>
          </List.Item>
        )}
      />
      
      
    </main>
  );
}
