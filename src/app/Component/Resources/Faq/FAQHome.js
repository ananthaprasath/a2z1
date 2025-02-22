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
      <div className="container py-5">
        {/* Title Section */}
        <div className="text-center mb-4">
          <h3 className="fw-bold text-dark">{title}</h3>
          {subtitle && <p className="fw-light text-secondary">{subtitle}</p>}
        </div>

        {/* Accordion Section */}
        <div className="accordion" id="faqAccordion">
          {faqs && faqs.length > 0 ? (
            faqs.map((faq) => (
              <div className="accordion-item" data-aos="zoom-in" key={faq.id}>
                <h2 className="accordion-header" id={`heading${faq.id}`}>
                  <button
                    className="accordion-button fw-bold text-dark bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${faq.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse${faq.id}`}
                  >
                    <i className={`me-2 ${faq.icon} text-primary`}></i>
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${faq.id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${faq.id}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
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
