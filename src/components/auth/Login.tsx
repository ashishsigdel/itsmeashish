"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FormField } from "@/components/auth";
import leftImage from "@/assets/auth/reg-mascot.webp";
import { useRouter, useSearchParams } from "next/navigation";
import useSignIn from "@/hooks/use-signin";
import { useSelector } from "react-redux";

export default function Login() {
  const router = useRouter();
  const {
    email,
    password,
    formData,
    emailError,
    passwordError,
    isLoading,
    handleChange,
    onSubmit,
    setRedirctTo,
    redirctTo,
    error,
  } = useSignIn();

  const searchParams = useSearchParams();

  const redirect_url = searchParams.get("redirect_url");

  useEffect(() => {
    if (redirect_url) {
      setRedirctTo(redirect_url);
    }
  }, [redirect_url]);

  const user = localStorage.getItem("user");
  if (user) {
    router.push("/asprog");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      {/* Left Image */}
      <div className="flex-1 hidden md:flex items-center justify-center h-full bg-white dark:bg-gray-900">
        <Image
          height={500}
          width={500}
          src={leftImage}
          alt="Mascot"
          className="w-[80%] max-w-[400px] object-contain"
        />
      </div>

      {/* Right Form */}
      <div className="flex-1 flex items-center justify-center h-full p-6 ">
        <FormField
          which="login"
          formData={formData}
          handleChange={handleChange}
          onSubmitSignIn={onSubmit}
          error={error}
          isLoading={isLoading}
          redirectTo={redirctTo}
        />
      </div>
    </div>
  );
}
