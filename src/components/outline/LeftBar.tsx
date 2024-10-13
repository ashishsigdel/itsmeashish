import { useState, useEffect } from "react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaFingerprint, FaDesktop, FaCode } from "react-icons/fa";
import { RiApps2Fill, RiContactsBook3Fill } from "react-icons/ri";

const links = [
  { href: "#home", icon: <IoHome />, label: "Home" },
  { href: "#about", icon: <FaFingerprint />, label: "About Me" },
  { href: "#portfolio", icon: <RiApps2Fill />, label: "My Portfolio" },
  { href: "#services", icon: <FaDesktop />, label: "My Services" },
  { href: "#technologies", icon: <FaCode />, label: "Technologies" },
  { href: "#contact", icon: <RiContactsBook3Fill />, label: "Contact Me" },
];

export default function LeftBar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjusted threshold
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isActive = (id: string) => activeSection === id;

  return (
    <div className="hidden md:flex flex-col gap-4 justify-center items-center w-[40px] h-full border-r border-primary-border-color bg-black/30">
      {links.map(({ href, icon, label }) => (
        <Link key={href} href={href}>
          <div
            className={`group relative cursor-pointer hover:text-primary ${
              isActive(label.toLowerCase().replace(" ", ""))
                ? "text-white/90"
                : "text-white/40"
            }`}
            aria-current={
              isActive(label.toLowerCase().replace(" ", ""))
                ? "page"
                : undefined
            }
          >
            {icon}
            <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
              {label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
