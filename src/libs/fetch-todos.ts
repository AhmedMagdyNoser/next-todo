export default async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { cache: "no-store" });
  return res.json();
}
