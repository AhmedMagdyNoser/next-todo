"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, FormEvent } from "react";

export default function AddTodo() {
  const router = useRouter();
  const pathname = usePathname();

  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    await res.json();

    if (pathname === "/add") router.push("/");

    // Refresh the current route and fetch new data from the server without losing client-side browser or React state.
    router.refresh();

    setLoading(false);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center" style={{ opacity: loading ? 0.5 : 1 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="py-2 px-4 rounded-xl bg-gray-800 flex-grow w-full outline-none"
        placeholder="Add a new todo..."
        autoFocus
      />
      <button type="submit" className="py-2 px-4 rounded-xl text-white  bg-blue-500 hover:bg-blue-400">
        Add
      </button>
    </form>
  );
}
