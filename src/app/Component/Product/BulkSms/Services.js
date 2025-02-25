"use client";
import React, { useState } from "react";
import Image from "next/image";

// Service Data
const servicesData = [
  {
    id: 1,
    title: "Promotional SMS",
    description:
      "To boost your business, promotional SMS is a must for your business. You can bring drastic changes to your existing business. If you are planning to establish new trade or business then too promotional SMS service can help you establish well in this field. With so many companies in the market, running a business is not an easy job, but with us, you can become the game changer of your business.",
    points: [
      "No Delivery on DND numbers",
      "6 Alphabet sender id like 'INDSMS'",
      "Deliver between 9 am - 9 pm",
      "No validity for any SMS pack",
      "The character limit 160 characters",
      "100% advance payment",
      "Access to SMS platform is free forever",
    ],
    icon: "/image/feature-icon/icon-5.png",
    animation: "zoom-in-right",
  },
  {
    id: 2,
    title: "Transactional SMS",
    description:
      "Transactional route can only be used for sending transactional SMS such as OTPs and alerts to your registered users. Messages can be sent 24x7 from your own 6-character Sender ID(s). To configure a transactional route, create your account today. No setup costs involved!.",
    points: [
      "Delivery on DND numbers also",
      "Instant delivery report",
      "18% GST Extra.",
      "6 Alphabet sender id like 'INDSMS'",
      "Can be sent 24 x 7",
      "No validity for any SMS pack",
      "100% advance payment.",
    ],
    icon: "/image/feature-icon/icon-6.png",
    animation: "zoom-in-right",
  },
  {
    id: 3,
    title: "OTP SMS",
    description:
      "OTP SMS services are used in business where there are various OTP SMS for new user registration, forget password, change password, reset password, etc. It contains a mobile verification code which comes through OTP SMS on a particular mobile number. Thus we can say that bulk SMS for OTP is very useful for all account-related transactions. OTP is the most secure platform for online transactions which provides two-factor authentication and which help to makes our online activities safe.",
    points: [
      "DND & Non-DND",
      "24x7 Timing",
      "High Priority Route",
      "Lifetime Validity",
      "Sender ID",
      "Retry option",
    ],
    icon: "/image/feature-icon/icon-7.png",
    animation: "zoom-in-right",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <section
      className="py-5 mb-2 bg2"
      style={{
        // backgroundColor: "#F3F7FB",
      }}
    >
      <div className="container">
        <div className="row aos">
          {/* Left Image Section */}
          <div className="col-md-6" data-aos="zoom-in-right">
          <Image
  src="/image/feature-icon/hero-girl.png"
  alt="Bulk SMS Services"
  width={450}
  height={640}
  style={{ borderRadius: "10px" }}
/>
          </div>

          {/* Right Content Section */}
          <div className="col-md-6 col-12"  data-aos="zoom-in-left">
            <h5 className="text-primary mb-2">Bulk SMS</h5>
            <h2 className="fw-bold mb-4">Our Bulk SMS Services</h2>
            {/* Tabs with Custom Icons */}
            <div className="d-flex mb-3">
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  className={`btn btn-sm mx-2  ${
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
                  <img
                    src={service.icon}
                    alt={service.title} width="24px" height={"24px"}
                    style={{
                     
                      marginRight: "10px",
                    }}
                  />
                  {service.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <div
              key={selectedService.id}
              data-aos={selectedService.animation} // Dynamic animation
            >
              <h3 className="fw-bold">{selectedService.title}</h3>
              <p className="text-muted">{selectedService.description}</p>
              <ul>
                {selectedService.points.map((point, index) => (
                  <li
                    key={index}
                    className="text-muted para-color2"
                  >
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
