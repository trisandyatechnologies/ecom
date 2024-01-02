"use client";
import React, { useState } from "react";
import { Affix, Button, Divider, Flex, Space, Typography } from "antd";
import { Col, Row } from "antd";
import { Steps, theme } from "antd";
import { Avatar, Card, Skeleton, Switch } from "antd";

import { List } from "antd";

const steps = [
  {
    title: "Cart",
    content: "First-content",
  },
  {
    title: "Address",
    content: "Second-content",
  },
  {
    title: "Payment",
    content: "Last-content",
  },
  {
    title: "Summary",
    content: "Last-content",
  },
];
const CartItem = [
  {
    image: "https://images.meesho.com/images/products/308205375/cd8oh_400.webp",
    name: "Kids baby sofa seat and sofa cum bed for 1 to 2 year ",
    price: 100,
    size: "large",
    Qty: 1,
  },
  {
    image: "https://images.meesho.com/images/products/222754448/ilwoy_400.webp",
    name: "Kids Educational Velvet Learning Baby Pillow Cushion Soft Book",
    price: 400,
    size: "large",
    Qty: 1,
  },
  {
    image: "https://images.meesho.com/images/products/46618622/5bqvz_512.webp",
    name: "Teddy Bear ",
    price: 200,
    size: "large",
    Qty: 1,
  },
  {
    image: "https://images.meesho.com/images/products/308205375/cd8oh_400.webp",
    name: "Kids baby sofa seat and sofa cum bed for 1 to 2 year ",
    price: 100,
    size: "large",
    Qty: 1,
  },
  {
    image: "https://images.meesho.com/images/products/222754448/ilwoy_400.webp",
    name: "Kids Educational Velvet Learning Baby Pillow Cushion Soft Book",
    price: 400,
    size: "large",
    Qty: 1,
  },
  {
    image: "https://images.meesho.com/images/products/46618622/5bqvz_512.webp",
    name: "Teddy Bear ",
    price: 200,
    size: "large",
    Qty: 1,
  },
  {
    image: "https://images.meesho.com/images/products/308205375/cd8oh_400.webp",
    name: "Kids baby sofa seat and sofa cum bed for 1 to 2 year ",
    price: 100,
    size: "large",
    Qty: 1,
  },
  {
    image: "https://images.meesho.com/images/products/222754448/ilwoy_400.webp",
    name: "Kids Educational Velvet Learning Baby Pillow Cushion Soft Book",
    price: 400,
    size: "large",
    Qty: 1,
  },
  {
    image: "https://images.meesho.com/images/products/46618622/5bqvz_512.webp",
    name: "Teddy Bear ",
    price: 200,
    size: "large",
    Qty: 1,
  },
];
const { Meta } = Card;
export default function Cart() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const [loading, setLoading] = useState(true);

  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };

  return (
    <main style={{ background: "white" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={12}>
          <Typography.Title>meesho</Typography.Title>
        </Col>

        <Col span={12}>
          <Steps
            current={current}
            size="small"
            labelPlacement="vertical"
            items={items}
            style={{ marginTop: 15 }}
          />
        </Col>
      </Row>

      <Divider />

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={12} xs={24}>
          <Flex>
            <Typography>Cart</Typography>
            <Divider
              type="vertical"
              style={{ borderLeft: "1px solid black", height: "30px" }}
            />
            <Typography> {CartItem.length}Items</Typography>
          </Flex>
          {CartItem.map(({ image, name, price, size, Qty }, i) => (
            <Card
              style={{
                background: "white",
                border: "1px solid black",
                margin: 20,
              }}
              actions={[
                <Typography>Sold by : </Typography>,
                <Typography>Free Delivery</Typography>,
              ]}
            >
              <Flex vertical>
                <Meta
                  style={{
                    background: "white",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                  avatar={
                    <Avatar
                      src={image}
                      style={{ width: 100, height: 100, borderRadius: 0 }}
                    />
                  }
                  title={name}
                  description={price}
                />
              </Flex>
              <Typography
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                Edit
              </Typography>
              <Typography>All issue easy returns allowed</Typography>
              <Flex gap={10}>
                <Typography> Size:{size}</Typography>
                <Typography>Qty:{Qty}</Typography>
              </Flex>
              {
                <Button style={{ border: "none", fontSize: 20 }}>
                  x Remove
                </Button>
              }
            </Card>
          ))}
        </Col>
        <Col
          lg={12}
          xs={24}
          style={{
            borderLeft: "1px solid gray",
            background: "white",
          }}
        >
          <Affix offsetTop={10}>
            <Typography style={{ fontSize: 20 }}>ProductDetails</Typography>

            <Row>
              <Col span={12}>
                <Typography style={{ textDecoration: "underline dotted" }}>
                  Total Product Price :{" "}
                </Typography>
              </Col>
              <Col span={12}>
                <Typography> +700</Typography>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <Typography
                  style={{
                    color: "#0DC46C",
                    textDecoration: "underline dotted",
                  }}
                >
                  Total Discounts :
                </Typography>
              </Col>
              <Col span={12}>
                <Typography> -70</Typography>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <Typography style={{ textDecoration: "underline dotted" }}>
                  Additional Fees :
                </Typography>
              </Col>
              <Col span={12}>
                <Typography> +100</Typography>
              </Col>
            </Row>

            <Divider />

            <Row>
              <Col span={12}>
                <Typography>Order Total :</Typography>
              </Col>
              <Col span={12}>
                <Typography> 730</Typography>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Typography style={{ marginLeft: 40 }}>
                  Clicking on ‘Continue’ will not deduct any money
                </Typography>
                <Button
                  style={{
                    background: "#832E71",
                    marginLeft: 20,
                    width: "60%",
                    height: 50,
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  Continue
                </Button>
              </Col>
            </Row>
          </Affix>
        </Col>
      </Row>
    </main>
  );
}
