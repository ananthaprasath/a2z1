"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import FormComponent from "./FormComponent";
import Timeline from "./TimeLine";
import "./requestdemo.css";
const RequestDemo = () => {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    setMetadata(
      <>
        <title>Request a Demo - A2ZSMS SMS, WhatsApp & Voice Solutions</title>
        <meta
          name="description"
          content="Schedule a demo with A2ZSMS and discover how our SMS, WhatsApp, and voice call solutions can transform your business communication."
        />
        <meta name="keywords" content="A2ZSMS, request demo, bulk SMS, WhatsApp API, voice calls" />
        <meta name="author" content="A2ZSMS" />
        <link rel="canonical" href="https://www.a2zsms.in/request-demo/" />
      </>
    );
  }, []);

  return (
    <>
      <Head>{metadata}</Head>
      <Timeline />
      <div className="container py-5 mx-auto rqdemo">
        <FormComponent title="Request Your Demo" buttonText="Request Demo" onFinish={() => {}} />
      </div>
    </>
  );
};

export default RequestDemo;
