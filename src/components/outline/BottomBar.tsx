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
        <div className="group relative cursor-pointer hover:text-primary text-white/60">
          <FaLinkedin />
          <span className="absolute -top-12 opacity-0 group-hover:opacity-100 group-hover:-top-8 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap">
            Linkedin
          </span>
        </div>
        <div className="group relative cursor-pointer hover:text-primary text-white/60">
          <FaInstagram />
          <span className="absolute -top-12 opacity-0 group-hover:opacity-100 group-hover:-top-8 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap">
            Instagram
          </span>
        </div>
        <div className="group relative cursor-pointer hover:text-primary text-white/60">
          <FaFacebook />
          <span className="absolute -top-12 opacity-0 group-hover:opacity-100 group-hover:-top-8 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap">
            Facebook
          </span>
        </div>
        <div className="group relative cursor-pointer hover:text-primary text-white/60">
          <FaGithub />
          <span className="absolute -top-12 opacity-0 group-hover:opacity-100 group-hover:-top-8 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap">
            Github
          </span>
        </div>
        <div className="group relative cursor-pointer hover:text-primary text-white/60">
          <FaXTwitter />
          <span className="absolute -top-12 opacity-0 group-hover:opacity-100 group-hover:-top-8 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap">
            X
          </span>
        </div>
      </div>
    </div>
  );
}
