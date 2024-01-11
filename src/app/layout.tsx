import "./globals.css";
import { Metadata } from "next";
import { DEFAULT_METADATA, ORG_SCHEMA } from "@/utils/config";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ORG_SCHEMA}
        />
      </Head>
      <body>
        <script>0</script>
        <GoogleTagManager gtmId="G-JBE3H2HL25" />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
