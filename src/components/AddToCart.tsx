"use client";

import React from "react";
import { CartItem, Item } from "@prisma/client";
import { Button, Flex, Typography } from "antd";
import { useCartStore } from "@/lib/cartStore";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const cartItemFromItem = ({
  id,
  name,
  images,
  description,
  mrp,
  price,
  brand,
  details: { weight },
}: Item): CartItem => ({
  id,
  name,
  image: images[0],
  description: description ?? "",
  mrp,
  price,
  quantity: 1,
  brand: brand ?? "Generic",
  weight,
});

export default function AddToCart({ item }: { item: Item }) {
  const cart = useCartStore((s) => s.cart);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);
  if (!cart[item.id]) {
    return (
      <Button
        type="primary"
        block
        onClick={() => addItem(cartItemFromItem(item))}
      >
        Add to Cart
      </Button>
    );
  }

  const quantity = cart[item.id].quantity;

  return (
    <Flex gap={16} align="center">
      <Button
        icon={quantity === 1 ? <DeleteOutlined /> : <MinusOutlined />}
        onClick={() => removeItem(item.id)}
      />
      <Typography>{quantity}</Typography>
      <Button
        icon={<PlusOutlined />}
        onClick={() => addItem(cartItemFromItem(item))}
        disabled={quantity > 4}
      />
    </Flex>
  );
}
