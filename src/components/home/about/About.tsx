import { SectionTitle } from "@/components/common";
import Image from "next/image";
import myImage from "@/assets/me/me.jpg";
import { AboutMe, ILove, MeOnline } from "@/components/home/about";

export default function About() {
  return (
    <div className="flex flex-col justify-center my-3 min-h-screen px-3">
      <SectionTitle title={"Profile Overview"} />

      <div className="flex flex-wrap gap-5 items-center flex-col md:flex-row justify-center w-full">
        <div className="flex-1 py-5 md:py-10 w-full flex justify-center">
          <div className="w-full mx-auto">
            <div className="mr-12">
              <Image
                src={myImage}
                alt="ashish"
                className="w-[320px] h-[400px] object-cover mx-auto opacity-60 rounded-lg"
              />
            </div>
            <div className="ml-14 relative">
              <Image
                src={myImage}
                alt="image-two"
                className="border-t-4 border-l-4 border-primary w-[320px] h-[400px] object-cover mt-[-350px] mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
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
