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
      <div className="container ">
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Transform Healthcare with{" "}
              <span className="text-primary">Smart Communication!</span>
            </h1>
            <p className="">
              Deliver seamless patient care, send real-time updates, and enhance 
              engagement with our innovative WhatsApp and RCS solutions. Empower 
              your healthcare services with efficient and reliable communication today!
            </p>
            <ul className="list-unstyled mt-4 text-muted">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Send appointment reminders, test reports, and health updates instantly.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Enable 24/7 patient support with AI-powered chatbots for inquiries and FAQs.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Share personalized health tips, prescriptions, and wellness programs.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Notify patients about vaccination schedules and follow-up appointments.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src="/image/Solutions/Care.png"
              alt="Healthcare Services" width="px" height={"px"} 
              className="img-fluid rounded "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
