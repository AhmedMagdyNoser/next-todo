import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Next To Do",
  description: "A simple to-do list app built with Next.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
