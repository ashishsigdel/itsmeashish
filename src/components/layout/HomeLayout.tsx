"use client";

import { Background } from "@/utlis";
import { Outline } from "@/components/outline";
import { usePathname } from "next/navigation";

const getBackgroundStyles = (pathname: string) => {
  switch (pathname) {
    case "/contact":
      return { color1: "225, 184, 79" };
    case "/about":
      return { color1: "86, 55, 200" };
    case "/portfolio":
      return { color1: "225, 79, 98" };
    case "/services":
      return { color1: "225, 79, 98" };
    default:
      return { color1: "55, 200, 113" };
  }
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const backgroundStyles = getBackgroundStyles(pathname);

  return (
    <>
      <Background {...backgroundStyles} />
      <Outline>{children}</Outline>
    </>
  );
}
