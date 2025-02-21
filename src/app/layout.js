"use client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Headerdrop from "./Component/Header/Headerdrop";
import Footer from "./Component/Header/Footer";
import ScrollToTop from "./Component/Scroll/ScrollToTop";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        console.log("Bootstrap JS loaded successfully.");
      })
      .catch((err) => console.error("Error loading Bootstrap JS:", err));
  }, []);

  return (
    <html lang="en">
      <body>
        <Headerdrop />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
