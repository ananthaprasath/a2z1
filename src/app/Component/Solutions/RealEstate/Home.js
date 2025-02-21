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
    <> 
    <section className="py-5 bg2">
    <div className="container ">
      <div className="row align-items-center aos">
        {/* Left Content */}
        <div className="col-md-6 para-color" data-aos="fade-right">
          <h1 className="fw-bold mb-4">
            Boost Your Business with{" "}
            <span className="text-primary">WhatsApp API Solutions!</span>
          </h1>
          <p className="">
            Engage your customers directly, automate conversations, and
            streamline communications using our cutting-edge WhatsApp API.
            Reach your audience with ease and grow your business effectively!
          </p>
          <ul className="list-unstyled mt-4 text-muted">
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-check-circle-fill text-primary me-3"></i>
              <span>
                Send personalized messages to your customers.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-check-circle-fill text-primary me-3"></i>
              <span>
                Automate responses to common queries using chatbots.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-check-circle-fill text-primary me-3"></i>
              <span>
                Share media-rich content like images, videos, and catalogs.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-check-circle-fill text-primary me-3"></i>
              <span>
                Provide real-time updates for orders, bookings, and more.
              </span>
            </li>
          </ul>
        </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src="/image/Solutions/Estate.png"
              alt="Real Estate SMS Services" width="px" height={"px"}
              className="img-fluid rounded "
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home