import { About } from "@/components/home/about";
import { Home } from "@/components/home";
import { HomeLayout } from "@/components/layout";
import React from "react";

export default function Page() {
  return (
    <div>
      <HomeLayout>
        <Home />
      </HomeLayout>
    </div>
  );
}
