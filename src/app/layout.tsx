import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMS Pro | Modern School Management System",
  description: "Advanced AI-powered school management system for modern educational institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-wrapper">
          <Sidebar />
          <div className="content-area">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
