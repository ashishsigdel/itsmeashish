"use client";
import { useState } from "react";
import { logOut } from "@/services/authServices";
import { useDispatch } from "react-redux";
import { removeAuth } from "@/redux/features/authSlice";

export default function useSignOut() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    try {
      setIsLoading(true);
      const response = await logOut();
    } catch (error: any) {
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      dispatch(removeAuth());
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    logout,
  };
}
