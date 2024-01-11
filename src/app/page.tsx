import ItemGrid from "@/components/ItemGrid";
import service from "@/lib/service";

export const dynamic = "force-dynamic"; // 👈🏽

export default async function Home() {
  const items = await service.getItems();

  return (
    <main>
      <ItemGrid data={items} />
    </main>
  );
}
