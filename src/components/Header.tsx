"use client";

import "../app/globals.css";
import React from "react";
import { appName } from "@/utils/config";
import { SearchProps } from "antd/es/input/Search";
import {
  Badge,
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
  BankOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { categoryItems } from "@/utils/util";
import { useSession } from "next-auth/react";
import { useCartStore } from "@/lib/cartStore";

const { useToken } = theme;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const profileMenuItems: MenuProps["items"] = [
  {
    key: "account",
    label: (
      <Link rel="noopener noreferrer" href="/orders">
        <BankOutlined /> Account
      </Link>
    ),
  },
  {
    key: "orders",
    label: (
      <Link rel="noopener noreferrer" href="/orders">
        <ShoppingFilled /> My Orders
      </Link>
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

  const { data: session } = useSession();
  const cartCount = useCartStore((s) => s.count);

  const items: MenuProps["items"] = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: (
        <Space>
          {session?.user.id ? (
            <Dropdown menu={{ items: profileMenuItems }}>
              <Typography>{session?.user.name}</Typography>
            </Dropdown>
          ) : (
            <Link href="/signin">Signin</Link>
          )}
        </Space>
      ),
    },
    {
      key: "shoppingcart",
      icon: (
        <Badge count={cartCount} dot size="small" status="warning">
          <ShoppingCartOutlined />
        </Badge>
      ),
      label: (
        <Badge count={cartCount} size="small" status="warning">
          <Link href="/cart">Cart</Link>
        </Badge>
      ),
    },
  ];

  return (
    <Layout.Header
      style={{
        display: "flex",
        width: "100%",
        background: "white",
        flexDirection: "column",
        minHeight: 128,
        paddingLeft: padding,
        paddingRight: padding,
      }}
    >
      <Flex align="center">
        <Typography.Title level={3} style={{ fontWeight: 700, margin: 0 }}>
          <Link href="/" style={{ color: "inherit" }}>
            {appName}
          </Link>
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
