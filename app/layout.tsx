import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Metamorphous } from "next/font/google";

import "./globals.css";

const metamorphous = Metamorphous({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "WYNNN",
  description: "WYNNN trading app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={metamorphous.className}>{children}</body>
    </html>
  );
}
