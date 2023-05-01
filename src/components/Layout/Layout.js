import React, { Suspense } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../utils/Loader";
// import AdminLayout from "./AdminLayout/AdminLayout";
// import OrganizerLayout from "./OrganizerLayout/OrganizerLayout";

const AdminLayout = React.lazy(() => import("./AdminLayout/AdminLayout"));
const OrganizerLayout = React.lazy(() =>
  import("./OrganizerLayout/OrganizerLayout")
);

export default function Layout() {
  let location = useLocation();
  let auth = localStorage.getItem("Auth");
  let eventAuth = localStorage.getItem("EventAuth");
  return (
    <>
      {location.pathname === "/dashboard" ||
      location.pathname === "/organizer-list" ||
      location.pathname === "/manage-profile" ? (
        <>
          {auth ? (
            <Suspense fallback={<Loader />}>
              <AdminLayout />{" "}
            </Suspense>
          ) : (
            <Navigate to="/" />
          )}
        </>
      ) : (
        <>
          {eventAuth ? (
            <Suspense fallback={<Loader />}>
              <OrganizerLayout />
            </Suspense>
          ) : (
            <Navigate to="/organizer/login" />
          )}
        </>
      )}
    </>
  );
}
