import React from 'react'
import Video from './Video'
import Aboutus from './Aboutus'
import Trustedbrand from './Trustedbrand'
import Content from './Content'
import SocialMedia from '../Product/Whatsapp/SocialMedia'
import Industries from '../Product/BulkSms/Industries'
import Achievements from '../Resources/Services/Achievements'
import FAQHome from '../Resources/Faq/FAQHome'
import { whatsappFaqData } from '../Resources/Faq/FaqData'
import Testimonials from '../Company/Carrer/Testimonials'
import Head from "next/head";

const Home = () => {
  return (
    <>
  <Head>
  <title>A2ZSMS | Bulk SMS & WhatsApp API Solutions in Bangalore</title>
  <meta
    name="description"
    content="Get reliable Bulk SMS and WhatsApp API solutions in Bangalore with A2ZSMS. Enhance business communication with efficient, targeted, and scalable messaging."
  />
  <meta
    name="keywords"
    content="Bulk SMS service, WhatsApp messaging API, business communication solutions, SMS marketing, WhatsApp API solutions in Bangalore"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="Bulk SMS & WhatsApp API Solutions in Bangalore"
  />
  <meta
    property="og:description"
    content="Get reliable Bulk SMS and WhatsApp API solutions in Bangalore with A2ZSMS. Enhance business communication with efficient, targeted, and scalable messaging."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | Bulk SMS & WhatsApp API Solutions in Bangalore"
  />
  <meta
    name="twitter:description"
    content="Get reliable Bulk SMS and WhatsApp API solutions in Bangalore with A2ZSMS. Enhance business communication with efficient, targeted, and scalable messaging."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in" />
</Head>

      <Video/>
      <Aboutus/>
      <Trustedbrand/>
      <Content/>
      <SocialMedia/>
      <Industries/>
      <Achievements/>
      <Testimonials/>
      <FAQHome data={whatsappFaqData}/>
    </>
  )
}

export default Home