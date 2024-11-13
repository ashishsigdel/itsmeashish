"use client";
import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=""
    >
      {theme === "dark" ? (
        <div className="text-[26px] text-skin font-bold">
          <FaRegMoon />
        </div>
      ) : (
        <div className="text-[26px] text-skin font-bold">
          <BiSun />
        </div>
      )}
    </button>
  );
}
