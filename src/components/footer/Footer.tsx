import Image from "next/image";
import logo from "@/assets/logo/coding.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-16 py-10 bg-black/65 border-t border-primary-border-color">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between">
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
          <div>
            <ul className="flex gap-5">
              <Link href="#" className="hover:text-primary text-white/60">
                <li>
                  <span>about</span>
                </li>
              </Link>
              <Link href="#" className="hover:text-primary text-white/60">
                <li>
                  <span>portfolio</span>
                </li>
              </Link>
              <Link href="#" className="hover:text-primary text-white/60">
                <li>
                  <span>services</span>
                </li>
              </Link>
              <Link href="#" className="hover:text-primary text-white/60">
                <li>
                  <span>contact</span>
                </li>
              </Link>
            </ul>
          </div>
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
