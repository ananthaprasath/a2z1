"use client"; // Required for Next.js App Router

import React from "react";
import Image from "next/image"; // Use Next.js Image component for optimization

const OurService = () => {
  const services = [
    {
      icon: "/image/feature-icon/icon-1.png",
      title: "WhatsApp SMS",
      anime: "zoom-in-right",
      description:
        "Engage your audience on WhatsApp with instant, interactive messages. Reach customers where they’re active, with high open and engagement rates.",
    },
    {
      icon: "/image/feature-icon/icon-2.png",
      title: "RCS SMS",
      anime: "zoom-in",
      description:
        "Deliver rich, multimedia messages with RCS SMS, bringing a more engaging experience to your users. Enhance communication with images, buttons, and more.",
    },
    {
      icon: "/image/feature-icon/icon-3.png",
      title: "Promotional SMS",
      anime: "zoom-in-left",
      description:
        "Promote your business effectively with targeted SMS campaigns. Reach thousands instantly and boost engagement with special offers and updates.",
    },
    {
      icon: "/image/feature-icon/icon-4.png",
      title: "Transactional SMS",
      anime: "zoom-in-right",
      description:
        "Send important alerts, updates, and confirmations to customers in real-time. Ensure critical information reaches your users instantly and securely.",
    },
    {
      icon: "/image/feature-icon/icon-8.png",
      title: "Bulk Voice Call",
      anime: "zoom-in",
      description:
        "Communicate with your audience using pre-recorded voice messages. Perfect for alerts, reminders, and personalized updates on a large scale.",
    },
    {
      icon: "/image/feature-icon/icon-7.png",
      title: "OTP SMS",
      anime: "zoom-in-left",
      description:
        "Secure your transactions with One-Time Password (OTP) SMS. Provide an extra layer of protection with fast, reliable, and secure OTP delivery.",
    },
  ];

  return (
    <section className="py-5 bg2">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-primary text-uppercase fw-bold small">
            Best Services
          </p>
          <h2 className="fw-bold">Powerful Bulk SMS Services</h2>
        </div>
        <div className="row g-4 aos">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" data-aos={service.anime} key={index}>
              <div
                className="card border-0 shadow-sm h-100 service-card"
                style={{
                  transition: "all 0.3s ease",
                }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={50}
                      height={50}
                      className="me-3"
                    />
                    <div>
                      <h5 className="fw-bold mb-2">{service.title}</h5>
                      <p className="text-muted mb-0">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for hover effect */}
      <style>
        {`
          .service-card:hover {
            cursor: pointer;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
            transform: translateY(-5px);
          }
        `}
      </style>
    </section>
  );
};

export default OurService;
