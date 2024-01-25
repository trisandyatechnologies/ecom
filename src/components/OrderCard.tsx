"use client";
import React from "react";
import {
  Button,
  Typography,
  Flex,
  Divider,
  Result,
  List,
  Avatar,
  Space,
  Row,
  Col,
} from "antd";
import { RUPEE, appName } from "@/utils/config";
import Link from "next/link";
import { getThumbnail, isLessThan12PM } from "@/utils/util";
import { Order } from "@prisma/client";
import OrderSummary from "./OrderSummary";
import { PrinterOutlined } from "@ant-design/icons";

export default function OrderCard({ order }: { order: Order }) {
  return (
    <Flex vertical className="print">
      <Flex justify="flex-end" className="no-print">
        <Button icon={<PrinterOutlined />} onClick={() => window.print()} />
      </Flex>
      <Divider className="order-title no-print">
        Order from <b>{appName}</b>
      </Divider>
      <Divider className="order-title print" style={{ fontSize: 28 }}>
        Order from <b>{appName}</b>
      </Divider>
      <Row>
        <Col xs={24} md={12}>
          <Typography.Text>
            Order ID: <b>{order.id}</b>
          </Typography.Text>
        </Col>
        <Col xs={24} md={12}>
          <Typography.Text>
            Time:{" "}
            <b>
              {new Date(order.createdAt).toDateString()}{" "}
              {new Date(order.createdAt).toLocaleTimeString()}
            </b>
          </Typography.Text>
        </Col>
      </Row>

      <Divider>Address</Divider>
      <Typography.Text strong>{order.address.name}</Typography.Text>
      <Typography>{order.address.mobile}</Typography>
      <Typography>{order.address.address}</Typography>
      <Typography>{order.address.pincode}</Typography>
      <Divider>Payment Method</Divider>
      <Typography.Text strong>{order.payment}</Typography.Text>
      <Divider>Items</Divider>
      <List
        size="small"
        itemLayout="horizontal"
        dataSource={order.items}
        renderItem={(item, index) => (
          <List.Item extra={`${RUPEE}${item.price * item.quantity}`}>
            <List.Item.Meta
              avatar={<Avatar src={getThumbnail(item.image)} />}
              title={<Link href={`/products/${item.id}`}>{item.name}</Link>}
              description={
                <Space direction="vertical">
                  <Typography>{item.quantity} (Nos)</Typography>
                </Space>
              }
            />
          </List.Item>
        )}
      />
      <Divider>Amount</Divider>
      <OrderSummary total={order.total} />
    </Flex>
  );
}
