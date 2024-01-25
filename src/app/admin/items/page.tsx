"use client";
import ItemList from "@/components/ItemList";
import { getItems } from "@/lib/api";
import { useEffect, useState } from "react";

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(setItems);
  }, []);

  return (
    <main>
      <ItemList data={items} />
    </main>
  );
}
