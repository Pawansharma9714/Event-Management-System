import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo">
            <a href="#" className="app-brand-link">
              <span className="app-brand-text demo menu-text fw-bolder ms-2">BSS LLP</span>
            </a>
            <a href="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div className="menu-inner-shadow"></div>

          <ul className="menu-inner py-1" id='MainMenu'>
            <li className="menu-item">
              <a href="index.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </a>
            </li>

            <li className="menu-item">
              <a href="#" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-layout"></i>
                <div data-i18n="Layouts">Layouts</div>
              </a>

              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="layouts-without-menu.html" className="menu-link">
                    <div data-i18n="Without menu">Without menu</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="layouts-without-navbar.html" className="menu-link">
                    <div data-i18n="Without navbar">Without navbar</div>
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Organizer</span>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Organizer">Organizer</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="#" className="menu-link" onClick={() => navigate("/organizer-list")}>
                    <div data-i18n="Organizer List">Organizer List</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
    </>
  )
}
