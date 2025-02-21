"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const reviewImages = [
    { src: "/image/brand/airtable.png", alt: "Airtable" },
    { src: "/image/brand/airwallex.png", alt: "Airwallex" },
    { src: "/image/brand/attentive.png", alt: "Attentive" },
    { src: "/image/brand/capterra.png", alt: "Capterra" },
    { src: "/image/brand/chatbot.png", alt: "Chatbot" },
    { src: "/image/brand/evernote.png", alt: "Evernote" },
    { src: "/image/brand/google.png", alt: "Google" },
    { src: "/image/brand/hellosign.png", alt: "Hellosign" },
    { src: "/image/brand/hostadvice.png", alt: "Hostadvice" },
    { src: "/image/brand/indieplex.png", alt: "Indieplex" },
    { src: "/image/brand/nextech.png", alt: "Nextech" },
    { src: "/image/brand/techbox.png", alt: "Techbox" },
    { src: "/image/brand/treehouse.png", alt: "Treehouse" },
    { src: "/image/brand/trustipilot.png", alt: "Trustpilot" },
    { src: "/image/brand/wattse.png", alt: "Wattse" },
    { src: "/image/brand/wpbeginner.png", alt: "WP Beginner" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-5 aos">
      <div className="container" data-aos="zoom-in">
        <h2 className="text-center mb-5 head1">Trusted By These Brands</h2>
        <Slider {...sliderSettings}>
          {reviewImages.map((image, index) => (
            <div key={index} className="px-2">
              <div
                className="text-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={50}
                  className="img-fluid"
                  style={{ maxHeight: "50px", objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
