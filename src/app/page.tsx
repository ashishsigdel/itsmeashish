import { About } from "@/components/about";
import { Home } from "@/components/home";
import { HomeLayout } from "@/components/layout";
import React from "react";

export default function Page() {
  return (
    <div>
      <HomeLayout>
        <Home />
        <About />
      </HomeLayout>
    </div>
  );
}
