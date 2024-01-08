"use client";

import { getCartItems, updateCartItemQuantity } from "@/lib/api";

import { Avatar, Button, List, Skeleton, Typography } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CartItem } from "@prisma/client";
export default function Home() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const handleQuantity = (cartItemId: string, updatedQuantity: number) => {
    updateCartItemQuantity(cartItemId, updatedQuantity).then(
      (updatedCartItem) => {
        setCartItems((items) => {
          const itemIndex = items.findIndex((it) => it.id === cartItemId);
          return [
            ...items.slice(0, itemIndex),
            updatedCartItem,
            ...items.slice(itemIndex + 1),
          ];
        });
      }
    );
  };
  useEffect(() => {
    getCartItems().then((items) => {
      setCartItems(items);
    });
  }, []);

  return (
    <main>
      <List
        className="demo-loadmore-list"
        itemLayout="vertical"
        dataSource={cartItems}
        renderItem={(cartItem) => (
          <List.Item
            actions={[
              <a
                key="list-loadmore-edit"
                onClick={() => {
                  handleQuantity(cartItem.id, cartItem.quantity - 1);
                }}
              >
                -
              </a>,
              <Typography key="count">{cartItem.quantity}</Typography>,
              <a
                key="list-loadmore-more"
                onClick={() => {
                  handleQuantity(cartItem.id, cartItem.quantity + 1);
                }}
              >
                +
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={cartItem.item.image} />}
              title={<Link href={"/"}>{cartItem.item.name}</Link>}
              description={cartItem.item.description}
            />
            <div>Delivery in next year</div>
          </List.Item>
        )}
      />
    </main>
  );
}
