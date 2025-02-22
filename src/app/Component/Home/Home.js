import React from "react";
import Head from "next/head"; // ✅ Use Next.js Head component
import Video from "./Video";
import Aboutus from "./Aboutus";
import Trustedbrand from "./Trustedbrand";
import Content from "./Content";
import SocialMedia from "../Product/Whatsapp/SocialMedia";
import Industries from "../Product/BulkSms/Industries";
import Achievements from "../Resources/Services/Achievements";
import FAQHome from "../Resources/Faq/FAQHome";
import { whatsappFaqData } from "../Resources/Faq/FaqData";
import Testimonials from "../Company/Carrer/Testimonials";

const Home = () => {
  return (
    <>

      {/* Home Page Components */}
      <Video />
      <Aboutus />
      <Trustedbrand />
      <Content />
      <SocialMedia />
      <Industries />
      <Achievements />
      <Testimonials />
      <FAQHome data={whatsappFaqData} />
    </>
  );
};

export default Home;
