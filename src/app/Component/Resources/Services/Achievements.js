"use client"; // Required for Next.js App Router

import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

const achievements = [
  {
    icon: "/image/icons/1.png",
    value: 10,
    suffix: "+",
    label: "Year In Business",
    anime: "zoom-in-right",
  },
  {
    icon: "/image/icons/2.png",
    value: 50,
    suffix: "+",
    label: "Team Members",
    anime: "zoom-in",
  },
  {
    icon: "/image/icons/3.png",
    value: 13999,
    suffix: "+",
    label: "Happy Clients",
    anime: "zoom-in-left",
  },
  {
    icon: "/image/icons/4.png",
    value: 6000,
    suffix: "+",
    label: "Promotional Users",
    anime: "zoom-in-right",
  },
  {
    icon: "/image/icons/5.png",
    value: 7000,
    suffix: "+",
    label: "Transactional Users",
    anime: "zoom-in",
  },
  {
    icon: "/image/icons/6.png",
    value: 24,
    suffix: "/7",
    label: "Support Available",
    anime: "zoom-in-left",
  },
];

const Achievements = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Achievements</h2>
        </div>
        <div className="row g-4 align-items-center aos">
          {achievements.map((achievement, index) => (
            <div className="col-md-4" data-aos={achievement.anime} key={index}>
              <div className="d-flex align-items-center p-3 bg-light">
                {/* Icon */}
                <Image
                  src={achievement.icon}
                  alt={achievement.label}
                  width={50}
                  height={50}
                  className="me-3"
                />
                {/* Text */}
                <div>
                  <h3 className="fw-bold text-primary mb-0">
                    <CountUp
                      start={0}
                      end={achievement.value}
                      duration={5.5}
                      suffix={achievement.suffix}
                    />
                  </h3>
                  <p className="text-muted mb-0" style={{ fontSize: "1.1rem" }}>
                    {achievement.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
