"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";


const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO - Real Estate Agency",
    feedback:
      "The WhatsApp Business API and RCS messaging have revolutionized how we manage our real estate clients. Instant property notifications and seamless communication have significantly streamlined our property transactions and client interactions.",
  },
  {
    name: "Priya Nair",
    role: "Manager - Food & Beverage",
    feedback:
      "Using Bulk SMS and WhatsApp Business API has boosted customer engagement by over 40%. Sharing personalized offers, taking reservations, and delivering updates in real-time has helped us retain our loyal customers effectively.",
  },
  {
    name: "Anil Kapoor",
    role: "CEO - Healthcare Solutions",
    feedback:
      "The OTP services provided by this platform are exceptional. They are fast, secure, and reliable, improving our healthcare operations and ensuring the safety of patient data during appointments and payments.",
  },
  {
    name: "Meera Verma",
    role: "Director - Education Sector",
    feedback:
      "Voice call solutions and RCS messaging have been game-changers for our educational programs. Sending reminders for classes, event notifications, and parent-teacher meeting updates has never been easier or more efficient.",
  },
  {
    name: "Karan Singh",
    role: "Operations Head - Retail & E-commerce",
    feedback:
      "Integrating RCS messaging has completely transformed how we interact with our customers. Media-rich promotions, instant delivery updates, and real-time customer support have resulted in better retention and increased sales.",
  },
  {
    name: "Sneha Patel",
    role: "Media Strategist - Media Agency",
    feedback:
      "RCS messaging has elevated our ability to deliver creative content to our clients. The ability to send media-rich campaigns and interactive updates has streamlined our communication and boosted client satisfaction.",
  },
  {
    name: "Ravi Kumar",
    role: "Government Relations Officer",
    feedback:
      "WhatsApp Business API has been invaluable for government communication. Sharing public notifications, alerts, and updates directly to citizens has increased efficiency and transparency in our operations.",
  },
  {
    name: "Pooja Reddy",
    role: "Education Coordinator",
    feedback:
      "With WhatsApp Business API, we’ve enhanced student and parent communication. Sending out reminders for school events, assignments, and updates has become incredibly streamlined and impactful.",
  },
];


const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Group testimonials into sets of 4 (2 rows × 2 columns per slide)
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 4) {
    groupedTestimonials.push(testimonials.slice(i, i + 4));
  }

  return (
    <div className="py-5 bg-light">
      <div className="container py-3">
        <h2 className="text-center fw-bold mb-4">What Our Clients Say About Us</h2>
        <Slider {...settings}>
          {groupedTestimonials.map((group, index) => (
            <div key={index}>
              <div className="row gx-4 gy-4">
                {group.map((testimonial, idx) => (
                  <div key={idx} className="col-md-6">
                    <div
                      className="testimonial-card position-relative p-4 shadow-sm rounded bg-white"
                      data-aos="zoom-in"
                    >
                      <div className="quote-icon position-absolute text-primary">
                        <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
                      </div>
                      <div className="mb-3">
                        <h6 className="fw-bold">{testimonial.name}</h6>
                        <p className="text-muted mb-0">{testimonial.role}</p>
                      </div>
                      <p className="text-muted mb-0 fst-italic">
                        "{testimonial.feedback}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
