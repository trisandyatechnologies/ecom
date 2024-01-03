"use client";

import Link from "next/link";
import "./globals.css";
import { Layout, Flex, Typography, theme } from "antd";
import ProductPage from "./components/ProductPage/Page";

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
          <ProductPage />
          <Content style={contentStyle}>{children}
          </Content>
        </Layout>
      </body>
    </html>
  );
}
