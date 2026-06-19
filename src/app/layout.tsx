import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summit Shield Roofing | Fort Worth Demo Showcase",
  description: "Premium roofing showcase demo for storm response, inspections, and local trust.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-stone-950 text-stone-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
