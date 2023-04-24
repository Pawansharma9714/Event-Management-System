import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/Pages/Auth/Login";
import Dashboard from "./components/Pages/Dashboard";
import PageNotFound from "./utils/PageNotFound";
import ManageOrganizer from "./components/Pages/Organizer/ManageOrganizer";
import AdminProtected from "./components/Protected/AdminProtected";
import EventProtected from "./components/Protected/EventProtected";
import OraganizerLogin from "./components/Pages/Auth/OraganizerLogin";
import ManageEvent from "./components/Pages/Event/ManageEvent";
import OrganizerDashboard from "./components/Pages/OrganizerDashboard";
import Preferences from "./components/Pages/Preferences";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/organizer/login" element={<OraganizerLogin />} />
          <Route exact path="*" element={<PageNotFound />} />
          <Route element={<Layout />}>
            {/* ADMIN */}
            <Route element={<AdminProtected />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
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
              <Route exact path="/settings/preferences" element={<Preferences />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
