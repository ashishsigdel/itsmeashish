import { About } from "@/components/about";
import { Home } from "@/components/home";
import { HomeLayout } from "@/components/layout";
import { Outline } from "@/components/outline";
import React from "react";

export default function Page() {
  return (
    <div>
      <HomeLayout>
        <Outline />
        <Home />
        <About />
      </HomeLayout>
    </div>
  );
}
