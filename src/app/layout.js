"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css"; 
import Headerdrop from "./Component/Header/Headerdrop";
import Footer from "./Component/Header/Footer";
import ScrollToTop from "./Component/Scroll/ScrollToTop";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Load Bootstrap JS only on the client
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap JS loaded successfully."))
      .catch((err) => console.error("Error loading Bootstrap JS:", err));

    // Initialize AOS only on the client
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
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
