import { Background } from "@/utlis";
import { Outline } from "@/components/outline";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Background />
      <Outline>{children}</Outline>
    </>
  );
}
