import { EditOutlined, EllipsisOutlined, SettingOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Flex, Rate, Space, Typography } from "antd";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import Search from "antd/es/input/Search";
import React from "react";

 const Orders=[
  {
    orderId:"1",
    supplier:"SONU ENTERPRISES",
    soldTo:"TRISANDYA",
    image:"https://assets.ajio.com/medias/sys_master/root/20230906/6JkD/64f7a4d5ddf77915199ee8c4/-288Wx360H-466537565-green-MODEL.jpg",
    title:"SONU FROCK",
    description:"Dresses for Women by Hetvi Creation"
    },
    {
      orderId:"2",
      supplier:"AP  ENTERPRICES",
      soldTo:"TRISANDYA",
      image:"https://www.google.com/aclk?sa=l&ai=DChcSEwjlw76RtayDAxVw0hYFHa84AMIYABAHGgJ0bA&ase=2&gclid=Cj0KCQiA7aSsBhCiARIsALFvovyUcyukSzDm0V0rh5v9qTeUSE6PKKbFeejelypQ-hpapMuSObTSMJwaAs1mEALw_wcB&sig=AOD64_2WqDU_lw2hqRcMiW0kE0wMhlx7Xw&ctype=5&nis=6&adurl&ved=2ahUKEwi2wbKRtayDAxUVSmwGHa53BVIQvhd6BQgBEIgB",
      title:"PINK SANDLES",
      description:"Pinkwood women sandle block heel"
      }
 ]

export default function MyOrders() {
  return (
    <main>
      <section >
        <Typography style={{ fontSize: 40 }}>Your Orders</Typography>
        <Flex style={{justifyContent:"center"}}>
          <Search
            placeholder="Search by Customers,Products, or Order ID"
            style={{width:"100%",maxWidth:"600px",}}
             className="ordersearch"
          />
        </Flex>
        <section style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:20}}>
          <Button>All</Button>
          <Button>Ordered</Button>
          <Button>Shipped</Button>
          <Button>Delivered</Button>
          <Button>Cancelled</Button>
          <Button>Exchange</Button>
          <Button>Return</Button>
          <Button>Others</Button>
        </section>
      </section>
      <Flex  align="center" vertical gap={20} style={{marginTop:20}} >
      {Orders.map(({orderId,soldTo,supplier,image,title,description},i)=>
        <div style={{border: "1px solid gray",width:"100%",maxWidth:650,}}>
          <div>
            <Flex style={{justifyContent:"space-between"}}>
          <Typography>Ordered ID:{orderId}</Typography>
          <Typography>Sold  to{soldTo}</Typography>
          </Flex>
          <Typography >Supplier:{supplier}</Typography>
          </div>
          <div className="myOrderItem" style={{justifyContent:"center",padding:"auto 50"}}>
      <Card
        style={{borderTop:"1px solid gray"}}
        actions={[
          
          <Flex style={{justifyContent:"space-between"}}>
            <div>
            <Typography>How was the product</Typography>
            <Rate />
            </div>
         <Button>Add photos/videos</Button>
         </Flex>

        ]}
      >
       
          <Meta
            avatar={<Avatar src={image} />}
            title={title}
            description={description}
          />
        
      </Card>
      </div>
      </div>
      )}
      
      </Flex>
    </main>
  );
}
