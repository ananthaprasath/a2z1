"use client";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Clients.css'
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1800,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 5 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 2 },
    },
  ],
};

const images = [
  "/image/motherhood.png",
  "/image/naidum.jpeg",
  "/image/nite.png",
  "/image/ping4sms-client1.webp",
  "/image/saishishirtours.png",
  "/image/Groavy.png",
];

const Client = () => (
  <div className="container py-5">
    <h2 className="text-center mb-4 fw-bold py-3">Our Trusted Clients</h2>
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <div key={index} className="px-4">
          <div className="d-flex justify-content-center align-items-center rounded">
            <img
              src={image}
              alt={`Client ${index + 1}`}
              className="img-fluid"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default Client;
