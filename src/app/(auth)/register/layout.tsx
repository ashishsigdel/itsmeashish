import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "asProg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-hard-dark/90 dark:text-light bg-[#f2f2f2] dark:bg-hard-dark transition-colors duration-300 ease-in-out min-h-screen">
      {children}
    </div>
  );
}
