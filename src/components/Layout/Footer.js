import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="content-footer footer bg-footer-theme">
        <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
          <div className="mb-2 mb-md-0">
            © 2023 -{" "}
            <a href="#" target="_blank" className="footer-link fw-bolder">
              BUSINESS SUPPORT SERVICE LLP
            </a>
          </div>
          <div>
            <a href="#" target="_blank" className="footer-link me-4">
              Privacy
            </a>
            <a href="#" target="_blank" className="footer-link me-4">
              Terms & Condition
            </a>
            <a href="#" target="_blank" className="footer-link me-4">
              Cancellation Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
