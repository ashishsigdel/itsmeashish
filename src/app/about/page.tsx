import About from "@/components/about/About";
import { HomeLayout } from "@/components/layout";
import React from "react";

export default function Page() {
  return (
    <div>
      <HomeLayout>
        <About />
      </HomeLayout>
    </div>
  );
}
