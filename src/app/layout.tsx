import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UNITY CORE | Precision Core Cutting & Drilling Delhi",
  description: "Industrial-grade core drilling and RCC cutting services delivered with mathematical accuracy across Delhi NCR. 5.0 Google Rated.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9F9F9" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth light`} suppressHydrationWarning={true}>
      <body className="antialiased font-sans flex flex-col min-h-screen overflow-x-hidden">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-24 overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
