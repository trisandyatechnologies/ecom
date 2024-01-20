import { DELIVERY_FEE, MINIMUM_ORDER_VALUE, RUPEE } from "@/utils/config";
import { CartTotal, Order } from "@prisma/client";
import { Col, Divider, Flex, Row, Typography, theme } from "antd";

export default function OrderSummary({ total }: { total: CartTotal }) {
  const {
    token: { padding },
  } = theme.useToken();
  return (
    <Flex vertical gap={padding}>
      <Row gutter={padding}>
        <Col span={12}>
          <Typography.Text>Total Price :</Typography.Text>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Typography.Text>
            {RUPEE}
            {total.mrp}
          </Typography.Text>
        </Col>
      </Row>

      <Row gutter={padding}>
        <Col span={12}>
          <Typography.Text>Discount :</Typography.Text>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Typography.Text type="success">
            -{RUPEE}
            {total.discount}
          </Typography.Text>
        </Col>
      </Row>

      <Row gutter={padding}>
        <Col span={12}>
          <Typography.Text>Delivery Fee :</Typography.Text>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Typography.Text delete={total.price > MINIMUM_ORDER_VALUE}>
            {RUPEE}
            {DELIVERY_FEE}
          </Typography.Text>
        </Col>
      </Row>

      <Divider />

      <Row gutter={padding}>
        <Col span={12}>
          <Typography.Text>Order Total :</Typography.Text>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Typography.Text strong>
            {RUPEE}
            {total.amount}
          </Typography.Text>
        </Col>
      </Row>
    </Flex>
  );
}
