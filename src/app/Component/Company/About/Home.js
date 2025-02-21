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
    <div>
      <section className="py-5 bg-light">
  <div className="container">
    <div className="row align-items-center aos">
      {/* Left Content */}
      <div className="col-md-6 para-color" data-aos="fade-right">
        <h1 className="fw-bold mb-4">
        Welcome to A2ZSMS   <span className="text-primary">Your Messaging Partner</span>
        </h1>
        <p>
          At A2ZSMS, we specialize in providing innovative communication solutions that empower businesses to connect with their customers seamlessly. Our focus is on delivering reliability, speed, and scalability, making us a trusted partner for businesses across industries.
        </p>
        <ul className="list-unstyled mt-4 text-muted">
          <li className="d-flex align-items-start mb-3">
            <i className="bi bi-check-circle-fill text-primary me-3"></i>
            <span>Comprehensive solutions including WhatsApp API, Bulk SMS, RCS Messaging, Voice Calls, and OTP services.</span>
          </li>
          <li className="d-flex align-items-start mb-3">
            <i className="bi bi-check-circle-fill text-primary me-3"></i>
            <span>Customized communication strategies tailored for Real Estate, Healthcare, Education, and more.</span>
          </li>
          <li className="d-flex align-items-start mb-3">
            <i className="bi bi-check-circle-fill text-primary me-3"></i>
            <span>99.9% uptime for reliable and uninterrupted services.</span>
          </li>
       
          <li className="d-flex align-items-start mb-3">
            <i className="bi bi-check-circle-fill text-primary me-3"></i>
            <span>Dedicated customer support ensuring smooth and efficient communication.</span>
          </li>
        </ul>
      </div>

      {/* Right Image Section */}
      <div className="col-md-6 text-center aos" data-aos="fade-left">
        <img
          src='/image/About.png' // Replace with an About Us related image
          alt="About A2ZSMS" width="px" height={"px"}
          className="img-fluid rounded"
        />
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Home
