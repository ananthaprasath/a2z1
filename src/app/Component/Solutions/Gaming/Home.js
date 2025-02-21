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
    <section className="py-5 bg2">
      <div className="container">
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Revolutionize Gaming with{" "}
              <span className="text-primary">WhatsApp Solutions</span>
            </h1>
            <p className="text-muted">
              Transform the gaming experience by leveraging WhatsApp for real-time updates, personalized communication, and player engagement like never before.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Send instant game updates, challenges, and rewards.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Share tournament schedules, live results, and updates.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Provide seamless account recovery with OTPs on WhatsApp.</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Boost engagement with personalized gaming offers.</span>
              </li>
            </ul>
            <button className="btn btn-primary mt-4 px-4 py-2 fw-bold">
              Learn More
            </button>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src="/image/Solutions/game.png"
              alt="Gaming WhatsApp Services" width="px" height={"px"}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
