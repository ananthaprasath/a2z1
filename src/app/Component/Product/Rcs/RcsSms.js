import React from 'react'
import Homercs from './Homercs'
import ComparisonTable from './ComparisonTable'
import Client from '../Whatsapp/Clients'
import RcsMessagingSection from './RcsMessagingSection'
import SocialMedia from '../Whatsapp/SocialMedia'


const RcsSms = () => {
  return (
    <div>
      <Homercs/>
      <ComparisonTable/>
      <Client/>
      <RcsMessagingSection/>
      <SocialMedia/>
    </div>
  )
}

export default RcsSms