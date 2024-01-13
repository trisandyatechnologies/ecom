"use client";

import React from "react";
import { CartItem, Item } from "@prisma/client";
import { Button, ButtonProps, Flex, Typography } from "antd";
import { useCartStore } from "@/lib/cartStore";
import {
  MinusOutlined,
  PlusOutlined,
  DeleteOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { cartItemFromItem } from "@/utils/util";

interface Props {
  id: string;
  item?: Item;
  buttonProps?: ButtonProps;
}

export default function AddToCart({ item, id, buttonProps }: Props) {
  const cart = useCartStore((s) => s.cart);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);

  if (!cart[id] && item) {
    return (
      <Button
        type="primary"
        block
        onClick={() => addItem(id, cartItemFromItem(item))}
        {...(buttonProps ?? {})}
      >
        <ShoppingCartOutlined />
        Add to Cart
      </Button>
    );
  }

  const quantity = cart[id].quantity;

  return (
    <Flex gap={16} align="center">
      <Button
        danger={quantity === 1}
        icon={quantity === 1 ? <DeleteOutlined /> : <MinusOutlined />}
        onClick={() => removeItem(id)}
      />
      <Typography.Text strong>{quantity}</Typography.Text>
      <Button
        icon={<PlusOutlined />}
        onClick={() => addItem(id)}
        disabled={quantity > 4}
      />
    </Flex>
  );
}
