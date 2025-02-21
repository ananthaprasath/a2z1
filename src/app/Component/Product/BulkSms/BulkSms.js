import React from 'react'
import Services from './Services'
import Client from '../Whatsapp/Clients'
import PricingTabs from './Pricing'
import Reviews from './Reviews'
import BulkSmsHome from './BulkSmsHome'
import SocialMedia from '../Whatsapp/SocialMedia'
import Industries from './Industries'
import Features from './Features'
import FAQHome from '../../Resources/Faq/FAQHome'
import { bulkSmsData } from '../../Resources/Faq/FaqData'

const BulkSms = () => {
  return (
    <div>
        <Services/>
        <Client/>
        <PricingTabs/>
        <Reviews/>
        <BulkSmsHome/>
        <SocialMedia/>
        <Industries/>
        <Features/>
        <FAQHome data={bulkSmsData}/>
    </div>
  )
}

export default BulkSms