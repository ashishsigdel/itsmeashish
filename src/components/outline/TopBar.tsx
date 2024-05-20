import Image from "next/image";
import logo from "@/assets/logo/coding.svg";
import { FiList } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="w-full border-b border-primary-border-color h-[40px] flex items-center justify-between bg-black/30 relative">
      <div className="w-[40px] h-full flex justify-center items-center border-r border-primary-border-color overflow-hidden">
        <Image src={logo} alt="" width={20} height={20} className="invert" />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <p className="text-center font-semibold tracking-wider">
          Ashish<span className="text-primary">&lt;Sigdel&gt;</span>
        </p>
      </div>
      <div className="w-[40px] h-full flex justify-center items-center md:hidden">
        <FiList className="text-xl cursor-pointer" />
      </div>
    </div>
  );
}
