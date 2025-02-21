import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faShieldAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons"; 

const smsServicesData = {
  promotional: {
    title: "Promotional SMS Features",
    features: [
      {
        id: 1,
        title: "Wide Audience Reach",
        description:
          "Easily broadcast your promotional messages to a massive audience in seconds. Perfect for spreading awareness about new products, announcing flash sales, or exclusive discounts, ensuring your brand captures maximum visibility in a competitive market. Effective for e-commerce, retail, and startups aiming for rapid brand growth.",
        icon: faEnvelopeOpenText,
        anime:'zoom-in-right',
      },
      {
        id: 2,
        title: "Boost Engagement",
        description:
          "Drive customer engagement through personalized promotional content. From limited-time offers to seasonal campaigns, create messages that resonate with your audience. Tailored messaging helps build stronger connections, encouraging higher response rates and improved customer loyalty.",
        icon: faPaperPlane,
        anime:'zoom-in-left',

      },
      {
        id: 3,
        title: "Cost-Effective Marketing",
        description:
          "Leverage affordable bulk SMS solutions for your marketing campaigns. With minimal costs compared to traditional advertising channels, achieve higher ROI while effectively targeting your desired audience. Suitable for businesses looking to maximize their budget while reaching potential customers.",
        icon: faShieldAlt,
        anime:'zoom-in-right',


      },
    ],
  },
  transactional: {
    title: "Transactional SMS Features",
    features: [
      {
        id: 1,
        title: "Real-Time Updates",
        description:
          "Provide your customers with real-time updates on their orders, payments, or bookings. These instant notifications enhance transparency and reliability, giving customers confidence in your service. Ideal for businesses in e-commerce, finance, healthcare, and logistics.",
        icon: faPaperPlane,
        anime:'zoom-in-left',

      },
      {
        id: 2,
        title: "DND Compliant Messaging",
        description:
          "Reach even customers who are on DND lists with critical updates. Our platform adheres to compliance standards, ensuring transactional messages like OTPs, payment alerts, and appointment confirmations are delivered securely without interruptions.",
        icon: faShieldAlt,
        anime:'zoom-in-right',

      },
      {
        id: 3,
        title: "Improved Customer Trust",
        description:
          "Build a trustworthy relationship with your customers by delivering essential information promptly. Notifications such as password resets, account updates, and security alerts provide reassurance and reliability, fostering long-term loyalty.",
        icon: faEnvelopeOpenText,
        anime:'zoom-in-left',

      },
    ],
  },
  otp: {
    title: "OTP Service Features",
    features: [
      {
        id: 1,
        title: "Instant Delivery",
        description:
          "Ensure immediate delivery of OTPs for secure logins, payment processing, and user authentication. Designed to handle high volumes of requests during peak times without delays, ensuring seamless customer experiences across platforms.",
        icon: faShieldAlt,
        anime:'zoom-in-right',
      },
      {
        id: 2,
        title: "Enhanced Security Measures",
        description:
          "Safeguard your platform with OTP-based two-factor authentication. Protect sensitive data with encrypted messages, reducing the risk of unauthorized access and cyber threats. This service is essential for industries like banking, healthcare, and e-commerce.",
        icon: faPaperPlane,
        anime:'zoom-in-left',
      },
      {
        id: 3,
        title: "Global Coverage and Scalability",
        description:
          "Deliver OTPs to users worldwide with our robust infrastructure. Whether you’re expanding your business internationally or handling large-scale traffic, our platform ensures fast and reliable communication, keeping your systems scalable and efficient.",
        icon: faEnvelopeOpenText,
        anime:'zoom-in-right',
      },
    ],
  },
};

const Features = () => {
  return (
    <div className="container py-5 aos">
      {Object.entries(smsServicesData).map(([key, service]) => (
        <div key={key} className="mb-4">
          {/* Title */}
          <h3 className="fw-bold mb-4" style={{ color: "#007bff" }}>
            {service.title}
          </h3>
          {/* Features */}
          <div className="row aos">
            {service.features.map((feature) => (
              <div
                key={feature.id}
                className="col-md-12 mb-3 bg2"
                data-aos={feature.anime}
                style={{
                  borderRadius: "10px",
                  padding: "20px",
                  border: "1px solid #d8e9ff",
                }}
              >
                <div className="d-flex align-items-start">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="me-3"
                    style={{
                      fontSize: "2rem",
                      color: "#007bff", 
                    }}
                  />
                  <div>
                    <h5 className="fw-bold" style={{ color: "#203239" }}>
                      {feature.title}
                    </h5>
                    <p className="text-muted para-color">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
