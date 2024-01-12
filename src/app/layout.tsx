"use client";
import "./globals.css";
import { Layout, Flex, Typography, theme } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SessionProvider } from "next-auth/react";
const { Content } = Layout;

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, padding },
  } = theme.useToken();
  return (
    <html lang="en">
      <body>
        <script>0</script>
        <SessionProvider>
          <Layout style={{ ...layoutStyle, background: colorBgContainer }}>
            <Header />
            <Content
              style={{
                minHeight: `calc(100vh - 128px)`,
                padding: padding,
              }}
            >
              {children}
            </Content>
            <Footer />
          </Layout>
        </SessionProvider>
      </body>
    </html>
  );
}
