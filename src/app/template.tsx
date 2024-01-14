"use client";
import { App, ConfigProvider, Grid, Skeleton, theme } from "antd";
import Notify from "@/lib/notify";
import { Layout, Flex, Typography } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
const { Content } = Layout;

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
};

export default function Template({ children }: { children: React.ReactNode }) {
  const {
    token: { borderRadiusSM, colorBgContainer, padding },
  } = theme.useToken();

  const { md } = Grid.useBreakpoint();

  /**
   * Workaround for React Minified Error #418
   * https://github.com/vercel/next.js/discussions/43921#discussioncomment-5614536
   */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Skeleton />;
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: borderRadiusSM,
          padding: md ? padding : padding / 2,
        },
      }}
    >
      <App>
        <Notify />
        <SessionProvider>
          <Layout style={{ ...layoutStyle, background: colorBgContainer }}>
            <Header />
            <Content
              style={{
                minHeight: `calc(100vh - ${padding * 8}px)`,
                padding,
              }}
            >
              {children}
            </Content>
            <Footer />
          </Layout>
        </SessionProvider>
      </App>
    </ConfigProvider>
  );
}
