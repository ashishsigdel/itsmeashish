import { SectionTitle } from "@/components/common";
import { AboutMe, ILove, MeOnline } from "@/components/about";
import myPicOne from "@/assets/me/myPicOne.jpg";
import Image from "next/image";

export default function Profile() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center my-3 px-3 max-w-6xl mx-auto"
    >
      <SectionTitle title={"Profile Overview"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mx-auto mb-10">
        <div className="py-5 md:py-10 w-full relative mx-auto">
          <div className="md:sticky top-10 mx-auto">
            <Image
              src={myPicOne}
              alt="My Picture"
              width={400}
              height={400}
              className="rounded-md mx-auto md:mx-0"
            />
          </div>
        </div>
        <div className="overflow-y-auto">
          <AboutMe />
          <div className="flex my-5 gap-5">
            <ILove />
            <MeOnline />
          </div>
        </div>
      </div>
    </div>
  );
}
