"use client";
import React from "react";
import { Divider,Flex,Typography } from "antd";
import { Row } from "antd";
import { Avatar, Card, } from "antd";
import { StarFilled} from "@ant-design/icons";
const ItemCard = [
  {
    image: "https://images.meesho.com/images/products/71806235/grsvs_400.webp",
    name: "Fancy latest women shirts ",
    price: "₹261",
    reviews: 12333,
    rating:3.8
  },
  {
    image: "https://images.meesho.com/images/products/368280876/usxzj_400.webp",
    name: "Kashvi pretty kurtis",
    price: "₹185",
    reviews: 12893,
    rating:4.2
  },
  {
    image: "https://images.meesho.com/images/products/42182017/gtwro_400.webp",
    name: "Fancy latest women shirts ",
    price: "₹261",
    reviews: 22363,
    raing:4.1
  },
  {
    image: "https://images.meesho.com/images/products/368280876/usxzj_400.webp",
    name: "Kashvi pretty kurtis",
    price: "₹261",
    reviews: 42363,
    rating:3.6
  }, 
  {
    image: "https://images.meesho.com/images/products/42182017/gtwro_400.webp",
    name: "Fancy latest women shirts ",
    price: "₹261",
    reviews: 78363,
    rating:4.1
  },
  {
    image: "https://images.meesho.com/images/products/368280876/usxzj_400.webp",
    name: "Kashvi pretty kurtis",
    price: "₹185",
    reviews: 12306,
    rating:4.2
  }, 
  {
    image: "https://images.meesho.com/images/products/42182017/gtwro_400.webp",
    name: "Fancy latest women shirts ",
    price: "₹261",
    reviews: 10103,
    rating:3.9
  },
  {
    image: "https://images.meesho.com/images/products/368280876/usxzj_400.webp",
    name: "Kashvi pretty kurtis",
    price: "₹185",
    reviews: 90873,
    rating:4.2
  }, 
  {
    image: "https://images.meesho.com/images/products/42182017/gtwro_400.webp",
    name: "Fancy latest women shirts ",
    price: "₹261",
    reviews: "10987",
    rating:4.5
  },
  {
    image: "https://images.meesho.com/images/products/368280876/usxzj_400.webp",
    name: "Kashvi pretty kurtis",
    price: "₹185",
    reviews: 1001,
    rating:3.5
  }
];
const { Meta } = Card;
export default function Itemcard() {
  return (
    <main style={{ background: "white"}}>
      <Divider />
      <Flex>
        <Row className="Card"> 
          {ItemCard.map(({ image, name, price, reviews,rating }) => (
            <Card
              style={{
                background: "white",
                border: "1px solid black",
                margin: "5px 15px",
                justifyContent:"center",
                flex:1  
              }}
            >
              <Flex vertical >
                <Meta
                  style={{
                    background: "white",
                    display: "flex",
                    padding: "auto"
                  }}
                  avatar={
                    <Avatar
                      src={image}
                      style={{ display: "flex", width: "160px", height: "148px", borderRadius: 0, paddingLeft: "30px", margin: "0px" }}
                    />
                  }
                />
              </Flex>
                <Typography style={{textAlign:"left",paddingTop:"5px",fontSize:"15px"}}>{name}</Typography>
               <Flex style={{gap:"5px"}}>
               <Typography style={{fontSize:"24px"}}>{price}</Typography>
               <Typography style={{paddingTop:"10px"}}>onwards</Typography>
               </Flex>
              <Typography style={{ color: "rgb(97, 97, 115)", background: "rgb(248, 248, 255)",padding: 0, margin: 0,textAlign:"left",width:"90px",borderRadius:"14px"}}>
                Free Delivery
              </Typography>
              <Flex style={{gap:"7px",paddingTop:"6px"}}> 
              <Typography style={{ background: "rgb(3, 141, 99)", color: "white", borderRadius:"8px",width:"45px"}}>{rating}<StarFilled /> </Typography>
              <Typography>  {reviews} reviews</Typography>
              </Flex>
            </Card>
          ))} 
        </Row>
      </Flex>
    </main>
  );
};