'use client';  // This marks the component as a Client Component

import React from "react";

// Image data without imports
const icons = [
  { src: "/image/icon/stack-icon1.png", alt: "PHP Support" },
  { src: "/image/icon/stack-icon2.png", alt: ".NET Support" },
  { src: "/image/icon/stack-icon3.png", alt: "Ruby on Rails Support" },
  { src: "/image/icon/stack-icon4.png", alt: "Python Support" },
  { src: "/image/icon/stack-icon5.png", alt: "Node.js Support" },
  { src: "/image/icon/stack-icon6.png", alt: "Drupal Support" },
  { src: "/image/icon/stack-icon7.png", alt: "WordPress Support" },
  { src: "/image/icon/stack-icon8.png", alt: "Magento Support" },
];

const Apisupport = () => {
  return (
    <div className="container py-5 text-center aos">
      <h2 className="fw-bold mb-4" style={{ color: "#203239", fontWeight: '900' }}>
  Our Whatsapp & API Will Support
</h2>
      <div className="row justify-content-center" data-aos="zoom-in-up">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="mb-4 col-6 col-md-3 col-lg-1 mx-auto"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              width={50}
              height={50}
              style={{ transition: "transform 0.6s ease" }}
              className="hover-effect"
            />
          </div>
        ))}
      </div>

      {/* CSS for Hover Effect */}
      <style jsx>{`
        .hover-effect:hover {
          border-radius: 50%;
          transform: scale(1.1);
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
          padding: 2px;
        }
      `}</style>
    </div>
  );
};

export default Apisupport;
