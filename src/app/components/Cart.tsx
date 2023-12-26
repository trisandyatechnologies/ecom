"use client";
import React, { useState } from "react";
import { Button, Divider, Flex, Space, Typography } from "antd";
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
];
const { Meta } = Card;
export default function Cart() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [price, setPrice] = useState([]);
  let total = 0;
  // const onChange1 = (e) => {
  //   let amount = setPrice(e.target.value);
  //   //  total += amount;
  // };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

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
      {/* <Space style={{ position: "fixed" }}> */}
      <Row>
        <Col span={4}>
          <Typography style={{ fontSize: 43 }}> meesho</Typography>
        </Col>
        <Col span={4}></Col>
        <Col span={4}>
          <Steps
            current={current}
            size="small"
            labelPlacement="vertical"
            items={items}
            style={{ marginTop: 15 }}
          />
          {/* <div style={contentStyle}>{steps[current].content}</div>
              <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => next()}>
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    onClick={() => message.success("Processing complete!")}
                  >
                    Done
                  </Button>
                )}
                {current > 0 && (
                  <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                    Previous
                  </Button>
                )}
              </div> */}
        </Col>
        <Col span={4}></Col>
      </Row>

      <Divider />
      {/* </Space> */}
      <Row>
        <Col span={12}>
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
              <Flex>
                <Meta
                  style={{ background: "white", width: 400 }}
                  avatar={
                    <Avatar
                      src={image}
                      style={{ width: 100, height: 100, borderRadius: 0 }}
                    />
                  }
                  title={name}
                  description={price}
                />

                <Button
                  style={{ border: "none", color: "violet", fontSize: 20 }}
                >
                  Edit
                </Button>
              </Flex>
              {
                <Button style={{ border: "none", fontSize: 20 }}>
                  x Remove
                </Button>
              }
              <Flex style={{ justifyContent: "space-around" }}>
                <Typography>Qty:{Qty}</Typography>

                <Typography> Size:{size}</Typography>
              </Flex>
              <Typography>All issue easy returns allowed</Typography>
            </Card>
          ))}
        </Col>
        <Col
          span={12}
          style={{
            borderLeft: "1px solid gray",
            background: "white",
          }}
        >
          <Space
            direction="vertical"
            style={{ position: "fixed", marginLeft: 10 }}
          >
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
                <Typography> +800</Typography>
              </Col>
            </Row>

            <Button style={{ background: "violet" }}>Continue</Button>
          </Space>
        </Col>
      </Row>
    </main>
  );
}
