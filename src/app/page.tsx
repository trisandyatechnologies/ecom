"use client";

import { addCartItem, getItems } from "@/lib/api";
import { Item } from "@prisma/client";
import { Card, List, Space, Typography, Image, Button, theme, App } from "antd";
import { Component, useEffect, useState } from "react";



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
            <Card cover={<Image alt={item.name} src={item.image} />}>
              <Card.Meta
                title={
                  <Space>
                    <Typography>{item.brand}</Typography>
                    <Typography>{item.name}</Typography>
                  </Space>
                }
                description={
                  <Space>
                    <Typography>{item.price}</Typography>
                    <Typography>onwards</Typography>
                  </Space>
                }
              />
              <Button
                style={{ marginTop: padding }}
                type="primary"
                onClick={() => addToCart(item.id)}
              >
                Add to Cart
              </Button>
            </Card>
          </List.Item>
        )}
      />
      
      
    </main>
  );
}
