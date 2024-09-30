import AddTodo from "@/components/add-todo";

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <AddTodo />
      <div className="mt-8">
        <h2 className="text-3xl font-bold leading-[45px]">Add a new todo</h2>
        <p className="mt-4 leading-7">
          This is a separate page that allows you to add a new todo to the list. The todo will be saved to the server and
          will be displayed on the home page.
        </p>
        <p className="mt-4 leading-7">Add a new todo by typing in the input field above and clicking the Add button.</p>
      </div>
    </div>
  );
}
