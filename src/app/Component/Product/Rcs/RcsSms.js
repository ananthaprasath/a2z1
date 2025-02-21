import React from 'react'
import Homercs from './Homercs'
import ComparisonTable from './ComparisonTable'
import Client from '../Whatsapp/Clients'
import RcsMessagingSection from './RcsMessagingSection'
import SocialMedia from '../Whatsapp/SocialMedia'
import FAQHome from '../../Resources/Faq/FAQHome'
import { RcsData } from '../../Resources/Faq/FaqData'


const RcsSms = () => {
  return (
    <div>
      <Homercs/>
      <ComparisonTable/>
      <Client/>
      <RcsMessagingSection/>
      <SocialMedia/>
      <FAQHome data={RcsData}/>
    </div>
  )
}

export default RcsSms