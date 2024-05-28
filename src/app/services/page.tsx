import { HomeLayout } from "@/components/layout";
import { Services } from "@/components/services";
import React from "react";

export default function Page() {
  return (
    <div>
      <HomeLayout>
        <Services />
      </HomeLayout>
    </div>
  );
}
