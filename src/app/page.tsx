import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <header>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </header>
    </div>
  );
}
