import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resto | Modern Restaurant",
  description: "Fresh ingredients, carefully prepared dishes, and a dining experience worth remembering.",
  openGraph: {
    title: "Resto | Modern Restaurant",
    description: "Experience premium dining.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-brand-light dark:bg-brand-dark transition-colors duration-300`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}