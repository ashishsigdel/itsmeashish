import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import { StoreProvider } from "@/provider";
import "./favicon.ico";
import CheckIfAuthenticate from "@/utlis/CheckIfAuth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashish Sigdel",
  description: "Ashish Sigdel",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <CheckIfAuthenticate />
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}
