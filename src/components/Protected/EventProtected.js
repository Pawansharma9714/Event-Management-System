import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function EventProtected() {
  let isLoggedIn = localStorage.getItem("EventAuth");
  return isLoggedIn ? <Outlet /> : <Navigate to="/organizer/login" replace />;
}
