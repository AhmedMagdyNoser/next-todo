import AddTodo from "@/components/add-todo";
import Todo from "@/components/todo";
import fetchTodos from "@/libs/fetch-todos";

export default async function Home() {
  const todos = await fetchTodos();
  const sortedTodos = todos.reverse();
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <AddTodo />
      <div />
      {sortedTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
