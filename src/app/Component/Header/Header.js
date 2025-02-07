import React from 'react'
import "./Header.css";
const Header = () => {
  return (
    <div className="header-top-bg d-none d-md-block">
        <div className="container d-flex justify-content-between align-items-center py-2">
        <div className="d-flex align-items-center text-white">
            <small>
              Talk To Sales:{" "}
              <a
                href="tel:+918431086185"
                className="text-white text-decoration-none"
              >
                +91-8431086185
              </a>
            </small>
          </div>
          <div className="d-flex align-items-center text-white">
          <small className="me-3">
              <a href ="/contact" className="text-white text-decoration-none">
                Contact Us
               </a>
            </small>
            <small className="me-3">Support</small>
            <small>
              <a
                href="mailto:sales@a2zsms.in"
                className="text-white text-decoration-none"
              >
                sales@a2zsms.in
              </a>
            </small>
          </div>
        </div>
    </div>
  )
}

export default Header