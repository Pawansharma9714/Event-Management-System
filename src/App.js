import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./utils/Loader";

const Layout = React.lazy(() => import("./components/Layout/Layout"));
const Login = React.lazy(() => import("./components/Pages/Auth/Login"));
const Dashboard = React.lazy(() => import("./components/Pages/Dashboard"));
const AdminProfile = React.lazy(() => import("./components/Pages/Auth/AdminProfile"));
const PageNotFound = React.lazy(() => import("./utils/PageNotFound"));
const ManageOrganizer = React.lazy(() =>
  import("./components/Pages/Organizer/ManageOrganizer")
);
const AdminProtected = React.lazy(() =>
  import("./components/Protected/AdminProtected")
);
const EventProtected = React.lazy(() =>
  import("./components/Protected/EventProtected")
);
const OraganizerLogin = React.lazy(() =>
  import("./components/Pages/Auth/OraganizerLogin")
);
const ManageEvent = React.lazy(() =>
  import("./components/Pages/Event/ManageEvent")
);
const OrganizerDashboard = React.lazy(() =>
  import("./components/Pages/OrganizerDashboard")
);
const Preferences = React.lazy(() =>
  import("./components/Pages/CustomField/Preferences")
);
const UserRegister = React.lazy(() =>
  import("./components/Pages/Auth/UserRegister")
);

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/user/user-view" element={<UserRegister />} />
            <Route
              exact
              path="/organizer/login"
              element={<OraganizerLogin />}
            />
            <Route exact path="*" element={<PageNotFound />} />
            <Route element={<Layout />}>
              {/* ADMIN */}
              <Route element={<AdminProtected />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/manage-profile" element={<AdminProfile />} />
                <Route
                  exact
                  path="/organizer-list"
                  element={<ManageOrganizer />}
                />
                <Route exact path="/preferences" element={<Preferences />} />
              </Route>

              {/* ORGANIZER */}
              <Route element={<EventProtected />}>
                <Route
                  exact
                  path="/organizer/dashboard"
                  element={<OrganizerDashboard />}
                />
                <Route exact path="/event-list" element={<ManageEvent />} />
                <Route
                  exact
                  path="/settings/preferences"
                  element={<Preferences />}
                />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
