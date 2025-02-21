"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS animation styles

const faqData = {
  title: "Whatsapp - Frequently Asked Questions",
//   subtitle: "Everything you need to know about scaling your business with WhatsApp API",
  faqs: [
    {
      id: 1,
      question: "What is Cloud WhatsApp API?",
      answer: "Cloud WhatsApp API is a cloud-hosted solution specifically designed to help businesses manage WhatsApp messaging efficiently. By leveraging the power of the cloud, it eliminates the need for on-premise servers, saving businesses time and resources. This API simplifies the integration of WhatsApp into your customer communication workflows, offering a reliable and scalable solution suitable for businesses of all sizes.",
      icon: "bi-cloud"
    },
    {
      id: 2,
      question: "How do I get started with Cloud WhatsApp API?",
      answer: "Getting started with Cloud WhatsApp API is quick and straightforward. First, you need to sign up using your Facebook Business Manager account. After registration, connect your WhatsApp Business number to the API platform. Once connected, you can start sending and receiving messages instantly. The setup process is designed to minimize technical complexities, ensuring a seamless integration into your business operations.",
      icon: "bi-gear"
    },
    {
      id: 3,
      question: "What are the benefits of using Cloud WhatsApp API?",
      answer: "Cloud WhatsApp API offers numerous benefits to businesses. It is highly scalable, allowing you to handle a large volume of messages without any issues. Additionally, it provides real-time analytics to monitor message performance and customer engagement effectively. The API supports integration with CRM systems and other tools, ensuring streamlined workflows. Most importantly, it offers reliable communication without the need for ongoing server maintenance.",
      icon: "bi-bar-chart-line"
    },
    {
      id: 4,
      question: "Is Cloud WhatsApp API secure?",
      answer: "Yes, security is a top priority for Cloud WhatsApp API. It uses end-to-end encryption to ensure that all messages remain private and cannot be accessed by unauthorized parties. This means your customer data is always protected. Additionally, the API is hosted on Facebook’s robust and secure infrastructure, which complies with global privacy standards, giving you and your customers peace of mind.",
      icon: "bi-shield-lock"
    },
    {
      id: 5,
      question: "Can I use Cloud WhatsApp API for customer support?",
      answer: "Absolutely! Cloud WhatsApp API is an excellent tool for customer support. It enables you to automate responses to common questions, route conversations to the right agents, and offer personalized support when needed. By leveraging these features, you can significantly improve response times and ensure a better customer experience, even during peak hours or outside of business hours.",
      icon: "bi-chat-dots"
    },
    {
      id: 6,
      question: "What kind of businesses can benefit from Cloud WhatsApp API?",
      answer: "Businesses across various industries and sizes can benefit from Cloud WhatsApp API. Small businesses can use it for cost-effective and efficient customer communication, while larger enterprises can leverage it to scale operations seamlessly. Industries like e-commerce, healthcare, education, and travel can all use this API to improve customer engagement and streamline communication workflows.",
      icon: "bi-briefcase"
    },
    {
      id: 7,
      question: "How does Cloud WhatsApp API handle high message volumes?",
      answer: "Cloud WhatsApp API is built with scalability in mind. Its cloud-based architecture ensures that you can handle large volumes of messages without any performance issues. The system automatically adjusts to meet the demands of your business, even during peak periods, ensuring uninterrupted service and a smooth customer experience.",
      icon: "bi-speedometer2"
    },
    {
      id: 8,
      question: "What is the cost of using Cloud WhatsApp API?",
      answer: "The cost of using Cloud WhatsApp API depends on the pricing model chosen, which typically includes charges based on the number of messages sent or received. Facebook offers transparent and flexible pricing plans, including pay-as-you-go options. This ensures that businesses only pay for what they use, making it an affordable solution for businesses of all sizes.",
      icon: "bi-currency-dollar"
    },
    {
      id: 9,
      question: "Can I integrate Cloud WhatsApp API with my existing systems?",
      answer: "Yes, Cloud WhatsApp API is designed for seamless integration with various systems like CRMs, ERPs, and marketing automation tools. This capability allows businesses to sync customer data across platforms, streamline workflows, and improve operational efficiency. Many third-party solutions also offer pre-built integrations to make the process even more convenient.",
      icon: "bi-link-45deg"
    },
    {
      id: 10,
      question: "How can Cloud WhatsApp API improve marketing campaigns?",
      answer: "Cloud WhatsApp API is a powerful tool for enhancing your marketing efforts. It enables businesses to send personalized messages, promotions, and updates directly to customers on WhatsApp. With its high open rates and interactive features like quick replies and buttons, you can achieve better engagement. These capabilities make the API ideal for running targeted, effective, and measurable marketing campaigns.",
      icon: "bi-megaphone"
    },
    {
      id: 11,
      question: "Can I automate conversations with Cloud WhatsApp API?",
      answer: "Yes, automation is one of the key features of Cloud WhatsApp API. Using chatbots or predefined message templates, you can automate responses to common queries, reducing the need for manual intervention. This not only saves time but also ensures a consistent and high-quality customer experience, even outside of regular business hours.",
      icon: "bi-robot"
    },
    {
      id: 12,
      question: "What kind of analytics does Cloud WhatsApp API provide?",
      answer: "Cloud WhatsApp API offers detailed analytics to help you track the performance of your messaging activities. You can monitor key metrics such as delivery rates, read receipts, and customer engagement levels. Additionally, the API provides insights into the effectiveness of automated messages and campaigns, enabling you to refine your strategies and maximize return on investment (ROI).",
      icon: "bi-graph-up"
    }
  ]
};

const Faq = () => {
  const { title, subtitle, faqs } = faqData;

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  return (
    <div className="bg-light">
      <div className="container py-5">
        {/* Title Section */}
        <div className="text-center mb-4">
          <h3 className="fw-bold text-dark">{title}</h3>
          <p className="fw-light text-secondary">{subtitle}</p>
        </div>

        {/* Accordion Section */}
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq) => (
            <div
              className="accordion-item mb-3"
              data-aos="zoom-in-right"
              key={faq.id}
            >
              <h2 className="accordion-header" id={`heading${faq.id}`}>
              <button
  className="accordion-button fw-bold bg-white text-dark"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target={`#collapse${faq.id}`}
  aria-expanded={faq.id === 1 ? "true" : "false"}
  aria-controls={`collapse${faq.id}`}
>
  <i className={`me-2 ${faq.icon} text-primary`}></i>
  <span className="text-dark">{faq.question}</span>
</button>

              </h2>
              <div
                id={`collapse${faq.id}`}
                className={`accordion-collapse collapse ${
                  faq.id === 1 ? "show" : ""
                }`}
                aria-labelledby={`heading${faq.id}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
