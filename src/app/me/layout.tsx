import { Footer } from "@/components/me/footer";
import { Header } from "@/components/me/header";
import { CustomThemeProvider } from "@/provider";
import type { Metadata } from "next";

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
    <CustomThemeProvider>
      <div className="text-hard-dark/90 dark:text-light bg-[#f2f2f2] dark:bg-hard-dark transition-colors duration-300 ease-in-out">
        <Header />
        {children}
        <Footer />
      </div>
    </CustomThemeProvider>
  );
}
