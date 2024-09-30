import AddTodo from "@/components/add-todo";
import Todo from "@/components/todo";
import fetchTodos from "@/libs/fetch-todos";

export default async function Home() {
  const todos = await fetchTodos();
  const sortedTodos = todos.reverse();
  return (
    <div className="container mx-auto p-4">
      <AddTodo />

      <br />

      {sortedTodos.length === 0 ? (
        <div className="text-center text-gray-400">Opps! It looks like you have no todos.</div>
      ) : (
        <div className="flex flex-col gap-4">
          {sortedTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}
