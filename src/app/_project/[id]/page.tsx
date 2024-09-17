import { Home } from "@/components/home";
import { HomeLayout } from "@/components/layout";
import { Project } from "@/components/projects";
import React from "react";

export default function Page() {
  return (
    <>
      <HomeLayout>
        <Project />
      </HomeLayout>
    </>
  );
}
