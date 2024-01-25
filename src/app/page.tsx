import Landing from "@/components/Landing";
import service from "@/lib/service";

<<<<<<< HEAD
import { addCartItem, getItems } from "@/lib/api";
import { Item } from "@prisma/client";
import { Card, List, Space, Typography, Image, Button, theme } from "antd";
import { useEffect, useState } from "react";
const userId = "6582d402c4e753141edcd9be";

export default function Home() {
  const {
    token: { padding },
  } = theme.useToken();
  const [items, setItems] = useState<Item[]>([]);

  const addToCart = (itemId: string) => {
    addCartItem(itemId).then((item) => {
      console.log({ item });
    });
  };

  useEffect(() => {
    getItems().then((items) => {
      setItems(items);
    });
  }, []);
=======
export const dynamic = "force-dynamic"; // 👈🏽

export default async function Home() {
  const items = await service.getItems();
>>>>>>> main

  return (
    <main>
      <Landing data={items} />
    </main>
  );
}
