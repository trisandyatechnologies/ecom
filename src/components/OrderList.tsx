"use client";

import React from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  CaretRightOutlined,
  ReadOutlined,
  UnorderedListOutlined,
  DeleteOutlined,
  EditOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

export default function OrderList({ data }: { data: OrderType[] }) {
  const columns: ColumnsType<OrderType> = [
    {
      title: "User",
      dataIndex: "userId",
      key: "address",
      render: (value, record) => <>{record.user.name}</>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Time",
      dataIndex: "createdAt",
      key: "time",
      render: (time) => new Date(time).toLocaleString(),
    },
    {
      title: "Cart",
      key: "cart",
      render: (_, record) => (
        <Button icon={<ReadOutlined />} size="small" onClick={() => null} />
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}
