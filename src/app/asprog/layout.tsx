import { Footer } from "@/components/asprog/footer";
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
      <div className="text-hard-dark/90 dark:text-light bg-[#f2f2f2] dark:bg-hard-dark transition-colors duration-300 ease-in-out">
        <Header />
        {children}
        <Footer />
      </div>
    </CustomThemeProvider>
  );
}