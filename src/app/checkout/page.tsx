"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  message,
  Steps,
  Collapse,
  Typography,
  theme,
  Flex,
  Radio,
  Row,
  Col,
  Affix,
  Divider,
  Skeleton,
  Form,
  Result,
  Grid,
  List,
  Avatar,
  Space,
} from "antd";
import {
  SmileOutlined,
  SolutionOutlined,
  DeliveredProcedureOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DELIVERY_FEE, MINIMUM_ORDER_VALUE, RUPEE } from "@/utils/config";
import { useCartStore } from "@/lib/cartStore";
import { useUserStore } from "@/lib/userStore";
import { Order, PaymentMode } from "@prisma/client";
import CartItems from "@/components/CartItems";
import Link from "next/link";
import { createOrder } from "@/lib/api";
import NewAddressForm from "@/components/NewAddressForm";
import { getThumbnail, isLessThan12PM } from "@/utils/util";
import OrderCard from "@/components/OrderCard";
import OrderSummary from "@/components/OrderSummary";

export default function Checkout() {
  const {
    token: { padding, colorFillAlter, colorBgContainer },
  } = theme.useToken();
  const [current, setCurrent] = useState(2);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form] = Form.useForm();

  const cart = useCartStore((s) => s.cart);
  const total = useCartStore((s) => s.total);
  const resetCart = useCartStore((s) => s.reset);
  const user = useUserStore((s) => s.user);
  const [order, setOrder] = useState<Order | undefined>();
  const { md } = Grid.useBreakpoint();

  if (!user && status === "unauthenticated") {
    router.push("/signin?redirect=/checkout");
    return <Typography>Redirecting to Signin...</Typography>;
  }

  const onSubmit = async (values: any) => {
    if (!user) {
      message.error("Not logged in, please sign in to place the order.");
      return;
    }
    const { address, ...rest } = values;
    const order = await createOrder({
      ...rest,
      address: user?.addresses[address],
    });
    if (order) {
      setOrder(order);
      window.scrollTo({ top: 0, behavior: "smooth" });
      resetCart();
    } else {
      message.error("Failed to place the order, try again.");
    }
  };

  const onSubmitFailed = async (values: any) => {
    message.error("Add required details!");
  };

  const panelStyle: React.CSSProperties = {
    background: colorFillAlter,
  };

  const steps = [
    {
      title: "Address",
      icon: <SolutionOutlined />,
      content: (
        <Collapse
          defaultActiveKey="address"
          style={panelStyle}
          items={[
            {
              key: "address",
              label: "Address",
              children: (
                <Flex
                  vertical
                  gap={padding}
                  id="address"
                  style={{ width: "auto" }}
                >
                  <Form.Item
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "Please input delivery address",
                      },
                    ]}
                    noStyle
                  >
                    <Radio.Group>
                      {user?.addresses.map((add, i) => (
                        <Radio value={i} key={add.name + i}>
                          <Flex
                            vertical
                            style={{
                              paddingLeft: padding,
                            }}
                          >
                            <Typography>
                              <b>{add.name}</b>
                            </Typography>
                            <Typography>{add.mobile}</Typography>
                            <Typography>{add.address}</Typography>
                            <Typography>{add.pincode}</Typography>
                            <Typography>{add.map}</Typography>
                          </Flex>
                        </Radio>
                      ))}
                    </Radio.Group>
                  </Form.Item>

                  <NewAddressForm />
                </Flex>
              ),
            },
          ]}
        />
      ),
    },
    {
      title: "Payment",
      icon: <BankOutlined />,
      content: (
        <Collapse
          defaultActiveKey="payment"
          style={panelStyle}
          items={[
            {
              key: "payment",
              label: "Payment",
              style: panelStyle,
              children: (
                <Flex vertical gap={padding}>
                  <Form.Item
                    name="payment"
                    rules={[
                      {
                        required: true,
                        message: "Please input payment mode",
                      },
                    ]}
                    noStyle
                  >
                    <Radio.Group>
                      <Radio value={PaymentMode.COD}>
                        Cash on Delivery (COD)
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Typography.Paragraph type="secondary">
                    Other payment options will be available soon.
                  </Typography.Paragraph>
                </Flex>
              ),
            },
          ]}
        />
      ),
    },
    {
      title: "Items and Delivery",
      icon: <DeliveredProcedureOutlined />,
      content: (
        <Collapse
          defaultActiveKey={"delivery"}
          style={panelStyle}
          items={[
            {
              key: "delivery",
              label: "Delivery",
              children: (
                <Flex vertical gap={padding}>
                  {isLessThan12PM() ? (
                    <Typography.Paragraph strong type="success">
                      Items ordered before 12PM will be delivered on the same
                      day.
                    </Typography.Paragraph>
                  ) : (
                    <Typography.Paragraph strong type="warning">
                      Items ordered after 12PM will be delivered on the next
                      working day.
                    </Typography.Paragraph>
                  )}
                  <CartItems />
                </Flex>
              ),
            },
          ]}
        />
      ),
    },
    {
      title: "Done",
      icon: <SmileOutlined />,
      content: (
        <Collapse
          defaultActiveKey="summary"
          style={panelStyle}
          items={[
            {
              key: "summary",
              label: "Order Summary",
              style: panelStyle,
              children: (
                <Flex vertical gap={padding}>
                  <OrderSummary total={total} />

                  <Button
                    type={current <= 3 ? "primary" : "default"}
                    htmlType="submit"
                    style={{ width: "fit-content", marginLeft: "auto" }}
                    disabled={Object.keys(cart).length === 0}
                  >
                    Place Order
                  </Button>
                </Flex>
              ),
            },
          ]}
        ></Collapse>
      ),
    },
  ];

  return (
    <Skeleton loading={status === "loading"}>
      <Form
        name="basic"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
        initialValues={{
          address: 0,
          payment: PaymentMode.COD,
          items: Object.values(cart),
          userId: user?.id,
          total,
        }}
        onFinish={onSubmit}
        onFinishFailed={onSubmitFailed}
        autoComplete="off"
        layout="vertical"
        form={form}
      >
        <Form.Item name="items" noStyle></Form.Item>
        <Form.Item name="total" noStyle></Form.Item>
        <Flex vertical gap={padding * 2}>
          {/* {md && (
            <Affix offsetTop={0}>
              <Steps
                current={current}
                items={steps}
                style={{ background: colorBgContainer, padding }}
              />
            </Affix>
          )} */}

          {!order && (
            <Flex vertical gap={padding}>
              {steps.map((step, i) => (
                <Flex key={step.title} vertical id={i.toString()}>
                  {step.content}
                </Flex>
              ))}
            </Flex>
          )}

          {order && (
            <Flex
              vertical
              style={{ maxWidth: 720, alignSelf: "center", width: "100%" }}
            >
              <Result
                status="success"
                title="Order placed successfully."
                subTitle={
                  <span>
                    {" "}
                    Your order will reach you by{" "}
                    {isLessThan12PM(order.createdAt)
                      ? "end of the day"
                      : "tomorrow"}
                  </span>
                }
                extra={[
                  <Link href="/orders" key="buy">
                    <Button type="primary" key="buy">
                      Check My Orders
                    </Button>
                  </Link>,
                ]}
                className="no-print"
              />
              <OrderCard order={order} />
            </Flex>
          )}
        </Flex>
      </Form>
    </Skeleton>
  );
}
