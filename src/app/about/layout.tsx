import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ashish Sigdel || About",
  description: "Ashish Sigdel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
