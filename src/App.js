import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/Pages/Auth/Login";
import Dashboard from "./components/Pages/Dashboard";
import PageNotFound from "./utils/PageNotFound";
import ManageOrganizer from "./components/Pages/Organizer/ManageOrganizer";
import Protected from "./components/Layout/Protected";
import OraganizerLogin from "./components/Pages/Auth/OraganizerLogin";
import ManageEvent from "./components/Pages/Event/ManageEvent";
import OrganizerDashboard from "./components/Pages/OrganizerDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="*" element={<PageNotFound />} />
          <Route exact path="/organizer/login" element={<OraganizerLogin />} />
          <Route element={<Layout />}>
            <Route element={<Protected />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route
                exact
                path="/organizer-list"
                element={<ManageOrganizer />}
              />
            </Route>
            <Route
              exact
              path="/organizer/dashboard"
              element={<OrganizerDashboard />}
            />
            <Route exact path="/event-list" element={<ManageEvent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
