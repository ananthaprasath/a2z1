"use client"; // Important for Next.js app directory

import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation runs only once
    });
  }, []);


  return (
    <section
      style={{
        backgroundColor: "#f9f9f9",
        padding: "50px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center aos">
        <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-2">
              Improve Your Business with{" "}
              <span className="text-info">RCS Messaging Solutions</span>
            </h1>
            <p className="text-muted mb-4">
              Replace the SMS and MMS texting with feature-rich RCS messaging to
              send and receive media including high-resolution images,
              high-definition videos, and much more.
            </p>
            <ul className="list-unstyled para-color">
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Send messages with rich images and videos.</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Build trust with verified business identity.</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>
                  Use quick replies and smart actions for better response.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Improve communication with HD images and videos.</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Personalize your brand with custom options.</span>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center" data-aos="fade-left">
          <img
              className="img-fluid rounded"
              src="/image/product/RCS1.png"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
