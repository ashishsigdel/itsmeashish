import Image from "next/image";
import image1 from "@/assets/test/1.jpg";
import image2 from "@/assets/test/2.jpg";

export default function AboutImage() {
  return (
    <>
      <div className="ml-14 ">
        <Image
          src={image2}
          alt="ashish"
          className="border-[6px] border-white w-[320px] h-[400px] object-cover mx-auto"
        />
      </div>
      <div className="mr-60 relative">
        <Image
          src={image1}
          alt="image-two"
          className="border-[6px] border-white w-[320px] h-[400px] object-cover mt-[-450px] mx-auto"
        />
      </div>
    </>
  );
}
