"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Background } from "@/utlis";
import { Outline } from "@/components/outline";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const selectedColor = useSelector((state: any) => state.color.color);

  return (
    <>
      <Background color1={selectedColor} />
      <Outline>{children}</Outline>
    </>
  );
}
