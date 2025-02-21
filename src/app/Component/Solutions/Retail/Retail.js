import React from 'react'
import Home from './Home'
import Service from './Service'
import Client from '../../Product/Whatsapp/Clients'
// import { Helmet } from 'react-helmet'
const Retail = () => {
  return (
    <div>
      {/* <Helmet>
  <title>A2ZSMS | WhatsApp Business for Retail & E-commerce</title>
  <meta
    name="description"
    content="Enhance your retail and e-commerce business with A2ZSMS's WhatsApp Business services. Engage customers with order updates, promotions, and personalized messages."
  />
  <meta
    name="keywords"
    content="WhatsApp Business, retail marketing, e-commerce communication, customer engagement, A2ZSMS"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | WhatsApp Business for Retail & E-commerce"
  />
  <meta
    property="og:description"
    content="Enhance your retail and e-commerce business with A2ZSMS's WhatsApp Business services. Engage customers with order updates, promotions, and personalized messages."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/retail-ecommerce/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | WhatsApp Business for Retail & E-commerce"
  />
  <meta
    name="twitter:description"
    content="Enhance your retail and e-commerce business with A2ZSMS's WhatsApp Business services. Engage customers with order updates, promotions, and personalized messages."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/retail-ecommerce/" />
</Helmet> */}

      <Home/>
      <Client/>
      <Service/>
    </div>
  )
}

export default Retail
