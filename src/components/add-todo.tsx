"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, FormEvent, ChangeEvent } from "react";
import { usePathname } from "next/navigation";

export default function AddTodo() {
  const router = useRouter();
  const pathname = usePathname();

  const [title, setTitle] = useState("");

  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsFetching(true);

    const res = await fetch(`http://127.0.0.1:3500/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    await res.json();

    setIsFetching(false);

    setTitle("");

    startTransition(() => {
      if (pathname === "/add") {
        router.push("/");
      } else {
        // Refresh the current route and fetch new data
        // from the server without losing
        // client-side browser or React state.
        router.refresh();
      }
    });
  };

  const content = (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center" style={{ opacity: !isMutating ? 1 : 0.5 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className=" py-2 px-4 rounded-xl bg-gray-800 flex-grow w-full outline-none"
        placeholder="New Todo"
        autoFocus
      />
      <button type="submit" className="py-2 px-4 rounded-xl text-white  bg-blue-500 hover:bg-blue-400">
        Add
      </button>
    </form>
  );

  return content;
}
