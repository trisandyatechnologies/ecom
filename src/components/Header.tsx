"use client";

import "../app/globals.css";
import React from "react";
import { appName } from "@/utils/config";
import { SearchProps } from "antd/es/input/Search";
import {
  Button,
  Col,
  Divider,
  Dropdown,
  Flex,
  Input,
  List,
  Popover,
  Row,
  Space,
  Typography,
} from "antd";
import type { MenuProps } from "antd";
const { Search } = Input;
import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
  DownOutlined,
  MobileOutlined,
  ShoppingCartOutlined,
  ShoppingFilled,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { categoryItems } from "@/utils/util";

const { useToken } = theme;

// export default function Header() {
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);
// const items1: MenuProps['items'] = ['Download App', 'Become a Supplier', 'Newsroom', 'Profile', 'Cart'].map((key) => ({
//     key,
//     label: <Space><UserOutlined /> {key}</Space>,
// }));

const Downloadapp: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Download From
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <img
          src="https://images.meesho.com/images/pow/playstore-icon-big.png"
          style={{ width: "178px", height: "50px" }}
        />
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <img
          src="https://images.meesho.com/images/pow/appstore-icon-big.png"
          style={{ width: "178px", height: "50px" }}
        />
      </Link>
    ),
  },
];

const Profile: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <h4>Hello User</h4>
        <Typography>To accesses your {appName} account</Typography>
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <Button
          style={{
            width: "100%",
            background: "purple",
            color: "white",
            height: "48px",
            borderRadius: "5px",
            fontSize: "20px",
          }}
        >
          Sign Up
        </Button>
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <Typography
          style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        >
          <ShoppingFilled />
          My Orders
        </Typography>{" "}
      </Link>
    ),
  },
];

const items: MenuProps["items"] = [
  {
    key: "profile",
    label: (
      <Flex style={{ display: "flex", gap: "20px" }}>
        <Dropdown menu={{ items: Profile }}>
          <Typography
            style={{
              display: "flex",
              gap: "5px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <UserOutlined />
            Profile
          </Typography>
        </Dropdown>{" "}
      </Flex>
    ),
  },
  {
    key: "shoppingcart",
    label: (
      <Flex
        style={{
          display: "flex",
          gap: "5px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            display: "flex",
            gap: "5px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ShoppingCartOutlined />
          Cart
        </Typography>
      </Flex>
    ),
  },
];

const categoryMenuItems: MenuProps["items"] = categoryItems.map(
  ({ label, key }) => ({
    key,
    label: (
      <Link rel="noopener noreferrer" href={`/category/${key}`}>
        {label}
      </Link>
    ),
  })
);

const Header: React.FC = () => {
  const {
    token: { padding },
  } = useToken();

  return (
    <Layout.Header
      style={{
        display: "flex",
        width: "100%",
        background: "white",
        flexDirection: "column",
        minHeight: 128,
        padding,
      }}
    >
      <Flex align="center">
        <Typography.Title level={3} style={{ fontWeight: 700, margin: 0 }}>
          {appName}
        </Typography.Title>

        <Search
          id="search-bar"
          style={{ width: "50%", marginLeft: padding }}
          placeholder="Search items here"
          allowClear
          size="large"
          onSearch={onSearch}
        />
        <Menu
          mode="horizontal"
          items={items}
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "end",
            border: "none",
          }}
        />
      </Flex>
      <Row>
        <Col xs={24}>
          <Menu
            mode="horizontal"
            items={categoryMenuItems}
            style={{
              width: "100%",
              maxWidth: "100%",
            }}
          />
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
