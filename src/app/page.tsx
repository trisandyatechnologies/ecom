import ItemList from "@/components/ItemList";
import service from "@/lib/service";

export default async function Home() {
  const items = await service.getItems();

  return (
    <main>
      <ItemList data={items} />
    </main>
  );
}
