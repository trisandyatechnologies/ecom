"use client";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, redirect } from "next/navigation";
import { App, ConfigProvider, Grid, Skeleton, theme } from "antd";
import Notify from "@/lib/notify";
import { useEffect } from "react";

const AUTH_PATHS = ["/signin", "/signup"];

export default function Template({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const {
    token: { borderRadiusSM, colorBgContainer, padding },
  } = theme.useToken();

  useEffect(() => {
    if (status === "authenticated") {
      if (AUTH_PATHS.includes(pathname)) {
        router.replace("/");
      }
    }
  }, [status, pathname, router]);

  const { md } = Grid.useBreakpoint();

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
        <Skeleton loading={status === "loading"}>{children}</Skeleton>
      </App>
    </ConfigProvider>
  );
}
