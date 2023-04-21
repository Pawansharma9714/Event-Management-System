import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function OrganizerLayout() {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Header />
            <div className="content-wrapper">
              <Outlet />
              <Footer />
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </>
  )
}
