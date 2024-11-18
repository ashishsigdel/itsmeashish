"use client";
import useSignIn from "@/hooks/use-signin";
import useSignOut from "@/hooks/use-signout";
import { RootState } from "@/redux/store";
import { ThemeToggler } from "@/utlis";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export default function AuthSection() {
  const pathname = usePathname();
  const { isLoading, logout } = useSignOut();

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="flex gap-5 md:gap-10 items-center mr-4">
      {user ? (
        <div className="flex gap-4 items-center ">
          <p className="">
            Hi,{" "}
            <span className="font-semibold">
              {user.fullName && user?.fullName.split(" ")[0]}
            </span>
          </p>
          <div
            onClick={() => {
              if (!isLoading) logout();
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-5 rounded-full font-semibold cursor-pointer"
          >
            <p className="text-light">
              {isLoading ? "Logging out..." : "Logout"}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 items-center ">
          <Link className="hidden sm:block" href={"/register"}>
            <div className="font-semibold">
              <p className="text-hard-dark/70 dark:text-light">Register</p>
            </div>
          </Link>
          <Link href={`/login?redirect_url=${pathname}`}>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-5 rounded-full font-semibold">
              <p className="text-light">Login</p>
            </div>
          </Link>
        </div>
      )}

      <ThemeToggler />
    </div>
  );
}
