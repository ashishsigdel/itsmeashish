import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import { ToastUtlis } from "@/utlis";
import PreLoader from "@/utlis/PreLoader";
import { StoreProvider } from "@/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashish Sigdel",
  description: "Ashish Sigdel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          {/* <PreLoader /> */}
          {children}
          <ToastUtlis />
        </body>
      </html>
    </StoreProvider>
  );
}
