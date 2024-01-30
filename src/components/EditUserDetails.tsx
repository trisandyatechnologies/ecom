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
import { EditFilled, EditOutlined } from "@ant-design/icons";
import { theme } from "antd";

export default function EditUserDetails() {
  const {
    token: { padding, margin },
  } = theme.useToken();
  const user = useUserStore((s) => s.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          <Flex vertical style={{ margin: margin ,alignItems:"center"}}>
            <img
              src="https://d1y78cl34ykkmt.cloudfront.net/ProfileImage/2020224131816458.png"
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                margin: margin,
              }}
            />

            <Flex>
              <Typography>
                {user?.name}
                <Button shape="circle" onClick={showModal}>
                  <EditFilled />
                </Button>
              </Typography>
            </Flex>
            <Typography>{user?.email}</Typography>
            <Modal
              title="Edit Profile"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Flex vertical style={{ padding: padding }}>
                <img
                  src="https://d1y78cl34ykkmt.cloudfront.net/ProfileImage/2020224131816458.png"
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 50,
                  }}
                />
                <Typography>Change profile photo</Typography>
              </Flex>
            </Modal>
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
