"use client";

import Link from "next/link";
// import "./globals.css";
import { Layout, Flex, Typography, theme } from "antd";
import Header from "../components/Header";
import Sider from "../components/Sider";
import Footer from "../components/Footer";
import { SessionProvider } from "next-auth/react";

const { Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: `calc(100vh - 128px)`,
  // lineHeight: "120px",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  maxWidth: "10%",
};

const footerStyle: React.CSSProperties = {};

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
        <SessionProvider>
          <Layout style={{ ...layoutStyle, background: colorBgContainer }}>
            <Header />

            <Layout>
              <Flex className="siderView">
                <Sider />
                <Content style={contentStyle}>{children}</Content>
              </Flex>
            </Layout>
            <Footer />
          </Layout>
        </SessionProvider>
      </body>
    </html>
  );
}
