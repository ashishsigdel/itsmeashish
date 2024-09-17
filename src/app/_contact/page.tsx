import { Contact } from "@/components/contact";
import { HomeLayout } from "@/components/layout";
import React from "react";

export default function Page() {
  return (
    <div>
      <HomeLayout>
        <Contact />
      </HomeLayout>
    </div>
  );
}
