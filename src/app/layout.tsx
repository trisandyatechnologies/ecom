"use client";

import Link from "next/link";
import "./globals.css";
import { Layout, Flex, Typography, theme } from "antd";
import MyOrders from "./components/Orders";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: `calc(100vh - 128px)`,
  lineHeight: "120px",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  maxWidth: "10%",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  height: 64,
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <html lang="en">
      <body>
        <Layout style={{ ...layoutStyle, background: colorBgContainer }}>
          <Header style={{ ...headerStyle, background: colorBgContainer }}>
            <Flex justify="space-between" align="center">
              <Typography.Title level={4}>Meesho</Typography.Title>
              <Link href="/cart">Cart</Link>
            </Flex>
          </Header>
          <Layout>
            <Sider
              width="15%"
              style={{ ...siderStyle, background: colorBgContainer }}
            ></Sider>
            <Content style={contentStyle}><MyOrders/></Content>
          </Layout>
          <Footer style={footerStyle}>
            <Typography>&copy; Meesho </Typography>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
