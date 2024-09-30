// "use client";

import Link from "next/link";

export default function Todo(todo: Todo) {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-2 rounded-3xl">
      <div className="flex items-center gap-2 px-2">
        <input type="checkbox" checked={todo.completed} className="min-w-[1rem] min-h-[1rem] cursor-pointer" />
        <Link className="hover:underline" href={`/edit/${todo.id}`}>
          {todo.title}
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-3 py-1 text-sm rounded-3xl text-black bg-red-400 hover:bg-red-300">Delete</button>
      </div>
    </div>
  );
}
