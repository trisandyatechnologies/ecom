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
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNzUBa0xRKeNrYLuuKoLqSTOkOqrNu53_sQ&usqp=CAU",
    title: "PINK SANDLES",
    description: "Pinkwood women sandle block heel",
  },
];

export default function MyOrders() {
  return (
    <main>
      <Flex vertical >
        <Typography.Title style={{textAlign:"center"}}>Your Orders</Typography.Title>
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
                <Flex style={{ justifyContent: "space-between",padding:10}}>
                  <Typography>Ordered ID  {orderId}</Typography>
                  <Typography>Sold to <b style={{fontSize:15}}> {soldTo}</b></Typography>
                </Flex>
                <hr/>
                <Typography style={{display:"flex",alignItems:"flex-start",padding:10}} >Supplier : <b style={{fontSize:15}}>{supplier} </b></Typography>
              </Flex>
              <Flex className="myOrderItem">
                <Card
                  style={{
                    borderTop: "1px solid gray",
                    width: "100%",
                    maxWidth: 650,
                    padding:10
                  }}
                  actions={[
                    <Flex style={{ justifyContent: "space-between" }}>
                      <Flex vertical>
                        <Typography>How was the product ?</Typography>
                        <Rate />
                      </Flex>
                      <Button>Add photos/videos</Button>
                    </Flex>,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src={image}  style={{borderRadius:0,width:"80px",height:"80px"}}/>}
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
