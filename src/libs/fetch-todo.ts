export default async function fetchTodo(id: string): Promise<Todo | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { cache: "no-store" });
  const all = await res.json();
  return all.find((todo: Todo) => todo.id === id) || null;
}
