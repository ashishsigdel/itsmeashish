import { Contact } from "@/components/contact";
import { HomeLayout } from "@/components/layout";
import { Projects } from "@/components/projects";
import React from "react";

export default function Page() {
  return (
    <div>
      <HomeLayout>
        <Projects />
      </HomeLayout>
    </div>
  );
}
