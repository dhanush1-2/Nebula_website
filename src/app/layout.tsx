import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dhanush Chandra Shekar | AI Engineer",
  description: "Portfolio of Dhanush Chandra Shekar, an AI Engineer specializing in RAG pipelines, Agentic workflows, and Fine-tuned models.",
};

import { XAIProvider } from "@/context/XAIContext";
import AgenticTracker from "@/components/AgenticTracker";
import CommandPalette from "@/components/CommandPalette";
import SemanticCursor from "@/components/SemanticCursor";
import ScrollRestorationFix from "@/components/ScrollRestorationFix";
import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plexMono.variable} antialiased font-sans relative`}>
        <SmoothScrolling>
          <XAIProvider>
            {children}
            <ScrollRestorationFix />
            <SemanticCursor />
            <AgenticTracker />
            <CommandPalette />
          </XAIProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
