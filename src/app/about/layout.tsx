import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import { ToastUtlis } from "@/utlis";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashish Sigdel || About",
  description: "Ashish Sigdel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastUtlis />
      </body>
    </html>
  );
}