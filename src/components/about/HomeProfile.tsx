import { Button } from "@/components/common";
import { Profile } from "@/components/about";
import Link from "next/link";

export default function HomeProfile() {
  return (
    <div className="w-full flex flex-col">
      <Profile />
      <Link href="/about" className="mx-auto">
        <Button title={"About-me"} />
      </Link>
    </div>
  );
}
