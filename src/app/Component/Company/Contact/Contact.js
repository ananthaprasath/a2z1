'use client';

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./Form"; // Import the ContactForm component
import Link from "next/link";

const ContactPage = () => {
  const handleWhatsappClick = () => {
    window.open("https://wa.me/+918431086185", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:sales@a2zsms.in";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:8431086185";
  };

  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/company/103567741/admin/dashboard/",
      "_blank"
    );
  };

  const onFinish = (values) => {
    console.log("Form Data:", values);
    // Add form submission logic here
  };

  return (
    <>
      <div
        className="bg2"
        style={{
          backgroundImage: 'url("/image/Contact.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <div className="d-flex mb-3 flex-column">
                <h1 className="text-center mt-4 text-white">
                  Helping you is our priority
                </h1>
              </div>
              <div className="col-lg-4 col-md-12 text-white ps-4">
                <div className="mb-4 mt-md-3">
                  <h2 className="h3 ms-2 text-white">Contact Information</h2>
                  <p className="opacity-75 ms-2 text-white">
                    <small>
                      Fill out the form and we will get back to you within 24 hours.
                    </small>
                  </p>
                </div>
                <div className="d-flex flex-column px-0">
                  <ul className="m-0 p-0">
                    <li className="d-flex justify-content-start align-items-center mb-4">
                      <span className="opacity-75 d-flex align-items-center me-3 fs-4 ms-2 text-white">
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <span
                        style={{ cursor: "pointer", color: "white" }}
                        onClick={handlePhoneClick}
                      >
                        +91 84310 86185
                      </span>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <span className="opacity-75 d-flex align-items-center me-3 fs-4 ms-2 text-white">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <span
                        style={{ cursor: "pointer", color: "white" }}
                        onClick={handleEmailClick}
                      >
                        sales@a2zsms.in
                      </span>
                    </li>
                    <li className="d-flex justify-content-start align-items-center mb-4">
                      <span className="opacity-75 d-flex align-items-center me-3 fs-3 ms-2 text-white">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </span>
                      <Link href="#" className="text-decoration-none" style={{ color: "white" }}>
                        Address: 183, 2nd Floor, G Block opposite to Reliance Trends, Sahakara Nagar Main rd, Byatarayanapura, Bengaluru, Karnataka 560092
                      </Link>
                    </li>
                    <li className="d-flex justify-content-start align-items-center mb-4">
                      <span className="opacity-75 d-flex align-items-center me-3 fs-4 ms-2 text-white">
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </span>
                      <span
                        style={{ cursor: "pointer", color: "white" }}
                        onClick={handleWhatsappClick}
                      >
                        Whatsapp
                      </span>
                    </li>
                    <li className="d-flex justify-content-start align-items-center mb-4">
                      <span className="opacity-75 d-flex align-items-center me-3 fs-3 ms-2 text-white">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </span>
                      <span
                        style={{ cursor: "pointer", color: "white" }}
                        onClick={handleLinkedinClick}
                      >
                        LinkedIn
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 px-5 rounded-3">
                <ContactForm onFinish={onFinish} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
