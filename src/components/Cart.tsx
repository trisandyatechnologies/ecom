"use client";
import React from "react";
import { Affix, Button, Divider, Flex, Grid, Space, Typography } from "antd";
import { Col, Row } from "antd";
import { theme } from "antd";
import { useCartStore } from "@/lib/cartStore";
import { DELIVERY_FEE, MINIMUM_ORDER_VALUE, RUPEE } from "@/utils/config";
import Link from "next/link";
import { red } from "@ant-design/colors";
import { ShoppingCartOutlined } from "@ant-design/icons";
import CartItems from "./CartItems";

export default function Cart() {
  const {
    token: { padding, colorBorderSecondary },
  } = theme.useToken();
  const { lg } = Grid.useBreakpoint();

  const cart = useCartStore((s) => s.cart);
  const total = useCartStore((s) => s.total);

  const cartItems = Object.values(cart);

  const isCartEmpty = cartItems.length === 0;

  if (isCartEmpty) {
    return (
      <Flex
        gap={padding}
        vertical
        align="center"
        justify="center"
        style={{ height: "60vh" }}
      >
        <ShoppingCartOutlined
          style={{ color: red.primary, fontSize: padding * 4 }}
        />
        <Typography.Text style={{ fontSize: padding * 2 }}>
          Your Cart is <span style={{ color: red.primary }}>Empty!</span>
        </Typography.Text>
        <Link href="/" type="primary">
          <Button type="primary">Continue shopping</Button>
        </Link>
      </Flex>
    );
  }

  return (
    <main>
      <Row gutter={padding * 3} style={{ padding }}>
        <Col lg={16} xs={24}>
          <Space split="">
            <Typography.Title level={4}>Cart</Typography.Title>
            <Typography.Title level={4}>
              {cartItems.length} item{cartItems.length > 1 && "s"}
            </Typography.Title>
          </Space>
          <CartItems />
        </Col>
        <Col
          lg={8}
          xs={24}
          style={{
            borderLeft: lg ? `1px solid ${colorBorderSecondary}` : "none",
          }}
        >
          <Affix offsetTop={10}>
            <Typography.Title level={4}>Cart Summary</Typography.Title>
            <Row gutter={padding}>
              <Col span={12}>
                <Typography.Text>Total Price :</Typography.Text>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <Typography.Text>
                  {RUPEE}
                  {total.mrp}
                </Typography.Text>
              </Col>
            </Row>

            <Row gutter={padding}>
              <Col span={12}>
                <Typography.Text>Discount :</Typography.Text>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <Typography.Text type="success">
                  -{RUPEE}
                  {total.discount}
                </Typography.Text>
              </Col>
            </Row>

            <Row gutter={padding}>
              <Col span={12}>
                <Typography.Text>Delivery Fee :</Typography.Text>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <Typography.Text delete={total.price > MINIMUM_ORDER_VALUE}>
                  {RUPEE}
                  {DELIVERY_FEE}
                </Typography.Text>
              </Col>
            </Row>

            <Divider />

            <Row gutter={padding}>
              <Col span={12}>
                <Typography.Text>Order Total :</Typography.Text>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <Typography.Text strong>
                  {RUPEE}
                  {total.amount}
                </Typography.Text>
              </Col>
            </Row>
            <Row style={{ marginTop: padding }}>
              <Col span={24}>
                <Link href="/checkout">
                  <Button size="large" type="primary" block>
                    Checkout
                  </Button>
                </Link>
              </Col>
            </Row>
          </Affix>
        </Col>
      </Row>
    </main>
  );
}
