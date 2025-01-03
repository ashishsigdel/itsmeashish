"use client";
import { useEffect } from "react";
import { setAuth } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";

export default function CheckIfAuthenticate() {
  const dispatch = useDispatch();

  useEffect(() => {
    let user = localStorage.getItem("user");

    if (user) {
      user = JSON.parse(user);
      dispatch(setAuth(user));
    } else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    }
  }, [dispatch]);

  return null;
}
