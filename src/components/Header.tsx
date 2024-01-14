"use client";
import React from "react";
import { appLogo, appName } from "@/utils/config";
import {
  Badge,
  Col,
  Dropdown,
  Flex,
  Grid,
  Image,
  Row,
  Space,
  Typography,
} from "antd";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import {
  ShoppingCartOutlined,
  ShoppingFilled,
  UserOutlined,
  BankOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { categoryItems } from "@/utils/util";
import { signOut, useSession } from "next-auth/react";
import { useCartStore } from "@/lib/cartStore";
import ItemSearch from "./ItemSearch";

const { useToken } = theme;

const profileMenuItems: MenuProps["items"] = [
  {
    key: "account",
    label: (
      <Link rel="noopener noreferrer" href="/account">
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
  {
    key: "signout",
    label: (
      <Space onClick={() => signOut()}>
        <PoweroffOutlined /> Sign out
      </Space>
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
  const { md } = Grid.useBreakpoint();

  const { data: session } = useSession();
  const cartCount = useCartStore((s) => s.count);
  const isLoggedIn = session?.user.id;

  const items: MenuProps["items"] = [
    {
      key: "profile",
      icon: md && <UserOutlined />,
      label: (
        <Space>
          {isLoggedIn ? (
            <Dropdown menu={{ items: profileMenuItems }}>
              {md ? (
                <Typography>{session?.user.name}</Typography>
              ) : (
                <UserOutlined />
              )}
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
      label: md && (
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
        minHeight: 144,
        paddingLeft: padding,
        paddingRight: padding,
      }}
    >
      <Flex align="center" gap={padding}>
        <Link href="/" style={{ color: "inherit" }}>
          {md ? (
            <Typography.Title level={3} style={{ fontWeight: 700, margin: 0 }}>
              {appName}
            </Typography.Title>
          ) : (
            <Image
              src={appLogo}
              alt={appName}
              width={48}
              height={48}
              preview={false}
            />
          )}
        </Link>
        <ItemSearch />
        <Menu
          mode="horizontal"
          items={items}
          style={{
            flex: md ? 1 : 0,
            justifyContent: "end",
            border: "none",
            display: "flex",
          }}
          disabledOverflow
        />
      </Flex>
      <Row gutter={padding} align="middle">
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
