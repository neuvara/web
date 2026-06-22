import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Neuvara",
  description:
    "Neuvara is a research-stage neurotechnology platform applying physics-informed AI to robust brain MRI analysis across scanners, hospitals, and clinical research workflows."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
