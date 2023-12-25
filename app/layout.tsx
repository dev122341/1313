import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metamorphous } from "next/font/google";
import { Rubik } from "next/font/google";

import "./globals.css";

const metamorphous = Metamorphous({
  subsets: ["latin"],
  weight: "400",
});

const maladroit = localFont({
  src: [
    {
      path: "../public/Maladorit-bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/Maladorit-normal.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const rubik = Rubik({
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
      <body className={maladroit.className}>{children}</body>
    </html>
  );
}
