"use client";
import { useCartStore } from "@/lib/cartStore";
import { useUserStore } from "@/lib/userStore";
import { Card, Col, Row, Typography } from "antd";
import { useSession } from "next-auth/react";
import React from "react";
export default function UserDetails() {
  
  const user = useUserStore((s) => s.user);
  const userAddress = useUserStore((s) => s.updateUser);

  return (
    <Row>
      <Col xs={24} lg={12}></Col>
      <Col xs={24} lg={12}>
        <Card style={{ width: 300 }}>
          <Typography></Typography>
        </Card>
      </Col>
    </Row>
  );
}
