"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const FAQHome = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  if (!data) {
    return <p className="text-center py-5">Loading FAQs...</p>;
  }

  const { title, subtitle, faqs } = data;

  return (
    <div className="bg2">
      <div className="container py-5 aos">
        {/* Title Section */}
        <div className="text-center mb-4">
          <h3 className="fw-bold text-dark">{title}</h3>
          {subtitle && <p className="fw-light text-secondary">{subtitle}</p>}
        </div>

        {/* Accordion Section */}
        <div className="accordion aos" id="faqAccordion">
          {faqs && faqs.length > 0 ? (
            faqs.map((faq) => (
              <div className="accordion-item mb-1" data-aos="zoom-in-right" key={faq.id}>
                <h2 className="accordion-header" data-aos="zoom-in-up" id={`heading${faq.id}`}>
                  <button
                    className="accordion-button fw-bold text-dark bg-white border-0 py-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${faq.id}`}
                    aria-expanded={faq.id === 1 ? "true" : "false"}
                    aria-controls={`collapse${faq.id}`}
                  >
                   <i className={`me-2 ${faq.icon}`} style={{ color: "#007bff" }}></i>
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${faq.id}`}
                  className={`accordion-collapse collapse ${faq.id === 1 ? "show" : ""}`}
                  aria-labelledby={`heading${faq.id}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body para-color" style={{ color: "#333" }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No FAQs available.</p>
          )}
        </div>
      </div>
    </div>

  );
};

export default FAQHome;
