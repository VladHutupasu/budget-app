import type { Metadata } from "next";
import { Knewave } from "next/font/google";
import "./globals.css";

const knewave = Knewave({
  variable: "--font-knewave",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Budget App",
  description: "Spend wisely with Budget App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={`${knewave.variable} antialiased`}>{children}</body>
    </html>
  );
}
