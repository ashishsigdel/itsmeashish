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
      <div className="text-hard-dark dark:text-[#cecece] bg-[#ecebeb] dark:bg-hard-dark">
        {children}
      </div>
    </CustomThemeProvider>
  );
}
