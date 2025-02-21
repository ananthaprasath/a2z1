"use client";
import React, { useState } from "react";
import Image from "next/image";

// Service Data
const servicesData = [
  {
    id: 1,
    title: "Promotional SMS",
    description:
      "Enhance your business reach with our Promotional SMS services. Ideal for marketing campaigns, announcements, and special offers.",
    points: [
      "No Delivery on DND numbers",
      "6-character sender ID like 'INDSMS'",
      "Delivery between 9 am - 9 pm",
      "No validity for any SMS pack",
      "Character limit of 160 characters",
      "100% advance payment",
      "Free access to SMS platform",
    ],
    icon: "/image/feature-icon/icon-5.png",
    animation: "zoom-in-right",
  },
  {
    id: 2,
    title: "Transactional SMS",
    description:
      "Send important alerts and notifications with our Transactional SMS service. Perfect for OTPs and informational messages.",
    points: [
      "Delivery on DND numbers",
      "Instant delivery reports",
      "18% GST Extra",
      "6-character sender ID like 'INDSMS'",
      "Available 24x7",
      "No validity for any SMS pack",
      "100% advance payment",
    ],
    icon: "/image/feature-icon/icon-6.png",
    animation: "zoom-in-right",
  },
  {
    id: 3,
    title: "OTP SMS",
    description:
      "Secure your transactions with our OTP SMS service, ensuring timely delivery of one-time passwords for verification.",
    points: [
      "DND & Non-DND delivery",
      "24x7 availability",
      "High priority route",
      "Lifetime validity",
      "Custom sender ID",
      "Retry option",
    ],
    icon: "/image/feature-icon/icon-7.png",
    animation: "zoom-in-right",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <section className="py-5 mb-2 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-md-6">
          <div style={{ width: "100%", height: "650px", position: "relative" }}>
  <Image
    src="/image/feature-icon/hero-girl.png"
    alt="Bulk SMS Services"
    fill
    style={{ borderRadius: "10px", objectFit: "contain" }}
  />
</div>


          </div>

          {/* Right Content Section */}
          <div className="col-md-6 col-12">
            <h5 className="text-primary mb-2">Bulk SMS</h5>
            <h2 className="fw-bold mb-4">Our Bulk SMS Services</h2>

            {/* Tabs with Custom Icons */}
            <div className="d-flex mb-3">
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  className={`btn btn-sm mx-2 ${
                    selectedService.id === service.id
                      ? "btn-primary text-white"
                      : "btn-outline-primary"
                  }`}
                  style={{
                    borderRadius: "20px",
                    padding: "10px 20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => setSelectedService(service)}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={24}
                    height={24}
                    style={{ marginRight: "10px" }}
                  />
                  {service.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <div key={selectedService.id}>
              <h3 className="fw-bold">{selectedService.title}</h3>
              <p className="text-muted">{selectedService.description}</p>
              <ul>
                {selectedService.points.map((point, index) => (
                  <li key={index} className="text-muted">
                    <i
                      className="fas fa-check me-2"
                      style={{ color: "#007bff" }}
                    ></i>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
