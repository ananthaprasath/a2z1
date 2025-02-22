"use client"; // Important for Next.js app directory

import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";

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
        <div className="row align-items-center aos para-color">
          {/* Left Content */}
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Revolutionize Communication with{" "}
              <span className="text-primary">Voice Call Solutions</span>
            </h1>
            <p className="text-muted">
              Enhance your communication strategy with automated and interactive 
              voice call solutions tailored for notifications, alerts, and personalized engagement.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Deliver real-time notifications through automated voice calls.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Send alerts for emergencies, reminders, or announcements.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Enable interactive voice response (IVR) systems for self-service support.</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Reach large audiences instantly with pre-recorded bulk voice calls.</span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <Image
              src="/image/product/VoiceCall.png"
              alt="Voice Call Solutions"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
