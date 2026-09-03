import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Neuvara",
  description:
    "Neuvara is a UK research-stage company working on physics-informed normalisation for multi-site brain MRI, reducing scanner-driven variance while preserving biological signal."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-navy-950 font-sans text-white antialiased">{children}</body>
    </html>
  );
}
