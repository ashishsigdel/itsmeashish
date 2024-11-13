import { Header } from "@/components/asprog/header";
import { CustomThemeProvider } from "@/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "asProg",
  description: "asProg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CustomThemeProvider>
      <div className="text-hard-dark dark:text-light bg-[#dcdcdc] dark:bg-hard-dark">
        <Header />
        {children}
      </div>
    </CustomThemeProvider>
  );
}
