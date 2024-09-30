import Todo from "@/components/todo";
import fetchTodo from "@/libs/fetch-todo";
import { notFound } from "next/navigation";

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const todo = await fetchTodo(id);

  if (!todo) notFound();

  return (
    <div className="container mx-auto p-4">
      <Todo todo={todo} />
    </div>
  );
}
