import React from 'react'
import Home from './Home'
import Service from './Service'
import Client from '../../Product/Whatsapp/Clients'
// import { Helmet } from 'react-helmet'
const Food = () => {
  return (
    <div>
      {/* <Helmet>
  <title>A2ZSMS | WhatsApp Business for Food & Beverage</title>
  <meta
    name="description"
    content="Enhance your food and beverage business with A2ZSMS's WhatsApp Business services. Engage customers with menu updates, promotions, and order notifications."
  />
  <meta
    name="keywords"
    content="WhatsApp Business, food and beverage marketing, customer engagement, menu updates, A2ZSMS"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | WhatsApp Business for Food & Beverage"
  />
  <meta
    property="og:description"
    content="Enhance your food and beverage business with A2ZSMS's WhatsApp Business services. Engage customers with menu updates, promotions, and order notifications."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/food-beverage/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | WhatsApp Business for Food & Beverage"
  />
  <meta
    name="twitter:description"
    content="Enhance your food and beverage business with A2ZSMS's WhatsApp Business services. Engage customers with menu updates, promotions, and order notifications."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/food-beverage/" />
</Helmet> */}

        <Home/>
        <Client/>
        <Service/>
    </div>
  )
}

export default Food
