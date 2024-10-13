import { IoHome } from "react-icons/io5";
import { FaFingerprint, FaDesktop, FaCode } from "react-icons/fa";
import { RiApps2Fill, RiContactsBook3Fill } from "react-icons/ri";

export const navigationLinks = [
  { href: "#home", icon: IoHome, label: "Home" },
  { href: "#about", icon: FaFingerprint, label: "About Me" },
  { href: "#portfolio", icon: RiApps2Fill, label: "My Portfolio" },
  { href: "#services", icon: FaDesktop, label: "My Services" },
  { href: "#technologies", icon: FaCode, label: "Technologies" },
  { href: "#contact", icon: RiContactsBook3Fill, label: "Contact Me" },
];
