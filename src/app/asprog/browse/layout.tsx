import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "asProg - Browse",
  description: "asProg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
