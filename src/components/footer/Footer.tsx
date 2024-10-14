"use client";

import Image from "next/image";
import logo from "@/assets/logo/coding.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoPush } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function Footer() {
  const pathname = usePathname();

  const isHideen = (page: string) => {
    return page === pathname;
  };

  return (
    <div className="mt-16 py-10 bg-black/65 border-t border-primary-border-color w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex gap-3 items-center">
            <Image
              src={logo}
              alt="Logo"
              width={26}
              height={26}
              className="invert"
            />
            <p className="text-center font-bold tracking-wider text-2xl">
              Ashish<span className="text-primary">&lt;Sigdel&gt;</span>
            </p>
          </div>
          {/* <div className="my-5 sm:my-0">
            <ul className="flex flex-col sm:flex-row text-center gap-5">
              <Link
                href=""
                className={`${
                  isHideen("/") ? "hidden" : ""
                } hover:text-primary text-white/60`}
              >
                <li>
                  <span>home</span>
                </li>
              </Link>
              <Link
                href="/about"
                className={`${
                  isHideen("/about") ? "hidden" : ""
                } hover:text-primary text-white/60`}
              >
                {" "}
                <li>
                  <span>about</span>
                </li>
              </Link>
              <Link
                href="/portfolio"
                className={`${
                  isHideen("/portfolio") ? "hidden" : ""
                } hover:text-primary text-white/60`}
              >
                {" "}
                <li>
                  <span>portfolio</span>
                </li>
              </Link>
              <Link
                href="/services"
                className={`${
                  isHideen("/services") ? "hidden" : ""
                } hover:text-primary text-white/60`}
              >
                {" "}
                <li>
                  <span>services</span>
                </li>
              </Link>
              <Link
                href="/contact"
                className={`${
                  isHideen("/contact") ? "hidden" : ""
                } hover:text-primary text-white/60`}
              >
                {" "}
                <li>
                  <span>contact</span>
                </li>
              </Link>
            </ul>
          </div> */}
          <Link href={"#home"}>
            <button className="text-white hover:text-primary cursor-pointer flex gap-2 items-center">
              Scroll to Top
              <span>
                <MdOutlineKeyboardArrowUp />
              </span>
            </button>
          </Link>
        </div>
        <div className="mt-10 text-sm text-white/90 w-full">
          <p className="text-center">
            &copy; Ashish Sigdel 2024 - All Right Reserved!
          </p>
        </div>
      </div>
    </div>
  );
}
