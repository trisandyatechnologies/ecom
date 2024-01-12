"use client";
import ItemGrid from "@/components/ItemGrid";
import { categoryItems } from "@/utils/util";
import { Item } from "@prisma/client";
import { Card, theme } from "antd";
import Link from "next/link";

export default function Landing({ data }: { data: Item[] }) {
  const {
    token: { padding },
  } = theme.useToken();
  return (
    <>
      {categoryItems.map((cat) => (
        <Card
          key={cat.key}
          title={cat.label}
          bordered={false}
          extra={<Link href={`/category/${cat.key}`}>View More</Link>}
          style={{ marginBottom: padding }}
        >
          <ItemGrid
            data={data.filter((item) => item.category === cat.key).slice(0, 7)}
          />
        </Card>
      ))}
    </>
  );
}
