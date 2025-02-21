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
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Elevate <span className="text-primary">Media & Entertainment</span> with WhatsApp API!
            </h1>
            <p>
              Engage audiences, promote events, and deliver rich media content seamlessly using our WhatsApp API solutions. Redefine the way you connect with your viewers and followers!
            </p>
            <ul className="list-unstyled mt-4 text-muted">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Share breaking news, trending stories, and event updates in real-time.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Distribute trailers, music videos, and exclusive media content directly to your audience.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Promote shows and events with personalized messages and RSVP options.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Enhance audience engagement with polls, quizzes, and interactive campaigns.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src="/image/Solutions/Media.png"
              alt="Media & Entertainment Services"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
