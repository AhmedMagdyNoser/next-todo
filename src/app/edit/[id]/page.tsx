import Todo from "@/components/todo";
import fetchTodo from "@/libs/fetch-todo";
import { notFound } from "next/navigation";

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const todo = await fetchTodo(id);

  if (!todo) notFound();

  return (
    <div className="container mx-auto p-4">
      <Todo todo={todo} />
      <div className="mt-8">
        <h2 className="text-3xl font-bold leading-[45px]">Todo Page</h2>
        <p className="mt-4 leading-7">
          This is a separate page that displays a single todo. You can mark the todo as completed by clicking the checkbox.
        </p>
      </div>
    </div>
  );
}
