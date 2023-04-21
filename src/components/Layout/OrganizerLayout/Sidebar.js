import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <a href="#" className="app-brand-link">
            <span className="app-brand-text demo menu-text fw-bolder ms-2">
              BSS LLP
            </span>
          </a>
          <a
            href="#"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1" id="MainMenu">
          <li className="menu-item">
            <a
              className="menu-link cursor-pointer"
              onClick={() => navigate("/organizer/dashboard")}
            >
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Dashboard</div>
            </a>
          </li>

          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Event</span>
          </li>
          <li className="menu-item">
            <a className="menu-link menu-toggle cursor-pointer">
              <i className="menu-icon tf-icons bx bx-dock-top"></i>
              <div data-i18n="Organizer">Event</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a
                  className="menu-link cursor-pointer"
                  onClick={() => navigate("/event-list")}
                >
                  <div data-i18n="Organizer List">Event List</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}