"use client";
import React from "react";
import {Flex, Typography } from "antd";
import { Avatar, Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import { Item } from "@prisma/client";
const { Meta } = Card;
export default function Itemcard({
  image,
  name,
  price,
}: Item) {
  return (
    <Card
      style={{
        background: "white",
        border: "1px solid black",
        margin: "5px 15px",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Meta
        style={{
          background: "white",
          display: "flex",
          padding: "auto",
        }}
        avatar={
          <Avatar
            src={image}
            style={{
              display: "flex",
              maxWidth: "190px",
              borderRadius: 0,
              paddingLeft: "30px",
              margin: "0px",
            }}
          />
        }
      />
      <Typography
        style={{ textAlign: "left", paddingTop: "5px", fontSize: "15px" }}
      >
        {name}
      </Typography>
      <Flex style={{ gap: "5px" }}>
        <Typography style={{ fontSize: "24px" }}>{price}</Typography>
        <Typography style={{ paddingTop: "10px" }}>onwards</Typography>
      </Flex>
      <Typography
        style={{
          color: "rgb(97, 97, 115)",
          background: "rgb(248, 248, 255)",
          padding: 0,
          margin: 0,
          textAlign: "left",
          width: "90px",
          borderRadius: "14px",
        }}
      >
        Free Delivery
      </Typography>
      <Flex style={{ gap: "7px", paddingTop: "6px" }}>
        <Typography
          style={{
            background: "rgb(3, 141, 99)",
            color: "white",
            borderRadius: "8px",
            width: "45px",
          }}
        >
          <StarFilled />{" "}
        </Typography>
      </Flex>
    </Card>
  );
}
