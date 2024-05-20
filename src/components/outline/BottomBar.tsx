import Image from "next/image";
import logo from "@/assets/logo/coding.svg";
import { FiList } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TopBar() {
  return (
    <div className="w-full border-t border-primary-border-color h-[40px] flex items-center justify-between bg-black/30 relative">
      <div className="w-[40px] h-full flex justify-center items-center border-r border-primary-border-color overflow-hidden">
        <IoMdSettings className="text-[18px] text-white/60 hover:text-primary" />
      </div>
      <div className="pr-[20px] h-full flex justify-center items-center gap-3">
        <FaLinkedin className="text-[18px] text-white/60 hover:text-primary cursor-pointer" />
        <FaInstagram className="text-[18px] text-white/60 hover:text-primary cursor-pointer" />
        <FaFacebook className="text-[18px] text-white/60 hover:text-primary cursor-pointer" />
        <FaGithub className="text-[18px] text-white/60 hover:text-primary cursor-pointer" />
        <FaXTwitter className="text-[18px] text-white/60 hover:text-primary cursor-pointer" />
      </div>
    </div>
  );
}
