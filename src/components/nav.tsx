import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className=" border-b border-gray-800">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <h1 className="sm:text-base md:text-xl font-bold uppercase">Next To Do</h1>
        </div>
        <nav className="flex gap-2">
          {[
            { href: "/", label: "All" },
            { href: "/add", label: "Add" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-gray-100 text-black text-sm sm:text-base px-4 py-2 rounded-full hover:bg-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
