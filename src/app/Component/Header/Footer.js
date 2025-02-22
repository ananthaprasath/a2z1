"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="bg text-white py-5 footer-bg"
      style={{ backgroundImage: `url('/image/footer-bg-2.jpg')` }}
    >
      <div className="container">
        <div className="row">
          {/* Left Section - Company Info */}
          <div className="col-md-4 mb-4">
            <img src="/image/logo.png" alt="A2Z SMS Logo" width="80px" />
            <p className="pt-1">
              Bulk SMS is the most popular marketing method compared to other
              marketing methods. It is trusted, reliable, and cost-effective.
            </p>
            <h5 className="fw-bold mt-4">Payment Method</h5>
            <div>
              <img className="me-4" src="/image/visa-logo.png" alt="Visa" />
              <img className="me-4" src="/image/payoneer-logo.png" alt="Payoneer" />
              <img className="me-4" src="/image/mastercard-logo.png" alt="Mastercard" />
              <img className="me-4" src="/image/affirm-logo.png" alt="Affirm" />
            </div>
          </div>

          {/* Center - Company Links */}
          <div className="col-5 col-md-2 mx-3 mb-4">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled" id="line-space">
              <li>
                <Link href="/" className="text-white text-decoration-none hover  pt-2 ">
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white text-decoration-none hover  pt-2">
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  About
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-white text-decoration-none hover  pt-2">
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white text-decoration-none hover  pt-2">
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  FAQ's
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-decoration-none hover  pt-2">
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* SMS Plans Links */}
          <div className="col-5 col-md-2 mx-3 mb-4">
            <h5 className="fw-bold">SMS Plans</h5>
            <ul className="list-unstyled" id="line-space">
              <li>
                <Link href="/bulksms" className="text-white text-decoration-none hover ">
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  Bulk SMS
                </Link>
              </li>
              <li>
                <Link href="/whatsapp" className="text-white text-decoration-none hover  pt-2">
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link href="/rcssms" className="text-white text-decoration-none hover  pt-2">
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  RCS SMS
                </Link>
              </li>
              <li>
                <Link href="/voicecall" className="text-white text-decoration-none hover  pt-2">
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  Bulk Voice Call
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-white text-decoration-none hover  pt-2">
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Newsletter</h5>
            <p className="py-2">
              Sign up to receive our weekly newsletter to get the latest
              updates.
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email Address"
                aria-label="Enter Email Address"
              />
              <button className="btn btn-light">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
            <div className="d-flex mt-4">
              <Link href="https://www.facebook.com/A2zsmsservices/" className="text-white me-3 fs-5 bg-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link href="https://in.linkedin.com/in/vinay-reddy-76337b336" className="text-white me-3 fs-5 bg-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
              <Link href="https://wa.me/918431086185?text=Hi" className="text-white me-3 fs-5 bg-success rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
              <Link href="https://www.youtube.com/@a2zsms" className="text-white fs-5 bg-danger rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
          </div>
        </div>

        <hr />

        {/* Footer Bottom */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} by <strong>A2ZSMS</strong>.
                All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                <Link href="/terms/" className="text-white text-decoration-none me-3" style={{ fontWeight: "500" }}>Terms & Condition</Link>
                <Link href="/privacy/" className="text-white text-decoration-none" style={{ fontWeight: "500" }}>Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
