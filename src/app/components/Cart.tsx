"use client";
import React from "react";
import {
  Affix,
  Button,
  Divider,
  Empty,
  Flex,
  Grid,
  Space,
  Typography,
} from "antd";
import { Col, Row } from "antd";
import { theme } from "antd";
import { Avatar, Card } from "antd";
import { useCartStore } from "@/lib/cartStore";
import { getThumbnail } from "@/utils/util";
import { DELIVERY_FEE, MINIMUM_ORDER_VALUE, RUPEE } from "@/utils/config";
import AddToCart from "@/components/AddToCart";
import Link from "next/link";
import { red } from "@ant-design/colors";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Meta } = Card;
export default function CartPage() {
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
          {cartItems.map((item, i) => (
            <Card key={item.id} style={{ marginBottom: padding / 2 }}>
              <Flex justify="space-between" align="flex-start">
                <Meta
                  avatar={
                    <Avatar
                      src={getThumbnail(item.image)}
                      style={{ width: 100, height: 100, borderRadius: 0 }}
                    />
                  }
                  title={
                    <Typography.Paragraph ellipsis={{ tooltip: item.name }}>
                      {item.name}
                    </Typography.Paragraph>
                  }
                  description={<AddToCart id={item.id} />}
                  style={{ maxWidth: "60%", minWidth: 200 }}
                />
                <Space>
                  <Typography.Text strong>
                    {RUPEE}
                    {item.price * item.quantity}
                  </Typography.Text>
                  <Typography.Text delete type="secondary">
                    {RUPEE}
                    {item.mrp * item.quantity}
                  </Typography.Text>
                </Space>
              </Flex>
            </Card>
          ))}
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
                <Button size="large" type="primary" block>
                  Checkout
                </Button>
              </Col>
            </Row>
          </Affix>
        </Col>
      </Row>
    </main>
  );
}
