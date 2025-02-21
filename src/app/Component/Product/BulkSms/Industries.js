"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Industries = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const industryData = [
    { icon: "/image/icons/house.svg", alt: "Real Estate SMS", title: "Real Estate", path: "/real-estate/" },
    { icon: "/image/icons/travel-case.svg", alt: "Tour & Travels SMS", title: "Tour & Travels", path: "/tours-travel/" },
    { icon: "/image/icons/video-tutorials.svg", alt: "Education SMS", title: "Education", path: "/education/" },
    { icon: "/image/icons/taxi.svg", alt: "Transport SMS", title: "Transport", path: "/tours-travel/" },
    { icon: "/image/icons/event.svg", alt: "Event SMS", title: "Event", path: "/media-entertainment/" },
    { icon: "/image/icons/smartphone.svg", alt: "eCommerce SMS", title: "eCommerce", path: "/retail-ecommerce/" },
    { icon: "/image/icons/joystick.svg", alt: "Gaming SMS", title: "Game", path: "/gaming/" },
    { icon: "/image/icons/healthcare.svg", alt: "Healthcare SMS", title: "Healthcare", path: "/health-care/" },
    { icon: "/image/icons/money-growth.svg", alt: "Finance SMS", title: "Finance", path: "/government/" },
    { icon: "/image/icons/baker.svg", alt: "Restaurant SMS", title: "Restaurant", path: "/food-beverage/" },
    { icon: "/image/icons/mobile-app.svg", alt: "Government SMS", title: "Government", path: "/government/" },
    { icon: "/image/icons/groceries.svg", alt: "Grocery SMS", title: "Grocery", path: "/food-beverage/" },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mb-3 head1">Industries We Serve</h2>
            <p className="para-color1">
              Successfully delivered OTP, Billing, Offers, Alerts, and Wishes to target audiences through our Bulk SMS Service.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          {industryData.map((industry, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={index}>
              <Link href={industry.path} className="text-decoration-none">
                <div className="text-center shadow-sm p-4 industry-card d-flex">
                  <img src={industry.icon} alt={industry.alt} width="50px" height="50px" />
                  <h6 className="mb-0 place-center ms-3 text-dark">{industry.title}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
