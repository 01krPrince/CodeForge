import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import { Suspense } from "react"; // 1. Import Suspense

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeForge Academy",
  description: "Master Code. Build Your Future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#050b14] text-white antialiased min-h-screen flex flex-col`}>
        
        {/* 2. Wrap PageLoader in Suspense */}
        <Suspense fallback={null}>
          <PageLoader />
        </Suspense>

        {children}
        
      </body>
    </html>
  );
}