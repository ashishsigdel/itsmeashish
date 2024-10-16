import React from "react";
import logo from "@/assets/logo/coding.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LogoSection() {
  return (
    <Link href={"/"}>
      <motion.div
        className="h-full flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="w-[40px] h-full flex justify-center items-center border-r border-primary/20 overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={logo}
            alt="Logo"
            width={20}
            height={20}
            className="invert"
          />
        </motion.div>
        <motion.p
          className="ml-[12px] font-semibold tracking-wider text-[18px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Ashish<span className="text-primary">&lt;Sigdel&gt;</span>
        </motion.p>
      </motion.div>
    </Link>
  );
}
