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
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Elevate Your Business with{" "}
              <span className="text-success">Cloud WhatsApp API</span>
            </h1>
            <p className="text-muted">
              Transform your business engagement with the customer through our
              Cloud WhatsApp API. Enjoy effortless connectivity, automation as
              well as scalability on a single trusted platform.
            </p>
            <ul className="list-unstyled fw-bold mt-4">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Automate customer support with intelligent chatbots.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Send personalized messages at scale with templates.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Provide secure and instant OTP verification services.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Deliver real-time notifications for orders and updates.</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Integrate seamlessly with CRMs for unified workflows.</span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              className="img-fluid rounded"
              src="/image/product/Whatsapp.png"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
