"use client"; // Mark this file as a client component

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa"; // Importing social media icons
import CountUp from "react-countup"; // Import the CountUp library

const socialMediaData = [
  { id: 1, platform: "Instagram", icon: <FaInstagram color="#E4405F" />, count: 5000 },
  { id: 2, platform: "Facebook", icon: <FaFacebook color="#4267B2" />, count: 6000 },
  { id: 3, platform: "LinkedIn", icon: <FaLinkedin color="#0077B5" />, count: 8600 },
  { id: 4, platform: "Google", icon: <FaGoogle color="#DB4437" />, count: 5500 },
  { id: 5, platform: "YouTube", icon: <FaYoutube color="#FF0000" />, count: 10000 },
];

const SocialMedia = () => {
  return (
    <div className="container text-center py-5 aos">
      <h2 className="fw-bold mb-3">
        Let&apos;s Get <span style={{ color: "#FF8C00" }}>Social!</span>
      </h2>
      <p className="text-muted mb-4 para-color">Connect with us on Social Media</p>

      <div className="row justify-content-center" data-aos='zoom-in-up'>
        {socialMediaData.map((item) => (
          <div key={item.id} className="col-6 col-md-2 text-center mb-3">
            <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
              {item.icon}
            </div>
            <div>
              <CountUp
                end={item.count}
                duration={4} // Duration of the animation in seconds
                className="fw-bold"
                style={{ fontSize: "1.2rem" }}
              />
              <span className="fw-bold">+</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
