"use client"; 

import React, { useState } from "react";

const SolutionFaq = ({ data }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="bg2">
      <div className="container py-5">
        {/* Title */}
        <h2 className="text-center fw-bold mb-4">{data?.title || "FAQs"}</h2>

        {/* Accordion Section */}
        <div className="accordion aos">
          {data?.faqs?.length > 0 ? (
            data.faqs.map((faq, index) => (
              <div key={faq.id || index} className="accordion-item border-0 shadow-sm mb-2 py-2" data-aos="zoom-in-up">
                {/* Question */}
                <h2 className="accordion-header" id={`heading-${faq.id || index}`}>
                  <button
                    className={`accordion-button ${activeId === faq.id ? "" : "collapsed"} fw-bold`}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    {faq.question}
                  </button>
                </h2>

                {/* Answer */}
                <div
                  id={`collapse-${faq.id || index}`}
                  className={`accordion-collapse collapse ${activeId === faq.id ? "show" : ""}`}
                >
                  <div className="accordion-body">
                    <p className="mb-0">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No FAQs available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolutionFaq;
