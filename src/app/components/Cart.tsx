"use client";
import React from "react";
import { Affix, Button, Divider, Flex, Typography } from "antd";
import { Col, Row } from "antd";
import { theme } from "antd";
import { Avatar, Card } from "antd";
import { useCartStore } from "@/lib/cartStore";
import { getThumbnail } from "@/utils/util";

const { Meta } = Card;
export default function CartPage() {
  const { token } = theme.useToken();

  const cart = useCartStore((s) => s.cart);
  const cartItems = Object.values(cart);
  return (
    <main style={{ background: "white" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={12} xs={24}>
          <Flex>
            <Typography>Cart</Typography>
            <Divider
              type="vertical"
              style={{ borderLeft: "1px solid black", height: "30px" }}
            />
            <Typography> {cartItems.length} Items</Typography>
          </Flex>
          {cartItems.map((item, i) => (
            <Card
              key={item.id}
              style={{
                background: "white",
                border: "1px solid black",
                margin: 20,
              }}
              actions={[
                <Typography> Above 500/- purchase Free Delivery</Typography>,
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
                      src={getThumbnail(item.image)}
                      style={{ width: 100, height: 100, borderRadius: 0 }}
                    />
                  }
                  title={item.name}
                  description={item.price}
                />
              </Flex>
              <Typography
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                Update Quantity
              </Typography>
              <Typography>All issue easy returns allowed</Typography>
              <Flex gap={10}>
                <Typography>Qty : {item.quantity}</Typography>
              </Flex>
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
