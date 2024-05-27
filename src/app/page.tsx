import { Home } from "@/components/home";
import { HomeLayout } from "@/components/layout";
import PreLoader from "@/utlis/PreLoader";
import React from "react";

export default function Page() {
  return (
    <>
      <PreLoader />
      <HomeLayout>
        <Home />
      </HomeLayout>
    </>
  );
}
