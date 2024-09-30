export default async function fetchTodos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    cache: "no-store",
  });

  const todos: Todo[] = await res.json();

  return todos;
}
