import { Avatar, Button, Flex, Rate, Typography } from "antd";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import Search from "antd/es/input/Search";
import React from "react";

const Orders = [
  {
    orderId: "1",
    supplier: "SONU ENTERPRISES",
    soldTo: "TRISANDYA",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230906/6JkD/64f7a4d5ddf77915199ee8c4/-288Wx360H-466537565-green-MODEL.jpg",
    title: "SONU FROCK",
    description: "Dresses for Women by Hetvi Creation",
  },
  {
    orderId: "2",
    supplier: "AP  ENTERPRICES",
    soldTo: "TRISANDYA",
    image:
      "data:image/jpeg;base64,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",
    title: "PINK SANDLES",
    description: "Pinkwood women sandle block heel",
  },
];

export default function MyOrders() {
  return (
    <main>
      <Flex vertical>
        <Typography style={{ fontSize: 40 }}>Your Orders</Typography>
        <Flex vertical align="center">
          <Search
            placeholder="Search by Customers,Products, or Order ID"
            style={{ width: "100%", maxWidth: "600px" }}
            className="ordersearch"
          />
        </Flex>
      </Flex>
      <Flex align="center" vertical>
        {Orders.map(
          ({ orderId, soldTo, supplier, image, title, description }, i) => (
            <Flex
              vertical
              style={{
                border: "1px solid gray",
                width: "100%",
                maxWidth: 650,
                marginTop: 40,
              }}
            >
              <Flex vertical>
                <Flex style={{ justifyContent: "space-between" }}>
                  <Typography>Ordered ID:{orderId}</Typography>
                  <Typography>Sold to:{soldTo}</Typography>
                </Flex>
                <Typography>Supplier:{supplier}</Typography>
              </Flex>
              <Flex className="myOrderItem">
                <Card
                  style={{
                    borderTop: "1px solid gray",
                    width: "100%",
                    maxWidth: 650,
                  }}
                  actions={[
                    <Flex style={{ justifyContent: "space-between" }}>
                      <Flex vertical>
                        <Typography>How was the product</Typography>
                        <Rate />
                      </Flex>
                      <Button>Add photos/videos</Button>
                    </Flex>,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src={image} />}
                    title={title}
                    description={description}
                  />
                </Card>
              </Flex>
            </Flex>
          )
        )}
      </Flex>
    </main>
  );
}
