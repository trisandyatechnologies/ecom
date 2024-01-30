"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Descriptions,
  DescriptionsProps,
  Flex,
  Modal,
  Row,
  Space,
  Typography,
} from "antd";
import { useUserStore } from "@/lib/userStore";
import { EditFilled } from "@ant-design/icons";

export default function EditUserDetails() {
  const user = useUserStore((s) => s.user);

  const items: DescriptionsProps["items"] = user?.addresses.map((item, i) => ({
    key: "1",

    children: (
      <>
        <Flex vertical>
          <Typography.Text strong>{item.name}</Typography.Text>
          <Typography> {item.mobile}</Typography>
          <Typography> {item.pincode}</Typography>
          <Typography> {item.address}</Typography>
        </Flex>
      </>
    ),
  }));
  return (
    <main>
      <Row>
        <Col xs={24} lg={12}>
          <Flex vertical style={{ alignItems: "center" }}>
            <img
              src="https://d1y78cl34ykkmt.cloudfront.net/ProfileImage/2020224131816458.png"
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
              }}
            />

            <Typography
              style={{ display: "flex", gap: 10, alignItems: "center" }}
            >
              {user?.name}
              <Button shape="circle">
                <EditFilled />
              </Button>
            </Typography>

            <Typography>{user?.email}</Typography>
          </Flex>
        </Col>
        <Col xs={24} lg={12}>
          <Card>
            <Descriptions title="User Address" items={items} />
          </Card>
        </Col>
      </Row>
    </main>
  );
}
