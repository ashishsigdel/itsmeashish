"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { signIn } from "@/services/authServices";
import { useRouter, useSearchParams } from "next/navigation";

export default function useSignIn() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [redirctTo, setRedirctTo] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
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
    setEmailError(null);
    setPasswordError(null);

    validateEmail();
    validatePassword();

    if (!emailError && !passwordError && email && password) {
      setIsLoading(true);
      try {
        const response = await signIn(formData);

        const { accessToken, user } = response.data;

        if (redirctTo) {
          router.push(`${redirctTo}`);
        }

        router.push("/asprog");

        setFormData({ email: "", password: "" });
      } catch (error: any) {
        console.error("Sign-in error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    email,
    password,
    formData,
    emailError,
    passwordError,
    isLoading,
    handleChange,
    validateEmail,
    validatePassword,
    onSubmit,
    setRedirctTo,
  };
}
