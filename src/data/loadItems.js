export async function loadItems() {
  const res = await fetch("/data/items.json");
  return await res.json();
}
