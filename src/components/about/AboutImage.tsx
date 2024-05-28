import Image from "next/image";
import myPicOne from "@/assets/me/myPicOne.jpg";
import myPicTwo from "@/assets/me/myPicTwo.jpg";

export default function AboutImage() {
  return (
    <>
      <div className="ml-14 ">
        <Image
          src={myPicOne}
          alt="ashish"
          className="border-[6px] border-white w-[320px] h-[400px] object-cover mx-auto"
        />
      </div>
      <div className="mr-52 lg:mr-60 relative">
        <Image
          src={myPicTwo}
          alt="image-two"
          className="border-[6px] border-white w-[200px] h-[400px] object-cover mt-[-450px] mx-auto"
        />
      </div>
    </>
  );
}
