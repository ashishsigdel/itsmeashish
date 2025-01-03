"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push("/me");
  }, []);
  return (
    <div className="flex w-screen h-screen items-center justify-center text-hard-dark/80 text-4xl font-semibold">
      <h1>Loading...</h1>
    </div>
  );
}
