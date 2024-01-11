
import ItemsList from "@/components/ItemsList";
import service from "@/lib/service";

export default async function Items() {
  const items = await service.getItems();

  return (
    <main>
      <ItemsList data={items} />
    </main>
  );
}
