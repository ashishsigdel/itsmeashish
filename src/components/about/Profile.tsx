import { SectionTitle } from "@/components/common";
import { AboutMe, ILove, MeOnline } from "@/components/about";
import myPicOne from "@/assets/me/myPicOne.jpg";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center my-3 px-3 max-w-6xl mx-auto">
      <SectionTitle title={"Profile Overview"} />

      <div className="flex flex-wrap gap-5 flex-col md:flex-row justify-center w-full mb-5">
        <div className="flex-1 py-5 md:py-10 w-full relative">
          <div className="md:sticky top-10">
            <Image
              src={myPicOne}
              alt="My Picture"
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
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
