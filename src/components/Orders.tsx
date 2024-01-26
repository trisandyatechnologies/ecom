"use client";
import { RUPEE } from "@/utils/config";
import { Order } from "@prisma/client";
import { Button, Drawer, Flex, Typography, theme } from "antd";
import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import { getThumbnail } from "@/utils/util";
import OrderCard from "./OrderCard";
import { getOrdersList } from "@/lib/api";

export default function MyOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [order,setOrder]=useState<Order>();



  useEffect(() => {
    getOrdersList().then((orders) => {
      console.log({ orders });
      setOrders(orders);
    });
  }, []);

  const showDrawer = (order: Order) => {
    setOrder(order);
  };

  const onClose = () => {
    setOrder(undefined);
  };

  return (
    <main>
      <Flex vertical>
        <Typography.Title style={{ textAlign: "center" }}>
          Your Orders
        </Typography.Title>
        <Flex vertical align="center">
          <Search
            placeholder="Search by Customers,Products, or Order ID"
            style={{ width: "100%", maxWidth: "600px" }}
            className="ordersearch"
          />
        </Flex>
      </Flex>
      {orders.map((order, i) => (
        <Flex align="center" vertical>
          <Flex
            vertical
            style={{
              border: "1px solid gray",
              borderRadius: 4,
              width: "100%",
              maxWidth: 650,
              marginTop: 40,
            }}
          >
            <Flex vertical>
              <Flex
                style={{
                  justifyContent: "space-between",
                  padding: 10,
                  flexWrap: "wrap",
                }}
              >
                <Typography>
                  Ordered Placed: {new Date(order.createdAt).toDateString()}
                </Typography>
                <Typography>
                  Total:{RUPEE}
                  {order.total.amount}
                </Typography>
                <Typography>Shipped To:{order.address.name}</Typography>
                <Typography>
                  Order Id:<b style={{ fontSize: 15 }}> {order.id}</b>
                </Typography>
              </Flex>
            </Flex>
            <hr />
            <Flex style={{ justifyContent: "space-between", padding: 10 }}>
              <Flex style={{ gap: 5 }}>
                {order.items.map((item, i) => (
                  <img src={getThumbnail(item.image)} style={{ width: 50 }} />
                ))}
              </Flex>
              <Button type="primary" onClick={() => setOrder(order)}>
                Veiw Orders
              </Button>
             
            </Flex>
          </Flex>
          
        </Flex>
        
      ))}
      <Flex>
        <Drawer title="Your Orders" onClose={onClose} open={!!order}>
                {
                  order && <OrderCard order={order}/>
                }
                  
              
              </Drawer>
              </Flex>
    </main>
  );
}
