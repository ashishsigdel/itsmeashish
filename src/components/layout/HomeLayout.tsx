import { Background } from "@/utlis";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Background />
      <div>{children}</div>
    </div>
  );
}
