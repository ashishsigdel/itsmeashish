import { Register } from "@/components/auth";
import React, { Suspense } from "react";

export default function page() {
  return (
    <Suspense>
      <Register />
    </Suspense>
  );
}
