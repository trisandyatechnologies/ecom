import { Col, Divider, Flex, Row, Space, Typography } from "antd";
import Link from "next/link";

import React from "react";
//import "./globals.css";

export default function FooterComponent() {
  return (
    <Space style={{paddingLeft: 100, paddingRight: 100}}>
      <Row
        style={{ width: "100vw", paddingRight: 300 }}
        className="footerstyle" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={8}>
          <div>
            <Typography style={{ fontFamily: "sans-serif", fontSize: 30 }}>
              Shop Non-Stop on Meesho
            </Typography>
            <Typography style={{ fontSize: 15, color: "gray" }}>
              Trusted by more than 1 Crore Indians
            </Typography>
            <Typography style={{ fontSize: 15, color: "gray" }}>
              Cash on Delivery | Free Delivery
            </Typography>
            <div style={{ display: "Flex" }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=PDP&pow_click_page_title=kids%20lehenga%20choli&pow_distinct_id=18c8ffd1329ff7-0fe42a5de8979a-17462c6f-1fa400-18c8ffd132a1f43"
                target="_blank"
              >
                <img
                  style={{ width: 150, paddingRight: 10 }}
                  src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/meesho-online-shopping/id1457958492"
                target="_blank"
              >
                <img
                  style={{ width: 150 }}
                  src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp"
                />
              </a>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div>
            <a
              href="https://www.meesho.io/jobs?utm_medium=footer&utm_source=meesho_website&utm_campaign=careerspagepromotion"
              target="_blank"
            >
              <Typography style={{ color: "gray", fontSize: 15 }}>
                Careers
              </Typography>
            </a>
            <a
              href="https://supplier.meesho.com/?utm_source=meesho&utm_medium=mweb&utm_campaign=footer"
              target="_blank"
            >
              <Typography style={{ color: "gray", fontSize: 15 }}>
                Become a supplier
              </Typography>
            </a>
            <a
              href="https://www.meesho.com/legal/hall-of-fame?embed=true"
              target="_blank"
            >
              <Typography style={{ color: "gray", fontSize: 15 }}>
                Hall of Fame
              </Typography>
            </a>
            <a href="https://www.meesho.com/sitemap" target="_blank">
              <Typography style={{ color: "gray", fontSize: 15 }}>
                Sitemap
              </Typography>
            </a>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div>
            <a href="https://www.meesho.com/legal?embed=true" target="_blank">
              <Typography style={{ color: "gray", fontSize: 15 }}>
                Legal and Policies
              </Typography>
            </a>
            <a
              href="https://www.meesho.io/blog?utm_medium=footer&utm_source=meesho_website&utm_campaign=blogpagepromotion"
              target="_blank"
            >
              <Typography style={{ color: "gray", fontSize: 15 }}>
                Meesho Tech Blog
              </Typography>
            </a>
            <a
              href="https://www.meesho.com/notices_and_returns?embed=true"
              target="_blank"
            >
              <Typography style={{ color: "gray", fontSize: 15 }}>
                Notices and Returns
              </Typography>
            </a>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div>
            <Typography style={{ fontSize: 20 }}>Reach out to us</Typography>
            <div
              style={{
                display: "Flex",
                justifyContent: "space-evenly",
                marginRight: 100,
              }}
            >
              <a href="https://www.facebook.com/meeshosupply" target="_blank">
                <img src="https://images.meesho.com/images/pow/facebook.png" />
              </a>
              <a href="https://www.instagram.com/meeshoapp/" target="_blank">
                <img src="https://images.meesho.com/images/pow/instagram.png" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCaGHIRKYUYlaI_ZAt2hxpjw"
                target="_blank"
              >
                <img src="https://images.meesho.com/images/pow/youtube.png" />
              </a>
              <a href="https://www.linkedin.com/company/meesho" target="_blank">
                <img src="https://images.meesho.com/images/pow/linkedin.png" />
              </a>
              <a href="https://twitter.com/Meesho_Official/" target="_blank">
                <img src="https://images.meesho.com/images/pow/twitter.png" />
              </a>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div>
            <Typography style={{ fontSize: 20 }}>Contact Us</Typography>
            <Typography style={{ color: "gray" }}>
              Fashnear Technologies Private Limited, CIN: U74900KA2015PTC082263
              06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer
              Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka,
              India E-mail address: query@meesho.com © 2015-2023 Meesho.com
            </Typography>
          </div>
        </Col>
      </Row>
    </Space>
  );
}
