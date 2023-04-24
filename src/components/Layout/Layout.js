import React from "react";
import AdminLayout from "./AdminLayout/AdminLayout";
import OrganizerLayout from "./OrganizerLayout/OrganizerLayout";
import { Navigate, useLocation } from "react-router-dom";

export default function Layout() {
  let location = useLocation();
  let auth = localStorage.getItem("Auth");
  let eventAuth = localStorage.getItem("EventAuth");
  return (
    <>
      {location.pathname === "/dashboard" ||
      location.pathname === "/organizer-list" ? (
        <>{auth ? <AdminLayout /> : <Navigate to="/" />}</>
      ) : (
        <>
          {eventAuth ? <OrganizerLayout /> : <Navigate to="/organizer/login" />}
        </>
      ) }
    </>
  );
}
