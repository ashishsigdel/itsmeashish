"use client";
import { Login } from "@/components/auth";
import React, { Suspense } from "react";

export default function page() {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}
