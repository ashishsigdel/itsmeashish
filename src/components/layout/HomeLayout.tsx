"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Background } from "@/utlis";
import { Outline } from "@/components/outline";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { IoMdClose, IoMdSettings } from "react-icons/io";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const selectedColor = useSelector((state: any) => state.color.color);

  const [openColorChoose, setOpenColorChoose] = useState(false);

  const handleColorChoose = () => {
    setOpenColorChoose(!openColorChoose);
  };

  const handleCloseColorControl = () => {
    setOpenColorChoose(false);
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        {children}
        <Background color1={selectedColor} />
      </div>
      <Footer />
    </>
  );
}
