import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/Pages/Auth/Login";
import Dashboard from "./components/Pages/Dashboard";
import PagenotFound from "./utils/PagenotFound";
import ManageOrganizer from "./components/Pages/Organizer/ManageOrganizer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="*" element={<PagenotFound />} />
          <Route element={<Layout />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/organizer-list" element={<ManageOrganizer />} />
            {/* <Route exact path="/dashboard" element={<Protected Component={Dashboard} />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
