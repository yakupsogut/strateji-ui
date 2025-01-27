import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/lib/strateji-ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strateji UI",
  description: "Modern ve kullanışlı React UI bileşenleri kütüphanesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
