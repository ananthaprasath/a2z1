"use client"; // Important for Next.js app directory

import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Testimonials from "./Testimonials";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation runs only once
    });
  }, []);
  // const backgroundImage ={Banner}
  const openPositions = [
    {
      title: "Frontend Developer",
      location: "Remote",
      description:
        "We are looking for a talented Frontend Developer to join our team. You'll work with React.js and other modern libraries to create stunning web applications.",
    },
    {
      title: "Backend Developer",
      location: "Bangalore",
      description:
        "Join our backend team to build robust APIs and server-side solutions using Node.js and other cutting-edge technologies.",
    },
    {
      title: "Digital Marketing Specialist",
      location: "Remote",
      description:
        "Looking for a creative digital marketer to handle campaigns, SEO, and social media marketing.",
    },
    {
      title: "Product Designer",
      location: "bangalore",
      description:
        "We're hiring a product designer with experience in UX/UI design to create seamless and beautiful user experiences.",
    },
  ];

  return (
    <div>
    

      {/* Why Join Us Section */}
      <section className="py-5 ">
      <div className="container">
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Join Our{" "}
              <span className="text-primary">Dynamic Team</span>
            </h1>
            <p>
              Be a part of an organization that values creativity, collaboration, and innovation. At our company, we focus on fostering a positive work environment where every individual can thrive.
            </p>
            <ul className="list-unstyled mt-4 text-muted">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Flexible work environment with remote options available.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Professional development and career growth opportunities.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Comprehensive health and wellness benefits for all employees.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Work alongside experienced professionals in the industry.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Contribute to impactful projects that make a difference.</span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src="/image/Career.png"
              alt="Why Join Us" width="px" height={"px"}
              className="img-fluid rounded "
            />
          </div>
        </div>
      </div>
    </section>

    <Testimonials/>

      {/* Open Positions Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Open Positions</h2>
        <div className="row">
          {openPositions.map((position, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="p-4 border rounded shadow-sm bg-light">
                <h5 className="fw-bold">{position.title}</h5>
                <p className="text-muted">{position.location}</p>
                <p>{position.description}</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div
        className="text-white py-5"
        style={{
          backgroundColor: "#007bff",
        }}
      >
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Ready to Join Us?</h3>
          <p className="mb-4">
            Submit your resume today and start your journey with us!
          </p>
          <button className="btn btn-light btn-lg">Submit Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
