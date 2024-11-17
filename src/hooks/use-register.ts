// hooks/useRegister.ts
"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Register } from "@/services/authServices";
import { useRouter, useSearchParams } from "next/navigation";

// Remove default export and use named export instead
export function useRegister() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { fullName, email, password } = formData;

  const [isLoading, setIsLoading] = useState(false);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [redirctTo, setRedirctTo] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateFullName = () => {
    setFullNameError(!fullName ? "Full name is required!" : null);
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(
      !email
        ? "Email is required!"
        : !emailPattern.test(email)
        ? "Invalid email format!"
        : null
    );
  };

  const validatePassword = () => {
    setPasswordError(!password ? "Password is required!" : null);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFullNameError(null);
    setEmailError(null);
    setPasswordError(null);

    validateFullName();
    validateEmail();
    validatePassword();

    if (
      !fullNameError &&
      !emailError &&
      !passwordError &&
      fullName &&
      email &&
      password
    ) {
      setIsLoading(true);
      try {
        const response = await Register(formData);

        setFormData({ fullName: "", email: "", password: "" });

        if (redirctTo) {
          router.push(`/login${redirctTo}`);
        } else {
          router.push("/login");
        }
      } catch (error: any) {
        if (!error.response) {
          setError("Something went wrong!");
        }
        setError(error.response?.data?.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    fullName,
    email,
    password,
    formData,
    fullNameError,
    emailError,
    passwordError,
    isLoading,
    handleChange,
    validateFullName,
    validateEmail,
    validatePassword,
    onSubmit,
    setRedirctTo,
    redirctTo,
    error,
  };
}
