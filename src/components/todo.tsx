"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Todo({ todo }: { todo: Todo }) {
  const router = useRouter();
  const pathname = usePathname();

  async function handleDelete() {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${todo.id}`, { method: "DELETE" });
    if (pathname.match(/edit/)) router.push("/");
    router.refresh();
  }

  return (
    <div className="flex justify-between items-center bg-gray-800 p-2 rounded-3xl">
      <div className="flex items-center gap-2 px-2">
        <input type="checkbox" checked={todo.completed} className="min-w-[1rem] min-h-[1rem] cursor-pointer" />
        <Link className="hover:underline" href={`/edit/${todo.id}`}>
          {todo.title}
        </Link>
      </div>
      <button onClick={handleDelete} className="px-3 py-1 text-sm rounded-3xl bg-red-600 hover:bg-red-500">
        Delete
      </button>
    </div>
  );
}
