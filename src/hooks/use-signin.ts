"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { logOut, signIn } from "@/services/authServices";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { removeAuth, setAuth } from "@/redux/features/authSlice";

export default function useSignIn() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [redirctTo, setRedirctTo] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

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

        const data = response.data;

        const accessToken: string = data.accessToken;

        localStorage.setItem("accessToken", accessToken);
        const userData = JSON.stringify(data.user);
        localStorage.setItem("user", userData);

        dispatch(setAuth(data.user));

        setFormData({ email: "", password: "" });
        if (redirctTo !== null) {
          router.push(redirctTo);
        } else {
          router.push("/asprog");
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

  const redirectIfAuthenticate = useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      router.push("/asprog");
    }
  }, [router]);

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
    redirctTo,
    error,
    redirectIfAuthenticate,
  };
}
