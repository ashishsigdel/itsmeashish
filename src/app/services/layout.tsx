import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ashish Sigdel || Services",
  description: "Ashish Sigdel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
