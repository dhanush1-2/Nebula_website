import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Dhanush Chandra Shekar | AI Engineer",
  description: "Portfolio of Dhanush Chandra Shekar, an AI Engineer specializing in RAG pipelines, Agentic workflows, and Fine-tuned models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} antialiased bg-obsidian text-neutron font-sans selection:bg-pulsar/30 selection:text-pulsar cursor-none`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
