import { Button, SectionTitle } from "@/components/common";
import { AboutImage, AboutMe, ILove, MeOnline } from "@/components/about";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center my-3 px-3 max-w-6xl mx-auto">
      <SectionTitle title={"Profile Overview"} />

      <div className="flex flex-wrap gap-5 items-center flex-col md:flex-row justify-center w-full mb-5">
        <div className="flex-1 py-5 md:py-10 w-full flex justify-center relative">
          <div className="w-full mx-auto my-10">
            <AboutImage />
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
      <div className="mx-auto">
        <Button title={"About-me"} />
      </div>
    </div>
  );
}
