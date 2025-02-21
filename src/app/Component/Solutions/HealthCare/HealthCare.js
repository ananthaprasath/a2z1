import React from 'react'
import Home from './Home'
import Service from './Service'
import Client from '../../Product/Whatsapp/Clients'
// import { Helmet } from 'react-helmet'
const HealthCare = () => {
  return (
    <div>
      {/* <Helmet>
  <title>A2ZSMS | WhatsApp Business for Healthcare</title>
  <meta
    name="description"
    content="Enhance patient engagement with A2ZSMS's WhatsApp Business solutions. Streamline healthcare communication with real-time updates and personalized messaging."
  />
  <meta
    name="keywords"
    content="WhatsApp Business, healthcare communication, patient engagement, real-time updates, A2ZSMS"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | WhatsApp Business for Healthcare"
  />
  <meta
    property="og:description"
    content="Enhance patient engagement with A2ZSMS's WhatsApp Business solutions. Streamline healthcare communication with real-time updates and personalized messaging."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/health-care/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | WhatsApp Business for Healthcare"
  />
  <meta
    name="twitter:description"
    content="Enhance patient engagement with A2ZSMS's WhatsApp Business solutions. Streamline healthcare communication with real-time updates and personalized messaging."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/health-care/" />
</Helmet> */}

      <Home/>
      <Client/>
      <Service/>
    </div>
  )
}

export default HealthCare
