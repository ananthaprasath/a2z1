"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { Checkbox } from "antd";
import FormComponent from "./FormComponent";
import Head from "next/head";

const TryForFree = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Initialize AOS for animations
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation runs only once
    });
  }, []);

  const onFinish = (values) => {
    console.log("Try For Free Form values:", values);
  };

  return (
    <>
      <Head>
        <title>Try A2ZSMS for Free - SMS, WhatsApp & Voice Calls</title>
        <meta
          name="description"
          content="Start your free trial with A2ZSMS and experience efficient SMS, WhatsApp, and voice call solutions for your business communication."
        />
        <meta
          name="keywords"
          content="A2ZSMS, free trial, bulk SMS, WhatsApp API, voice calls"
        />
        <meta name="author" content="A2ZSMS" />
        <meta
          property="og:title"
          content="Try A2ZSMS for Free - SMS, WhatsApp & Voice Calls"
        />
        <meta
          property="og:description"
          content="Start your free trial with A2ZSMS and experience efficient SMS, WhatsApp, and voice call solutions for your business communication."
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.a2zsms.in/try-for-free/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="A2ZSMS" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Try A2ZSMS for Free - SMS, WhatsApp & Voice Calls"
        />
        <meta
          name="twitter:description"
          content="Start your free trial with A2ZSMS and experience efficient SMS, WhatsApp, and voice call solutions for your business communication."
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#007bff" />
        <link rel="canonical" href="https://www.a2zsms.in/try-for-free/" />
      </Head>

      <div className="bg-light">
        <div className="container py-5 para-color">
          <div className="row aos">
            {/* Left Section */}
            <div className="col-md-6 d-grid" data-aos="fade-right">
              <div className="place-center">
                <h1 className="mb-4">Your Trusted Partner in Success</h1>
                <p>
                  Transform your business communication with innovative solutions
                  designed to engage your audience and drive results. Here's why we're trusted:
                </p>
                <ul className="list-unstyled">
                  {[
                    "Simplify customer engagement with our intuitive WhatsApp Business API.",
                    "Deliver rich, interactive messages with RCS for a superior customer experience.",
                    "Scale your campaigns with our robust and reliable Bulk SMS solutions.",
                    "Create impactful connections using crystal-clear Voice Call services.",
                    "Enhance security with quick, accurate, and secure OTP delivery systems.",
                    "Track success with detailed reporting and actionable insights for growth.",
                    "Personalize your outreach to improve customer satisfaction and retention.",
                    "Enjoy 24/7 expert support to ensure seamless communication operations.",
                  ].map((item, index) => (
                    <li key={index} className="mb-2 pt-2">
                      {/* Render Checkbox only after component mounts to avoid hydration issues */}
                      {isMounted && <Checkbox checked />}
                      <span className="ms-2 pt-3">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3">
                  <strong>Ready to elevate your business?</strong> Experience the
                  power of modern communication with no strings attached. Start now and see the difference!
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-md-6" data-aos="fade-left">
              <FormComponent
                title="Get Started for Free Today!"
                buttonText="Try Now for Free"
                onFinish={onFinish}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TryForFree;
