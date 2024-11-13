import { ThemeToggler } from "@/utlis";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center w-full h-screen">
      <h1>asProg</h1>
      <ThemeToggler />
      <p>Website under production.</p>
    </div>
  );
}
