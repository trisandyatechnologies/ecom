"use client";
import { InfoCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Flex,
  Grid,
  Row,
  Space,
  Tabs,
  TabsProps,
  Typography,
  theme,
} from "antd";
import { MOCK_DATA } from "@/utils/mock";
import Link from "next/link";
import { Item } from "@prisma/client";
import Image from "next/image";
import { cartItemFromItem, getImage, getThumbnail } from "@/utils/util";
import AddToCart from "./AddToCart";
import { useCartStore } from "@/lib/cartStore";
import { RUPEE } from "@/utils/config";

export default function Product({ item }: { item: Item }) {
  const imageItems: TabsProps["items"] = item.images.map((image) => ({
    key: image,
    label: (
      <Image
        src={getThumbnail(image)}
        width={40}
        height={40}
        style={{ maxWidth: "100%", height: "auto" }}
        alt={item.name}
      />
    ),
    children: (
      <Image
        src={getImage(image)}
        width={300}
        height={300}
        style={{ maxWidth: "100%", objectFit: "contain" }}
        alt={item.name}
      />
    ),
  }));

  const {
    token: { padding },
  } = theme.useToken();

  const cart = useCartStore((c) => c.cart);

  return (
    <Row style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Col lg={12} xs={24}>
        <Tabs
          defaultActiveKey={item.images[0]}
          items={imageItems}
          tabPosition="left"
          style={{ textAlign: "center", minHeight: 320 }}
        />
        <Flex
          justify="center"
          style={{
            padding: padding * 2,
          }}
          gap={padding * 2}
        >
          <AddToCart
            id={item.id}
            item={item}
            buttonProps={{ danger: true, size: "large" }}
          />
          {cart[item.id] && (
            <Link href="/cart">
              <Button
                type="primary"
                block
                icon={<ShoppingCartOutlined />}
                size="large"
              >
                Go to Cart
              </Button>
            </Link>
          )}
        </Flex>
        {cart[item.id] && (
          <Typography.Paragraph
            type="secondary"
            style={{ textAlign: "center" }}
          >
            Free Delivery on orders above {RUPEE}500
          </Typography.Paragraph>
        )}
      </Col>

      <Col lg={12} xs={24}>
        <Flex vertical>
          <Typography.Text>
            Brand: <b>{item.brand ?? "Generic"}</b>
          </Typography.Text>
          <Typography.Title level={3} style={{ marginTop: 0 }}>
            {item.name}
          </Typography.Title>
          <Space>
            <Typography.Text style={{ fontSize: 24 }} delete type="secondary">
              ₹{item.mrp}
            </Typography.Text>
            <Typography.Text style={{ fontSize: 24 }} strong>
              ₹{item.price}
            </Typography.Text>
          </Space>

          <Typography.Text>
            Quantity:{" "}
            <b>
              {item.details.weight ?? item.details.capacity}{" "}
              {item.details.units}
            </b>
          </Typography.Text>
        </Flex>

        <Divider />

        <Flex vertical gap={padding}>
          <Typography.Paragraph>{item.description}</Typography.Paragraph>

          <Typography.Text>
            Country of Origin : {item.details.origin}{" "}
          </Typography.Text>
        </Flex>
      </Col>
    </Row>
  );
}
