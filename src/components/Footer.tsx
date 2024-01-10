import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Col, Flex, Layout, Row, Typography } from "antd";
import Link from "next/link";

import React from "react";

function FooterLink({ name, href }: { name: string; href: string }) {
  return (
    <Link href={href}>
      <Typography style={{ color: "gray", fontSize: 15 }}>{name}</Typography>
    </Link>
  );
}

export default function Footer() {
  return (
    <Layout.Footer>
      <Row className="footerstyle" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} md={12} xl={8}>
          <Flex vertical>
            <Typography style={{ fontFamily: "sans-serif", fontSize: 20 }}>
              Shop Non-Stop on Trisandya mart
            </Typography>
            <Typography style={{ fontSize: 15, color: "gray" }}>
              Trusted by more than 1 more Indians
            </Typography>
            <Typography style={{ fontSize: 15, color: "gray" }}>
              Cash on Delivery | Free Delivery
            </Typography>
            {/* <Flex style={{ height: "fit-content" }}>
              <Link href="" target="_blank">
                <img
                  style={{ width: 200, paddingRight: 10, marginTop: 6 }}
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </Link>
              <Link href="" target="_blank">
                <img
                  style={{ width: 160 }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt4QcOwLdFYst6geIybh_PnL38ci6zL8fb1w&usqp=CAU"
                />
              </Link>
            </Flex> */}
          </Flex>
        </Col>
        <Col className="footer_col" xs={12} md={6} xl={4}>
          <Flex vertical>
            <FooterLink name="About Us" href="https://www.trisandya.com" />
            <FooterLink name="Become a supplier" href="#" />
            <FooterLink name="Hall of Fame" href="#" />
            <FooterLink name="Sitemap" href="#" />
          </Flex>
        </Col>
        <Col className="footer_col" xs={12} md={6} xl={4}>
          <Flex vertical>
            <FooterLink name="Legal and Policies" href="/privacy" />
            <FooterLink name="Trisandya Tech Blog" href="#" />
            <FooterLink name="Notices and Returns" href="#" />
          </Flex>
        </Col>
        <Col className="footer_col" xs={24} md={12} xl={4}>
          <Flex vertical>
            <Typography style={{ fontSize: 20 }}>Reach out to us</Typography>
            <Flex
              style={{
                display: "Flex",
                justifyContent: "space-between",
              }}
            >
              <Link href="https://www.facebook.com/trisandyatech">
                <FacebookFilled style={{ color: "blue", fontSize: 30 }} />
              </Link>
              <Link
                href="https://www.instagram.com/trisandyatech"
                target="_blank"
              >
                <InstagramFilled style={{ color: "purple", fontSize: 30 }} />
              </Link>
              <Link
                href="https://www.youtube.com/trisandyatech"
                target="_blank"
              >
                <YoutubeFilled style={{ color: "red", fontSize: 30 }} />
              </Link>
              <Link
                href="https://in.linkedin.com/trisandyatech"
                target="_blank"
              >
                <LinkedinFilled style={{ color: "blue", fontSize: 30 }} />
              </Link>
              <Link
                href="https://www.twitter.com/trisandyatech"
                target="_blank"
              >
                <TwitterOutlined style={{ color: "skyblue", fontSize: 30 }} />
              </Link>
            </Flex>
          </Flex>
        </Col>
        <Col className="footer_col" xs={24} md={12} xl={4}>
          <Flex vertical>
            <Typography style={{ color: "gray" }}>
              <Typography>
                <b>Trisandya Technology Solutions Pvt. Ltd</b>
              </Typography>
              <Typography>
                DNO: 3-13A, Jammichettu Center, Pedakallepalli, AP, India -
                521130
              </Typography>
              <Typography>
                <a href="mailto:office@trisandya.com">
                  [office]@[trisandya].[com]
                </a>
              </Typography>
              <Typography>© 2024 Trisandya.com</Typography>
            </Typography>
          </Flex>
        </Col>
      </Row>
    </Layout.Footer>
  );
}
