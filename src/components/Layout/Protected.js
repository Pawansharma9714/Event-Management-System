import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function Protected() {
  let isLoggedIn = localStorage.getItem("Auth");
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}
