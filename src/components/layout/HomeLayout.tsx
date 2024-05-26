"use client";

import { Background } from "@/utlis";
import { Outline } from "@/components/outline";
import { usePathname } from "next/navigation";

const getBackgroundStyles = (pathname: string) => {
  switch (pathname) {
    case "/about":
      return { color1: "86, 55, 200", circleSize: "90%", blending: "normal" };
    default:
      return { color1: "55, 200, 113", circleSize: "90%", blending: "normal" };
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
