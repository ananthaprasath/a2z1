import React from "react";

// JSON Data for FAQ
const faqData = {
  title: "Web Design & Development - Frequently Asked Questions",
  faqs: [
    {
      id: 1,
      question: "What types of websites do you develop?",
      answer: "We develop responsive and user-friendly websites, including landing pages, eCommerce sites, blogs, and enterprise platforms.",
      icon: "bi-cloud"
    },
    {
      id: 2,
      question: "What technologies do you use for development?",
      answer: "We specialize in HTML, CSS, React, Next.js, WordPress, and other modern development technologies.",
      icon: "bi-gear"
    },
    {
      id: 3,
      question: "Do you offer custom design services?",
      answer: "Yes, we provide fully customized web design solutions tailored to your brand and business needs.",
      icon: "bi-bar-chart-line"
    },
    {
      id: 4,
      question: "Can you improve an existing website?",
      answer: "Absolutely. We offer website redesign and optimization services to enhance performance, design, and user experience.",
      icon: "bi-shield-lock"
    },
    {
      id: 5,
      question: "How can I request a quote for a project?",
      answer: "You can contact us via our website or email us directly to discuss your requirements and get a custom quote.",
      icon: "bi-chat-dots"
    },
  ]
};
const Faq = () => {
  const { title, subtitle, faqs } = faqData;

  return (
   <div className="bg2">
     <div className="container py-5 aos">
       {/* Title and Subtitle Section */}
       <div className="text-center mb-4">
         <h3 className="fw-bold" style={{ color: "#203239" }}>
           {title}
         </h3>
         <p className="fw-light" style={{ color: "#203239" }}>
           {subtitle}
         </p>
       </div>
    
       {/* FAQ Section */}
       <div className="accordion aos" id="faqAccordion" >
         {faqs.map((faq) => (
           <div className="accordion-item mb-1"data-aos='zoom-in-right'  key={faq.id}>
             <h2 className="accordion-header " data-aos='zoom-in-up'  id={`heading${faq.id}`}>
               <button
                 className="accordion-button fw-bold border-0 bg-white py-4"
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
               <div className="accordion-body para-color" style={{ color: "#333" }}
                >
                 {faq.answer}
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
  );
};

export default Faq;
